import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Header from '@/components/header'
import Footer from '@/components/footer'

import Top from '@/components/top'
import Price from '@/components/price'
import Staff from '@/components/staff'
import Reserve from '@/components/reserve'
import Contact from '@/components/contact'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TOP',
      component: Top
    },
    {
      path: '/price',
      name: '料金',
      component: Price
    },
    {
      path: '/staff',
      name: 'スタッフ紹介',
      component: Staff
    },
    {
      path: '/reserve',
      name: '予約',
      component: Reserve
    },
    {
      path: '/contact',
      name: 'お問い合わせ',
      component: Contact
    },
  ]
})
