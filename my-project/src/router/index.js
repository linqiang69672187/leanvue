import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SayHi from '@/components/SayHi'
import BlogList from '@/components/BlogList'
import Blog from '@/components/Blog'
import TwoWayBinding from '@/components/TwoWayBinding'
import Form_input from '@/components/form_input'
import Form_submit from '@/components/Formsubmit'
import SayHiFromMinx from '@/components/SayHiFromMinx'
import ShowCounter1 from '@/components/ShowCounter1'
import ShowCounter2 from '@/components/ShowCounter2'

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
    {
      path: '/form_submit',
      name: 'form_submit',
      component: Form_submit
    },
    {
      path: '/say_hi_from_mixin',
      name: 'SayHiFromMinx',
      component: SayHiFromMinx
    },
    {
      path: '/show_counter_1',
      name: 'ShowCounter1',
      component: ShowCounter1
    },
    {
      path: '/show_counter_2',
      name: 'ShowCounter2',
      component: ShowCounter2
    },
  ]
})
