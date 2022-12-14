import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EventList from '@/views/EventList.vue'
import About from '@/views/About.vue'
import EventDetails from '@/views/EventDetails.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import FormValidation from '@/views/FormValidation.vue'
import ComponentPattern from '@/views/ComponentPattern.vue'
import Animation from '@/views/Animation.vue'
//Forms
import Form from '@/views/Form.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/events',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
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
    path: '/component-pattern',
    name: 'ComponentPattern',
    component: ComponentPattern
  },
  {
    path: '/animation',
    name: 'Animation',
    component: Animation
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
    component: NetworkError
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
