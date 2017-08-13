// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueScroller from 'vue-scroller'
import { Swipe, SwipeItem } from 'mint-ui';

import app from './App'
import router from './router'
import { Navbar, TabItem,TabContainer, TabContainerItem,Cell } from 'mint-ui'
import "./mock/mockServer.js"


Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(VueScroller)

Vue.config.productionTip = false


/* eslint-disable no-new */


new Vue({
  el: '#app',
  render: h=>h(app),
  router

})
