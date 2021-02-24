import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  //注册
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/Register.vue'),
    meta: { title: "注册" }
  },
  // 登录
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/auth/Login"),
    meta: { title: "登录" },
  },
]

const router = new VueRouter({
  routes
})

export default router
