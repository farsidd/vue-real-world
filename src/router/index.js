import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import About from '@/views/About.vue'
import EventDetails from '@/views/EventDetails.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import FormValidation from '@/views/FormValidation.vue'
//Forms
import Form from '@/views/Form.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({page: parseInt(route.query.page) || 1})
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetails,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/form-validation',
    name: 'FormValidation',
    component: FormValidation
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/404/network',
    name: 'NetworkError',
    component: NetworkError,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
