import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './App.vue';
import first from './components/first.vue';
Vue.use(Router)

const routes = [
  {path:'/',component:App},
  {path:'/first',component:first}
]
const router=new VueRouter({
  routes
});

