import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GMguide from "@/views/GMguide.vue";
import CharacterSheet from "@/views/CharacterSheet.vue";
import CreateWeapon from "@/components/CreateWeapon.vue";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/character',
    component: CharacterSheet
  },
  {
    path: '/gm-guide',
    component: GMguide
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/addweapon',
    component: CreateWeapon,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router