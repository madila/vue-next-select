<template>
  <div class="vue-input">
    <slot name="prepend"></slot>
    <input
      ref="input"
      :modelValue="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="inputName"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.esc.exact="handleEscape"
      :tabindex="tabindex"
      :autofocus="autofocus"
    />
    <slot name="append"></slot>
  </div>
  <slot name="results"></slot>
</template>

<script>
import { ref, onMounted, onUpdated } from 'vue'

export default {
  inheritAttrs: false,
  name: 'vue-input',
  props: {
    modelValue: {
      required: true,
      type: String,
    },
    placeholder: {
      required: true,
      type: String,
    },
    disabled: {
      required: true,
      type: Boolean,
    },
    inputName: {
      required: true
    },
    tabindex: {
      required: true,
      type: Number,
    },
    autofocus: {
      required: true,
      type: Boolean,
    },
  },
  emits: ['update:modelValue', 'input', 'change', 'focus', 'blur', 'escape'],
  setup(props, context) {

    const { inputName } = props;
    const handleInput = event => {
      context.emit('input', event)
      context.emit('update:modelValue', inputName, event.target.value)
    }
    const handleChange = event => {
      context.emit('change', event)
      context.emit('update:modelValue', inputName, event.target.value)
    }
    const handleFocus = event => {
      context.emit('focus', event)
    }
    const handleBlur = event => {
      context.emit('blur', event)
    }

    const input = ref(null)
    const handleEscape = event => {
      input.value.blur()
      context.emit('escape', event)
    }
    onMounted(() => {
      if (props.autofocus) input.value.focus()
    })
    onUpdated(() => {
      if (props.autofocus) input.value.focus()
    })

    return {
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      inputName,
      input,
      handleEscape,
    }
  },
}
</script>
