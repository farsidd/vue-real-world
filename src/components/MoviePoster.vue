<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ duration }}</p>
    <img :src="image" alt="movie poster" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      default: '90',
    },
    image: {
      type: String,
      validator: (propValue) => {
        const hasImageDirectory = propValue.indexOf('/images/') > -1
        const isPNG = propValue.endsWith('.png')
        const isJPG = propValue.endsWith('.jpeg') || propValue.endsWith('.jpg')
        const hasValidExtension = isPNG || isJPG
        return hasImageDirectory && hasValidExtension
      },
    },
  },
}
</script>