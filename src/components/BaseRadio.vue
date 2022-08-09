<template>
  <input
    type="radio"
    :checked="modelValue === value"
    @change="$emit('update:modelValue', value)"
    :value="value"
    name="pets"
  />
  <label>{{ label }}</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
