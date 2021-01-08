import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCard from '../views/AddCard.vue'


Vue.use(VueRouter)

const routes = [
  {

    path: '/AddCard',
    name: 'AddCard',

    component: AddCard


  },
  {

    path: '/',

    name: 'Home',
    component: Home

  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  mode: 'history'
})

export default router