// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from './routers';
Vue.use(VueRouter);
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.use(ElementUI);

//Vue.prototype.$http=axios;

const router = new VueRouter({
  mode: 'history',
  routes: routers
})
 
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})