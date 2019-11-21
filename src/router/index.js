//导入组件到路由
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homepage from '../components/homepage.vue'
import store from '../components/store.vue'
import trolley from '../components/trolley.vue'
import mine from '../components/mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/homepage'
    },
    {
      path:'/homepage',
      component:homepage
    },
    {
      path:'/store',
      component:store
    },
    {
      path:'/trolley',
      component:trolley
    },
    {
      path:'/mine',
      component:mine
    }
  ],
  linkActiveClass:'mark'
})
