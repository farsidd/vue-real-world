<template>
<component 
:is="vertical ? 'div' : 'span'"
v-for="option in options"
:key="option.value"
>
<BaseRadio
:value="option.value"
:label="option.label"
:name="name"
:modelValue="modelValue"
@update:modelValue="$emit('update:modelValue', $event)"
/>
</component>

</template>

<script>
import BaseRadio from './BaseRadio.vue'

export default {
  components: { BaseRadio },
  props: {
        modelValue: {
        type: [String,Number],
        required: true
    },
        options: {
        type: Array,
        required: true
    },
        name: {
        type: String,
        required: true
    },
        vertical: {
          type: Boolean,
          default: false
        }
  }
}


</script>