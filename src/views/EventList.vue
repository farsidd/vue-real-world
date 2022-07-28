<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <router-link :to="{name: 'EventList', query: {page: page-1}}"
    v-if="page!=1" rel="prev">Previous</router-link>

    <router-link v-if="hasNextPage" :to="{name: 'EventList', query: {page: page+1}}"
    rel="next">Next</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue'
export default {
  name: 'Home',
  components: {
    EventCard
  },
  props: ['page'],
  data() {
    return {
      events: null,
      totalEvents: 0
    }
  },
  created() {
    watchEffect(() => {
    this.events = null
    EventService.getEvents(25,this.page).then(response => {
      this.events = response.data
      this.totalEvents = response.headers['x-total-count'];
    }).catch(error => {
        this.$router.push({name:'NetworkError'})
      
    })
    })

  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents/25)
      return this.page < totalPages
    }
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
