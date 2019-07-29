import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Animate from 'animate.css'
import store from '@/store'
import '@/main.scss'

Vue.use(Buefy)
Vue.use(Animate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
