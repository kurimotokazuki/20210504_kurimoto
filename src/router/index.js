import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import todo from '../views/todo.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'todo',
  component: todo
}, {
  path: '/home',
  name: 'Home',
  component: Home
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router