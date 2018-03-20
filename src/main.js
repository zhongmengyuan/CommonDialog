import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import common from './common';
Vue.use(ElementUI);
new Vue({
  el: '#app',
  render: h => h(App)
})
