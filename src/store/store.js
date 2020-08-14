import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userData: {
      name: '',
      company: '',
      email: '',
      city: ''
    },
    query: '',
    error: ''
  },
  mutations: {
    setName (state, name) {
      state.userData.name = name
    },
    setCompany (state, company) {
      state.userData.company = company
    },
    setEmail (state, email) {
      state.userData.email = email
    },
    setCity (state, city) {
      state.userData.city = city
    },
    setQuery (state, query) {
      state.query = query
    },
  }
})