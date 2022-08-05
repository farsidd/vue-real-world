<template>
  <div>
    <button @click="toggle()">Open Model</button> |
    <button @click="toggle_2()">Open Model as GSAP</button>
 
  <!-- here we are passing fade which is defined in the app.vue so we can use it globally -->
  <!-- method 1 using transition element with the help of css -->
  <transition name="fade">
    <div v-if="isOpen">
      <div style="background-color: yellow">
        <h1>i am a model</h1>
      </div>
    </div>
  </transition>
  <!-- method 2 using javascript hooks | we are using library named GSAP here -->
    <transition @before-enter="beforeEnter" @enter="Enter" appear :css="false">
    <div v-if="isOpen_2">
      <br /><br /><br />
      <div style="background-color: yellow">
        <h1>i am a model</h1>
      </div>
    </div>
  </transition>

<!-- here you can see that you can do transition with gsap library without transition element or without
javascript life-cycle hook for tranisition like @beforeEnter,@enter...
You can see the implementation of this stratergy in mounted() hook of vue.
Ususally this kind of transition implement of api call -->
<div id="container">
    <div v-for="card in cards" :key="card.id" class="card"></div>
</div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      isOpen: false,
      isOpen_2: false,
      cards: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
      ]
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    toggle_2() {
      this.isOpen_2 = !this.isOpen_2
    },
    beforeEnter(el)
    {
        el.style.opacity = 0
        el.style.transform = 'scale(0,0)'
    },
    Enter(el,done) {
        gsap.to(el, {
            duration: 1,
            opacity: 1,
            scale: 1,
            ease: 'bounce.out',
            onComplete: done
        })
    }
  },
  mounted() {
    gsap.from('.card', {
        opacity: 0,
        duration:0.5,
        scale: 0,
        y: 200,
        ease: 'power1',
        stagger: 0.1
    })
  }
}
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.card {
   height: 6.5em;
   width: 6.5em;
    background-color: red;
    
}
</style>