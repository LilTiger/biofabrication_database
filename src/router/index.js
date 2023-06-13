import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/index/index'
import Models from '@/pages/models'
import Predict from '@/pages/predict'
import Print from '@/pages/print'
import Organs from '@/pages/organs'
import Trend from '@/pages/trend/trend'
import Cooperation from '@/pages/cooperation/cooperation'
import Hotspot from '@/pages/hotspot/hotspot'
import OrganFunction from '@/pages/organFunction'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originalPush.call(this,location).catch(err=>err)
}

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes : [
     {
       path: '/',
       // redirect: '/',
       component: Index
     },
    {
      path: '/trend',
      name: 'trend',
      component: Trend
    },
    {
      path: '/models',
      name: 'models',
      component: Models
    },
    {
      path: '/predict',
      name: 'predict',
      component: Predict
    },
    {
      path: '/print',
      name: 'print',
      component: Print
    },
    {
      path: '/organs',
      name: 'organs',
      component: Organs
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: Cooperation
    },
    {
      path: '/hostpost',
      name: 'hotspot',
      component: Hotspot
    },
    {
      path: '/organFunction',
      name: 'organFunction',
      component: OrganFunction
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
