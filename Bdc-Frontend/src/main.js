import Vue from 'vue';
import axios from 'axios';
// import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store'
import bootstrap from './assets/js/bootstrap';
import VueParticles from 'vue-particles'
import VuePageTransition from 'vue-page-transition';
import VeeValidate from 'vee-validate';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VueLocalStorage from 'vue-localstorage';

// import fontawesome from '@/src/assets/fonts/font-awesome'
Vue.prototype.$http = axios;
const  token  =  localStorage.getItem("token")
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] =  token
}

Vue.config.productionTip = false

// global baseUrl declaration
// axios.defaults.baseURL = 'http://localhost:5000/api'

// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
// axios.defaults.headers.get['Accepts'] = ['application/json']

// const reqInterceptor = axios.interceptors.request.use(config => {
//   console.log('Request Interceptor', config)
//   return config
// });
// const resInterceptor = axios.interceptors.response.use(res => {
//   console.log('Response Interceptor', res)
//   return res
// });
// axios.interceptors.request.eject(reqInterceptor)
// axios.interceptors.response.eject(resInterceptor)




// from the 
window.$ = require('jquery')
window.JQuery = require('jquery')
Vue.use(VueLocalStorage)
Vue.use(VuePageTransition)
Vue.use(bootstrap);
Vue.use(VueParticles);
Vue.use(VeeValidate);
// Vue.use(VueAxios, axios)
Vue.component('v-select', vSelect)
// Vue.component('v-select', VueSelect.VueSelect);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')