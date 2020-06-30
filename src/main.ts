import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(VCharts)
Vue.use(Buefy)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  //动态刷新路由
  if (store.state.menus.routeList.length > 0) {
  } else {
    store.dispatch('menus/getMenus')
  }
  if (to.meta.requireAuth) {
    //判断是否要登录才能打开页面
    if (store.state.app.loginState.id > 0) {
      //有登录状态,直接跳转
      next()
    } else {
      next({
        path: '/auth/login', //无登录状态,先跳转到登录页面
        query: { redirected: to.fullPath } // 登录成功后跳转回到该路由
      })
    }
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
