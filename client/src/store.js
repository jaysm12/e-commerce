import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    UDATEITEM(state, payload) {
      state.items = payload
    }
  },
  actions: {
    getItem(context, payload) {
      axios({ 
        method: 'get',
        url: 'http://localhost:3000/items'
      })
        .then(({data}) => {
          
        })
        .catch(err => {
          console.log('error ---------', err)
        })
    }
  }
})
