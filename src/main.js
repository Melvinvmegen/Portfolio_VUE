// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './main.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import VueTypedJs from 'vue-typed-js'
import VueParticles from 'vue-particles'
import vuetify from '@/plugins/vuetify'

import { securedAxioSIntance, plainAxiosIntance } from './backend/axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://mvm-db.herokuapp.com/api/v1'
axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use(Vuelidate)
Vue.use(VueAxios, {
  secured: securedAxioSIntance,
  plain: plainAxiosIntance
})
Vue.use(VueTypedJs)
Vue.use(VueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  securedAxioSIntance,
  plainAxiosIntance,
  vuetify,
  components: { App },
  template: '<App/>'
})
