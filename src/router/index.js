import Vue from 'vue'
import Router from 'vue-router'

import homePage from '../components/home_page/home_page'
import sort from '../components/sort/sort.vue'
import myEpet from '../components/my_epet/my_epet.vue'
import shopCart from '../components/shop_cart/shop_cart.vue'

import page from '../components/home_page/home_page/homepage.vue'
import carFood from '../components/home_page/car_food/carFood.vue'
import newMeowClassroom from '../components/home_page/new_meow_classroom/newMeowClassroom.vue'
import specialSale from '../components/home_page/special_sale/specialSale.vue'
import superMarket from '../components/home_page/supermarket/superMarket.vue'
import tideProductVideo from '../components/home_page/tide _product _video/tideProductVide.vue'


/*import test from '../components/test.vue'*/


import register from '../components/my_epet/register/regist.vue'
import loadding from '../components/my_epet/loadding.vue'
import epet  from '../components/Epet/epet.vue'
/*import sanji  from '../components/sanjiliandong/sanji'*/

Vue.use(Router)

export default new Router({
  liveActiveClass:'active',

  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      component: homePage,
      children:[
        {
          path: 'page',
          component: page,
        },
        {
          path: 'carFood',
          component: carFood,
        },
        {
          path: 'newMeowClassroom',
          component: newMeowClassroom,
        },
        {
          path: 'specialSale',
          component: specialSale,
        },
        {
          path: 'superMarket',
          component: superMarket,
        },
        {
          path: 'tideProductVideo',
          component: tideProductVideo,
        },
        {
          path: '/',
          redirect: '/homePage/page'
        }
      ]
    },
    {
      path: '/sort',
      component: sort
    },
    {
      path: '/loadding',
      component: loadding,
    },
    {
      path: '/myEpet',
      component: myEpet,
      /*children:[
        {
          path:'/register',
          component:register
        }
      ]*/
    },
    {
      path: '/shopCart',
      component: shopCart
    },
    {
     path:'/myEpet/register',
     component:register
     },
    {
      path:'/myEpet/register/epet',
      component:epet
    },
   /* {
      path:'/sanji',
      component:sanji
    }*/

  ]
})
