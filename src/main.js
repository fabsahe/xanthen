import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import VueSmoothScroll from 'vue2-smooth-scroll'
import checkView from 'vue-check-view'

Vue.use(checkView)
Vue.use(VueSmoothScroll, {
  offset: -70
})
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
