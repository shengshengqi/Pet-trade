import Home from './components/home.vue'
import Sort1 from './components/sort1.vue'
import Sell from './components/sell.vue'
import Userimformation from './components/userimformation.vue'
import Haveupload from './components/haveupload.vue'
import Myorder from './components/myorder.vue'
const routers = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/myorder',
    component: Myorder
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/userimformation',
    component: Userimformation
  },
  {
    path: '/haveupload',
    component: Haveupload
  },
  {
    path: '/sort1',
    component: Sort1
  },
 
  {
    path: '/sell',
    component: Sell
  },
]
export default routers