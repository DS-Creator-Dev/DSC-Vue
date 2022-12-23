// Home
import Home from './home/pages/Home.vue'

import * as VueRouter from 'vue-router'

const routes = [
  // Home
  { path: '/', component: Home },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {

    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: { y: 80 }
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.afterEach((to, from, fail) => {
  if(fail)
    console.log(fail)
})

export default router
