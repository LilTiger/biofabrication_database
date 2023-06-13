// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(ElementUI, { locale });

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


// import './assets/js/jquery-3.6.0.min.js'
// import './assets/js/bootstrap.min.js'
// import './assets/js/bootstrap.bundle.min.js'
// import "./assets/css/carousel.css";
// import "./assets/css/bootstrap.min.css";



// import * as echarts from "echarts"
// Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
