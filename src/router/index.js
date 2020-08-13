import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '@/pages/Signin.vue'
import Home from '@/pages/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sign-in',
      name: 'Signin',
      component: Signin
    }
  ]
})
