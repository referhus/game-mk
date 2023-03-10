import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);

new Vue({
  vuetify,
  render: h => h(App),

}).$mount('#app')
