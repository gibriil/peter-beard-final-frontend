import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GMguide from "@/views/GMguide.vue";
import CharacterSheet from "@/views/CharacterSheet.vue";
import Weapons from "@/components/Weapons.vue";
import Armour from "@/components/Armour.vue";
import Spells from "@/components/Spells.vue";
import GenSupplies from "@/components/GenSupplies.vue";
import EditSpell from "@/components/EditSpell.vue";

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
    component: GMguide,
    children: [{
        path: 'weapons',
        component: Weapons
      },
      {
        path: 'armour',
        component: Armour
      },
      {
        path: 'spells',
        component: Spells
      },
      {
        path: 'supplies',
        component: GenSupplies
      }
    ]
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
    path: '/spell/:id',
    component: EditSpell,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router