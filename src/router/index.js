import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GMguide from "@/views/GMguide.vue";
import CharacterSheet from "@/views/CharacterSheet.vue";
import Weapons from "@/components/Weapons.vue";
import Armour from "@/components/Armour.vue";
import Spells from "@/components/Spells.vue";
import GenSupplies from "@/components/GenSupplies.vue";
import FourOFour from "@/views/404.vue";

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
    path: "*",
    component: FourOFour
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router