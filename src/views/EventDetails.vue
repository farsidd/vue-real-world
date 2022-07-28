<template>
  <div v-if="event" class="events">
    <h1>{{event.title}}</h1>
    <h3>Status: {{event.completed}}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  name: 'Home',
  components: {
    EventCard
  },
  props: {
    id: {
        type: String,
        required: true
    }
  },
  data() {
    return {
      event: null,
    }
  },
  created() {
// Method # 1 to pass id
//     EventService.getEvent(this.$route.params.id).then(response => {
//       this.event = response.data
//     })
//     console.log(this.$route.params.id)
//   }

// Method # 2 to pass id as a prop
    EventService.getEvent(this.id).then(response => {
      this.event = response.data
    }).catch(err => {
      if(err.response && err.response.status == 404)
      {
        console.log(err.response.status)
      this.$router.push({name: '404Resource', params: {resource: 'event'}})
      } else {
                this.$router.push({name:'NetworkError'})
      }

    })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
