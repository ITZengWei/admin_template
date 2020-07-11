import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* 首页 */
import Home from '../views/Home'

/* 关于 */
const About = () => import(/* webpackChunkName: "about" */ '../views/About')

/* 人员监控 */
const Listen = () => import(/* webpackChunkName: "about" */ '../views/Listen')

/* 所有 */
const All = () => import(/* webpackChunkName: "about" */ '../views/All')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/listen', name: 'Listen', component: Listen },
  { path: '*', name: 'all', component: All }
]

const router = new VueRouter({
  routes
})

export default router
