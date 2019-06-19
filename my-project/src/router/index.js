import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SayHi from '@/components/SayHi'
import BlogList from '@/components/BlogList'
import Blog from '@/components/Blog'
import TwoWayBinding from '@/components/TwoWayBinding'
import Form_input from '@/components/form_input'

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
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/twowaybinding',
      name: 'twowaybinding',
      component: TwoWayBinding
    },
    {
      path: '/form_input',
      name: 'form_input',
      component: Form_input
    },
  ]
})
