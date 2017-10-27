import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nic from '@/components/Nic'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: HelloWorld
  }, {
    path: '/nic',
    name: 'Nic',
    component: Nic
  }]
})
