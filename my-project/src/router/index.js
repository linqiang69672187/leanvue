import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SayHi from '@/components/SayHi'
import BlogList from '@/components/BlogList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/say_hi',
      name: 'SayHi',
      component: SayHi
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogList
    }
  ]
})
