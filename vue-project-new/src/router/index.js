import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
Vue.use(VueRouter)

// 1定义组件
// 可以import 引入
// import Hello from '@/components/Hello'
// import home from '@/components/home'
// import login from '@/components/login'
// 进行懒加载之后更改
const home = resolve => require(['../components/home'], resolve)
const login = resolve => require(['../components/login'], resolve)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

// 2定义路由
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

// 3创建router实例
const router = new VueRouter({
  mode: 'history',
// history:依赖HTML5 History API 和服务器配置。
  base: __dirname,
// linkActiveClass:'link-active',
  scrollBehavior,
  routes
})

// 4创建、挂载根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })
