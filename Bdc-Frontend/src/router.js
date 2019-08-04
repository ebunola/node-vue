import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
// import Home from './views/Home.vue'
// import History from './views/historicRates.vue'
// import Gallery from './views/gallery.vue'
// import Contact from './views/contact.vue'
// import News from './views/news.vue'
import Admin from './views/admin/admin'
import Operator from './views/operator/operator'
import Operators from './views/admin/operator'
import Newrate from './views/admin/newrate'
import Advert from './views/admin/advert'
import Previousrate from './views/admin/previousrate'
import Settings from './views/admin/settings'
import OperatorSettings from './views/operator/settings'
// import Scrolling from './components/scrollingRates'
// import Home from './views/Home.vue'

Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   hash: false,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       components:{
//         default:() => import('./views/Home.vue'),
//         customernav:() => import('./components/customernav'),
//         scrolling:() => import('./components/scrollingRates')
//       },
//       meta: {guest: true}
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       components:{
//         default:() => import('./views/About.vue'),
//         customernav:() => import('./components/customernav'),
//         scrolling:() => import('./components/scrollingRates')
//       }
//       /*component: () => import(/* webpackChunkName: "about" *//* './views/About.vue')*/
//     },
//     {
//       path: '/historic-rates',
//       name: 'history',
//       components: {
//         default:() => import('./views/historicRates.vue'),
//         customernav:() => import('./components/customernav'),
//         scrolling:() => import('./components/scrollingRates')
//       }
//     },
//     {
//       path: '/contact-us',
//       name: 'contact',
//       components: {
//         default:() => import('./views/contact.vue'),
//         customernav:() => import('./components/customernav'),
//         scrolling:() => import('./components/scrollingRates')
//       }
//     },
//     {
//       path: '/news',
//       name: 'news',
//       components: {
//         default:() => import('./views/news.vue'),
//         customernav:() => import('./components/customernav'),
//         scrolling:() => import('./components/scrollingRates')
//       }
//     },
//     {
//       path: '/gallery',
//       name: 'gallery',
//       components: {
//         default:() => import('./views/gallery.vue'),
//         customernav:() => import('./components/customernav'),
//         scrolling:() => import('./components/scrollingRates')
//       }
//     },
//     {
//       path: '/signup',
//       name: 'signup',
//       component: 
//         require('./views/signup.vue').default,
//       meta: {
//         requiresAuth: true, adminAuth: false, operatorAuth: true
//       }
      
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: 
//         require('./views/login.vue').default,
//       meta: { 
//           requiresAuth: true, adminAuth: true, operatorAuth: true
//       }
      
//     },

//     {
//       path: '/admin',
//       name: 'admin',
//       component: Admin,
//       children: [     
//         {
//           path: 'operators',
//           name: 'operators',
//           component: Operators
//         },
//         {
//           path: '',
//           name: 'newrate',
//           component: Newrate
//         },
//         {
//           path: 'advert',
//           name: 'advert',
//           component: Advert
//         },
//         {
//           path: 'previousrate',
//           name: 'previousrate',
//           component: Previousrate
//         },
//         {
//           path: 'settings',
//           name: 'settings',
//           component: Settings
//         },
//       ],
//       meta: { requiresAuth: true, operatorAuth: false, adminAuth:true }
//     },
//     {
//       path: '/operator',
//       name: 'operator',
//       component: Operator,
//       children: [     
//         {
//           path: '',
//           name: 'newrate',
//           component: Newrate
//         },
//         {
//           path: 'previousrate',
//           name: 'previousrate',
//           component: Previousrate
//         },
//         {
//           path: 'settings',
//           name: 'settings',
//           component: OperatorSettings
//         },
//       ],
//       meta: { requiresAuth: true, operatorAuth: true, adminAuth:false }
//     },
//     { path: '*', redirect: '/' }
//   ]
// }
// )

let router = new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
        default:() => import('./views/Home.vue'),
        customernav:() => import('./components/customernav'),
        scrolling:() => import('./components/scrollingRates')
      },
      meta: {guest: true}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components:{
        default:() => import('./views/About.vue'),
        customernav:() => import('./components/customernav'),
        scrolling:() => import('./components/scrollingRates')
      }
      /*component: () => import(/* webpackChunkName: "about" *//* './views/About.vue')*/
    },
    {
      path: '/historic-rates',
      name: 'history',
      components: {
        default:() => import('./views/historicRates.vue'),
        customernav:() => import('./components/customernav'),
        scrolling:() => import('./components/scrollingRates')
      }
    },
    {
      path: '/contact-us',
      name: 'contact',
      components: {
        default:() => import('./views/contact.vue'),
        customernav:() => import('./components/customernav'),
        scrolling:() => import('./components/scrollingRates')
      }
    },
    {
      path: '/news',
      name: 'news',
      components: {
        default:() => import('./views/news.vue'),
        customernav:() => import('./components/customernav'),
        scrolling:() => import('./components/scrollingRates')
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      components: {
        default:() => import('./views/gallery.vue'),
        customernav:() => import('./components/customernav'),
        scrolling:() => import('./components/scrollingRates')
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: 
        require('./views/signup.vue').default,
      // meta: {
      //   requiresAuth: true, 
      // }
      
    },
    {
      path: '/login',
      name: 'login',
      component: 
        require('./views/login.vue').default,
      
      
    },

    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [     
        {
          path: 'operators',
          name: 'operators',
          component: Operators
        },
        {
          path: 'newrate',
          name: 'newrate',
          component: Newrate
        },
        {
          path: 'advert',
          name: 'advert',
          component: Advert
        },
        {
          path: 'previousrate',
          name: 'previousrate',
          component: Previousrate
        },
        {
          path: '',
          name: 'settings',
          component: Settings
        },
      ],
      meta: { requiresAuth: true, }
    },
    {
      path: '/operator',
      name: 'operator',
      component: Operator,
      children: [     
        {
          path: '',
          name: 'newrate',
          component: Newrate
        },
        {
          path: 'previousrate',
          name: 'previousrate',
          component: Previousrate
        },
        {
          path: 'settings',
          name: 'settings',
          component: OperatorSettings
        },
      ],
      meta: { requiresAuth: true, }
    },
    { path: '*', redirect: '/' }
  ]
});

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem("token") == null) {
//       next({
//         path: '/login',
//         params: {nextUrl: to.fullPath}
//       })
//     } else {
//       let user = JSON.parse(localStorage.getItem('user'))
//       if(to.matched.some(record => record.meta.adminAuth)) {
//         if(user.role == 1) {
//           next()
//         }
//         else{
//           next({name: 'admin'})
//         }
//       } else {
//         next()
//       }
//     }
//   }else if(to.matched.some(record => record.meta.guest)){
//     if(localStorage.getItem("token") == null){
//       next()
//     }
//     else{
//       next({name: 'admin'})
//     }
//   }else{
//     next()
//   }
// })
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
