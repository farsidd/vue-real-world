import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const notification = reactive({message: ''});

createApp(App)
  .use(store)
  .use(router)
  .provide('notification', notification)
  .mount('#app')
