<template>
  <label>{{label}}</label>
  <select v-bind="{...$attrs, onChange: ($event) => {$emit('update:modelValue', $event.target.value)}}">
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        modelValue: {
            type: [String, Number],
            required: true
        },
        options: {
            type: Array,
            required: true
        }
    }
}
</script>