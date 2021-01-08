import Vue from 'vue'
import vendor from './assets/vendors.json'
import App from './App.vue'
import myCardsjson from './assets/Cards.json'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data(){return{
    vendors: vendor.vendors,
    myCards: myCardsjson.myCards
  }},
  
  router,
  render: h => h(App)
}).$mount('#app')
