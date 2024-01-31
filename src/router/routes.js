import AppLayout from '@/layouts/App.vue'

import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import Detail from '@/views/Detail.vue'
import Cart from '@/views/Cart.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'

import auth from '@/middleware/auth'
import guest from '@/middleware/guest'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: AppLayout,
      middleware: [auth]
    },
    component: () => import('@/views/Home.vue')
    // component: Home
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      layout: AppLayout
    },
    component: Category
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      layout: AppLayout
    },
    component: Detail
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      layout: AppLayout
    },
    component: Cart
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: AppLayout
    },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: AppLayout
    },
    component: Register
  }
]

export default routes
