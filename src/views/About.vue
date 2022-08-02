<template>
  <div class="about" >
    <a :href="urll">Login</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // data() {
  //   return {
  //     urll: ''
  //   }
  // },
  // created() {

  // },
  // mounted() {
  
  //   if(this.$route.query.code) {
  //     const url = new URL('https://fbadsapi.sohaib.pk/facebook/callback')
  //     url.search = window.location.search
  //     console.log(url.toString())
  //     axios.get(url.toString()).then(res => {
  //       console.log(res)
  //     })
  //   }
  //   axios.get('https://fbadsapi.sohaib.pk/facebook/login').then(res => {
  //     this.urll=res.data;
  //   }).catch(err => {console.log(err)})

  // }
}
</script>
