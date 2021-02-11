// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueClipboard from 'vue-clipboard2'
import VueQrcodeReader from 'vue-qrcode-reader';
import vClickOutside from 'v-click-outside';
Vue.use(VueQrcodeReader);
Vue.use(vClickOutside);
Vue.use(VueClipboard);
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
