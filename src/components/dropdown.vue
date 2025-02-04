<template>
  <ul class="vue-dropdown" @mousedown.prevent :style="{ top: headerHeight }" v-bind="dataAttrs">
    <template v-for="option of modelValue" :key="option.key">
      <li
        v-if="option.visible && option.hidden === false"
        @click="handleClickItem($event, option)"
        class="vue-dropdown-item"
        :class="{
          selected: option.selected,
          disabled: option.disabled,
          highlighted: option.highlighted,
          group: option.group,
        }"
        @mousemove="handleMousemove($event, option)"
      >
        <slot :option="option">
          <span>{{ option.label }}</span>
        </slot>
      </li>
    </template>
  </ul>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  inheritAttrs: false,
  name: 'vue-dropdown',
  props: {
    modelValue: {
      required: true,
      type: Array,
      validator(modelValue) {
        return modelValue.every(option => {
          return typeof option.key !== undefined && option.label !== undefined && typeof option.selected === 'boolean'
        })
      },
    },
    headerHeight: {
      required: true,
      type: String,
    },
  },
  emits: ['click-item', 'mousemove'],
  setup(props, context) {
    const dataAttrs = inject('dataAttrs')

    const handleClickItem = (event, option) => {
      if (option.disabled) return
      context.emit('click-item', event, option)
    }

    const handleMousemove = (event, option) => {
      context.emit('mousemove', event, option)
    }

    return {
      dataAttrs,
      handleClickItem,
      handleMousemove,
    }
  },
}
</script>
