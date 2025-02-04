<template>
  <div
    ref="wrapper"
    class="vue-select"
    :class="{ disabled }"
    :tabindex="isFocusing ? -1 : tabindex"
    @focus="focus"
    @blur="() => (searchable ? false : blur())"
    v-bind="dataAttrs"
    @keypress.enter="
      () => highlightedOriginalIndex !== null && addOrRemoveOption($event, optionsWithInfo[highlightedOriginalIndex])
    "
    @keydown.down.prevent="pointerForward"
    @keydown.up.prevent="pointerBackward"
  >
    <div ref="header" class="vue-select-header">
      <template
        v-if="(multiple && taggable && modelValue.length === 0) || (searchable === false && taggable === false)"
      >
        <div class="vue-input">
          <input :placeholder="innerPlaceholder" :data-initial="initialValue" :name="inputName" readonly @click="focus" />
        </div>
      </template>

      <template v-if="multiple && taggable">
        <v-tags :modelValue="optionsWithInfo" :collapse-tags="collapseTags" tabindex="-1" @click="focus">
          <template #default="{ option }">
            <slot name="tag" :option="option">
              <span>{{ option.label }}</span>
              <img
                src="./images/delete.svg"
                alt="delete tag"
                class="icon delete"
                @click.prevent.stop="() => addOrRemoveOption($event, option)"
              />
            </slot>
          </template>
        </v-tags>
        <span
          class="icon arrow-downward"
          :class="{ active: isFocusing }"
          @click="toggle"
          @mousedown.prevent.stop
        >
          <slot name="icon"></slot>
        </span>
      </template>

      <template v-else>
        <v-input
          ref="input"
          v-if="searchable"
          v-model="searchingInputValue"
          :disabled="disabled"
          :placeholder="isFocusing ? searchPlaceholder : innerPlaceholder"
          @input="handleInputForInput"
          @change="handleChangeForInput"
          @focus="handleFocusForInput"
          @blur="handleBlurForInput"
          @escape="blur"
          :input-name="inputName"
          :data-initial="initialValue"
          :autofocus="autofocus || (taggable && searchable)"
          :tabindex="tabindex"
        ></v-input>

        <span v-show="loading" class="icon loading">
          <div></div>
          <div></div>
          <div></div>
        </span>
        <span
          v-show="loading === false"
          class="icon arrow-downward"
          :class="{ active: isFocusing }"
          @click="toggle"
          @mousedown.prevent.stop
        >
          <slot name="icon"></slot>
        </span>
      </template>
    </div>

    <template v-if="multiple && taggable && searchable">
      <v-input
        v-show="isFocusing"
        ref="input"
        v-model="searchingInputValue"
        :disabled="disabled"
        :placeholder="searchPlaceholder"
        @input="handleInputForInput"
        @change="handleChangeForInput"
        @focus="handleFocusForInput"
        @blur="handleBlurForInput"
        @escape="blur"
        :input-name="inputName"
        :data-initial="initialValue"
        :tabindex="tabindex"
        :autofocus="autofocus || (taggable && searchable)"
      >
        <template #append>
          <span v-show="loading" class="icon loading">
            <div></div>
            <div></div>
            <div></div>
          </span>
        </template>
      </v-input>
    </template>

    <v-dropdown
      ref="dropdown"
      v-show="isFocusing"
      v-model="optionsWithInfo"
      @click-item="addOrRemoveOption"
      @mousemove="(ev, option) => pointerSet(option.originalIndex)"
      :header-height="headerAndInputHeight"
    >
      <template #default="{ option }">
        <slot name="dropdown-item" :option="option.originalOption">
          <span>{{ option.label }}</span>
        </slot>
      </template>
    </v-dropdown>
  </div>
</template>

<script>
import { ref, computed, watch, provide, getCurrentInstance, nextTick } from 'vue'
import VInput from './components/input.vue'
import VTags from './components/tags.vue'
import VDropdown from './components/dropdown.vue'
import { addOption, removeOption, getOptionByValue, hasOption } from './crud'
import normalize from './normalize'
import { useHeight, usePointer } from './hooks'
import { version } from '../package.json'

const VueSelect = {
  name: 'vue-select',
  inheritAttrs: false,
  props: {
    modelValue: {
      required: true,
    },
    emptyModelValue: {
      default: null,
    },
    inputName: {
      required: true
    },
    initialValue: {
      type: [Array, String]
    },
    options: {
      required: true,
      type: Array,
    },
    visibleOptions: {
      type: [Array, null],
      default: null,
    },
    multiple: {
      default: false,
      type: Boolean,
    },
    min: {
      default: 0,
      type: Number,
    },
    max: {
      default: Infinity,
      type: Number,
    },
    closeOnSelect: {
      default: false,
      type: Boolean,
    },
    clearOnSelect: {
      default: false,
      type: Boolean,
    },
    hideSelected: {
      default: false,
      type: Boolean,
    },
    labelBy: {
      type: [String, Function],
    },
    valueBy: {
      type: [String, Function],
    },
    disabledBy: {
      default: 'disabled',
      type: [String, Function],
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    placeholder: {
      default: 'Select option',
      type: String,
    },
    searchPlaceholder: {
      default: 'Type to search',
      type: String,
    },
    searchable: {
      default: false,
      type: Boolean,
    },
    clearOnClose: {
      default: false,
      type: Boolean,
    },

    taggable: {
      default: false,
      type: Boolean,
    },
    collapseTags: {
      default: false,
      type: Boolean,
    },
    tabindex: {
      default: 0,
      type: Number,
    },
    autofocus: {
      default: false,
      type: Boolean,
    },
    groupBy: {
      default: 'group',
      type: [String, Function],
    },
  },
  emits: [
    'update:modelValue',
    'selected',
    'removed',
    'opened',
    'closed',
    'search:input',
    'search:change',
    'search:focus',
    'search:blur',
  ],
  setup(props, context) {
    const { labelBy, valueBy, disabledBy, groupBy, min, max, options, inputName, initialValue } = normalize(props)

    const instance = getCurrentInstance()
    const wrapper = ref()
    const dropdown = ref()
    const input = ref()
    const inputEl = computed(() => input.value?._.refs.input)
    const isFocusing = ref(false)

    watch(
      () => isFocusing.value,
      () => {
        if (isFocusing.value) {
          context.emit('opened')
          if (props.searchable) {
            if (inputEl.value !== document.activeElement) {
              inputEl.value.focus()
            }
            context.emit('search:focus')
          } else {
            wrapper.value.focus()
          }
        } else {
          if (props.searchable) {
            if (inputEl.value === document.activeElement) {
              inputEl.value.blur()
            }
            if (props.clearOnClose) clearInput()
            context.emit('search:blur')
          } else {
            wrapper.value.blur()
          }
          context.emit('closed')
        }
      },
    )
    const focus = () => {
      if (props.disabled) return
      isFocusing.value = true
    }
    const blur = () => {
      isFocusing.value = false
    }
    const toggle = () => {
      if (isFocusing.value) blur()
      else focus()
    }
    watch(
      () => props.disabled,
      () => blur(),
    )

    const header = ref()
    const headerHeight = useHeight(header, () => props.modelValue)
    const inputHeight = computed(() => (props.searchable && props.multiple && props.taggable ? '22px' : '0px'))
    const headerAndInputHeight = computed(() => parseFloat(headerHeight.value) + parseFloat(inputHeight.value) + 'px')

    // input
    const searchingInputValue = ref('')
    const handleInputForInput = event => {
      context.emit('search:input', event, props)
    }
    const handleChangeForInput = event => {
      context.emit('search:change', event, props)
    }
    const handleFocusForInput = event => {
      focus()
    }
    const handleBlurForInput = event => {
      blur()
    }
    const searchRe = computed(() => new RegExp(searchingInputValue.value, 'i'))
    const searchedOptions = computed(() => {
      return searchingInputValue.value
        ? options.value.filter(option => searchRe.value.test(labelBy.value(option)))
        : undefined
    })

    // sync model value
    const normalizedModelValue = ref([])
    const isSynchronoused = () => {
      if (props.multiple) {
        if (Array.isArray(props.modelValue) === false) return false
        if (normalizedModelValue.value.length !== props.modelValue.length) return false
        if (
          Object.keys(normalizedModelValue.value).some(
            index =>
              normalizedModelValue.value[index] !==
              getOptionByValue(options.value, props.modelValue[index], { valueBy: valueBy.value }),
          )
        )
          return false
      } else {
        if (normalizedModelValue.value.length === 0 && props.modelValue !== props.emptyModelValue) return false
        if (normalizedModelValue.value.length === 1 && props.modelValue === props.emptyModelValue) return false
        if (
          normalizedModelValue.value[0] !==
          getOptionByValue(options.value, props.modelValue, { valueBy: valueBy.value })
        )
          return false
      }
      return true
    }
    const syncFromModelValue = () => {
      if (isSynchronoused()) return
      normalizedModelValue.value = []
      const modelValue = props.multiple
        ? props.modelValue
        : props.modelValue === props.emptyModelValue
        ? []
        : [props.modelValue]
      for (const value of modelValue) {
        const option = getOptionByValue(options.value, value, { valueBy: valueBy.value })
        // guarantee options has modelValue
        if (hasOption(options.value, option, { valueBy: valueBy.value }) === false) continue
        normalizedModelValue.value = addOption(normalizedModelValue.value, option, {
          max: Infinity,
          valueBy: valueBy.value,
        })
      }
    }
    syncFromModelValue()
    watch(
      () => props.modelValue,
      () => syncFromModelValue(),
      { deep: true },
    )

    const syncToModelValue = () => {
      if (isSynchronoused()) return
      const selectedValues = normalizedModelValue.value.map(option => valueBy.value(option))
      if (props.multiple) {
        context.emit('update:modelValue', props, selectedValues)
      } else {
        if (selectedValues.length) context.emit('update:modelValue', props, selectedValues[0])
        else context.emit('update:modelValue', props, props.emptyModelValue)
      }
    }
    watch(
      () => normalizedModelValue,
      () => syncToModelValue(),
      { deep: true },
    )

    // guarantee options has modelValue
    watch(
      () => options.value,
      () => {
        const selectedValueSet = new Set(normalizedModelValue.value.map(option => valueBy.value(option)))
        normalizedModelValue.value = options.value.filter(option => selectedValueSet.has(valueBy.value(option)))
      },
      { deep: true },
    )

    const addOrRemoveOption = (event, option) => {
      if (props.disabled) return

      if (option.group && props.multiple) addOrRemoveOptionForGroupOption(event, option)
      else addOrRemoveOptionForNonGroupOption(event, option)

      if (props.closeOnSelect === true) isFocusing.value = false
      if (props.clearOnSelect === true && searchingInputValue.value) clearInput()
    }
    const addOrRemoveOptionForGroupOption = (event, option) => {
      option = option.originalOption
      const has = option.value.every(value => {
        const option = getOptionByValue(options.value, value, { valueBy: valueBy.value })
        return hasOption(normalizedModelValue.value, option, { valueBy: valueBy.value })
      })
      if (has) {
        option.value.forEach(value => {
          const option = getOptionByValue(options.value, value, { valueBy: valueBy.value })
          normalizedModelValue.value = removeOption(normalizedModelValue.value, option, {
            min: min.value,
            valueBy: valueBy.value,
          })
          context.emit('removed', props, option)
        })
      } else {
        option.value.forEach(value => {
          const option = getOptionByValue(options.value, value, { valueBy: valueBy.value })
          if (hasOption(normalizedModelValue.value, option, { valueBy: valueBy.value })) return
          normalizedModelValue.value = addOption(normalizedModelValue.value, option, {
            max: max.value,
            valueBy: valueBy.value,
          })
          context.emit('selected', props, option)
        })
      }
      if (props.closeOnSelect === true) isFocusing.value = false
      if (props.clearOnSelect === true && searchingInputValue.value) {
        // simulate clear input value
        input.value._.refs.input.value = ''
        input.value._.refs.input.dispatchEvent(new Event('input'))
        input.value._.refs.input.dispatchEvent(new Event('change'))
      }
    }

    const addOrRemoveOptionForNonGroupOption = (event, option) => {
      option = option.originalOption
      if (hasOption(normalizedModelValue.value, option, { valueBy: valueBy.value })) {
        normalizedModelValue.value = removeOption(normalizedModelValue.value, option, {
          min: min.value,
          valueBy: valueBy.value,
        })
        context.emit('removed', props, option)
      } else {
        if (!props.multiple) {
          const removingOption = normalizedModelValue.value[0]
          normalizedModelValue.value = removeOption(normalizedModelValue.value, normalizedModelValue.value[0], {
            min: 0,
            valueBy: valueBy.value,
          })
          context.emit('removed', props, removingOption)
        }
        normalizedModelValue.value = addOption(normalizedModelValue.value, option, {
          max: max.value,
          valueBy: valueBy.value,
        })
        context.emit('selected', props, option)
      }
    }

    const clearInput = () => {
      // simulate clear input value
      inputEl.value.value = ''
      inputEl.value.dispatchEvent(new Event('input'))
      inputEl.value.dispatchEvent(new Event('change'))
    }

    const renderedOptions = computed(() => props.visibleOptions ?? searchedOptions.value ?? options.value)

    const highlightedOriginalIndex = ref(0)
    const optionsWithInfo = computed(() => {
      const selectedValueSet = new Set(normalizedModelValue.value.map(option => valueBy.value(option)))
      const visibleValueSet = new Set(renderedOptions.value.map(option => valueBy.value(option)))

      const optionsWithInfo = options.value.map((option, index) => {
        const optionWithInfo = {
          key: valueBy.value(option),
          label: labelBy.value(option),
          // selected: selectedValueSet.has(valueBy.value(option)),
          // disabled: disabledBy.value(option),
          group: groupBy.value(option),
          // visible: visibleValueSet.has(valueBy.value(option)),
          // hidden: props.hideSelected ? selectedValueSet.has(valueBy.value(option)) : false,
          highlighted: index === highlightedOriginalIndex.value,
          originalIndex: index,
          originalOption: option,
        }

        optionWithInfo.selected = optionWithInfo.group
          ? option.value.every(value => selectedValueSet.has(value))
          : selectedValueSet.has(valueBy.value(option))

        optionWithInfo.disabled = optionWithInfo.group
          ? disabledBy.value(option) ||
            option.value.every(value => {
              const option = getOptionByValue(options.value, value, { valueBy: valueBy.value })
              return disabledBy.value(option)
            })
          : disabledBy.value(option)

        optionWithInfo.visible = optionWithInfo.group
          ? option.value.some(value => visibleValueSet.has(value))
          : visibleValueSet.has(valueBy.value(option))

        optionWithInfo.hidden = props.hideSelected
          ? optionWithInfo.group
            ? option.value.every(value => selectedValueSet.has(value))
            : selectedValueSet.has(valueBy.value(option))
          : false

        return optionWithInfo
      })

      for (const option of optionsWithInfo) {
        if (option.group === false) continue
        if (option.disabled) {
          const values = new Set(option.originalOption.value)
          optionsWithInfo
            .filter(optionWithInfo => values.has(valueBy.value(optionWithInfo.originalOption)))
            .forEach(optionWithInfo => (optionWithInfo.disabled = true))
        }
      }

      return optionsWithInfo
    })
    const { pointerForward: _pointerForward, pointerBackward: _pointerBackward, pointerSet } = usePointer(
      optionsWithInfo,
      highlightedOriginalIndex,
    )
    const pointerForward = (...args) => {
      _pointerForward(...args)
      nextTick(updateScrollTop)
    }
    const pointerBackward = (...args) => {
      _pointerBackward(...args)
      nextTick(updateScrollTop)
    }
    const updateScrollTop = () => {
      const highlightedEl = wrapper.value?.querySelector('.highlighted')
      if (!highlightedEl) return
      if (!dropdown.value) return

      const computedStyle = getComputedStyle(highlightedEl)
      while (
        highlightedEl.offsetTop +
          parseFloat(computedStyle.height) +
          parseFloat(computedStyle.paddingTop) +
          parseFloat(computedStyle.paddingBottom) >
        dropdown.value.$el.clientHeight + dropdown.value.$el.scrollTop
      ) {
        dropdown.value.$el.scrollTop =
          dropdown.value.$el.scrollTop +
          parseFloat(computedStyle.height) +
          parseFloat(computedStyle.paddingTop) +
          parseFloat(computedStyle.paddingBottom)
      }
      while (highlightedEl.offsetTop < dropdown.value.$el.scrollTop) {
        dropdown.value.$el.scrollTop =
          dropdown.value.$el.scrollTop -
          parseFloat(computedStyle.height) -
          parseFloat(computedStyle.paddingTop) -
          parseFloat(computedStyle.paddingBottom)
      }
    }

    const dataAttrs = computed(() => ({
      'data-initial-value': initialValue,
      'data-is-focusing': isFocusing.value,
      'data-visible-length': optionsWithInfo.value.filter(option => option.visible && option.hidden === false).length,
      'data-not-selected-length': options.value.length - optionsWithInfo.value.filter(option => option.selected).length,
      'data-selected-length': optionsWithInfo.value.filter(option => option.selected).length,
      'data-addable': optionsWithInfo.value.filter(option => option.selected).length < max.value,
      'data-removable': optionsWithInfo.value.filter(option => option.selected).length > min.value,
      'data-total-length': options.value.length,
      'data-multiple': props.multiple,
    }))
    provide('dataAttrs', dataAttrs)

    const innerPlaceholder = computed(() => {
      const selectedOptions = optionsWithInfo.value.filter(option => option.selected).filter(option => !option.group)

      if (props.multiple) {
        if (selectedOptions.length === 0) {
          return props.placeholder
        } else if (selectedOptions.length === 1) {
          return '1 option selected'
        } else {
          return selectedOptions.length + ' options selected'
        }
      } else {
        if (selectedOptions.length === 0) {
          return props.placeholder
        } else {
          return selectedOptions[0].label + ''
        }
      }
    })

    return {
      isFocusing,
      inputName,
      initialValue,
      wrapper,
      dropdown,
      input,
      focus,
      blur,
      toggle,

      header,
      headerAndInputHeight,

      searchingInputValue,
      handleInputForInput,
      handleChangeForInput,
      handleFocusForInput,
      handleBlurForInput,

      optionsWithInfo,
      addOrRemoveOption,

      dataAttrs,

      innerPlaceholder,

      highlightedOriginalIndex,
      pointerForward,
      pointerBackward,
      pointerSet,
    }
  },
  components: {
    VInput,
    VTags,
    VDropdown,
  },
}

VueSelect.__VERSION__ = version

export default VueSelect
</script>
