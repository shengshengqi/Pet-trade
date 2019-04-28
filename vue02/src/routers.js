import Home from './components/home.vue'
import Sort1 from './components/sort1.vue'
import Sort2 from './components/sort2.vue'
import Sort3 from './components/sort3.vue'
import Sort4 from './components/sort4.vue'
import Sort5 from './components/sort5.vue'
import Sort6 from './components/sort6.vue'
import Sell from './components/sell.vue'
const routers = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/sort1',
    component: Sort1
  },
  {
    path: '/sort2',
    component: Sort2
  },
  {
    path: '/sort3',
    component: Sort3
  },
  {
    path: '/sort4',
    component: Sort4
  },
  {
    path: '/sort5',
    component: Sort5
  },
  {
    path: '/sort6',
    component: Sort6
  },
  {
    path: '/sell',
    component: Sell
  },
]
export default routers