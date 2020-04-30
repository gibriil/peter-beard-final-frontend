<template>
  <div id="gmGuide">
    <b-jumbotron
      fluid
      class="fullbleed bg-image"
      :style="'background-image: url('+require('@/assets/bg-4.jpg')+');'"
    >
      <template v-slot:header>Game Master's Guide</template>
      <template
        v-slot:lead
      >GraphGL query output for Weapons, Armour, and Spells. Restful API output for General Supplies</template>
      <b-button-group size="lg" class="flex-wrap">
        <b-button
          :to="'/gm-guide/weapons'"
          :pressed="$route.fullPath == '/gm-guide/weapons' || $route.fullPath == '/gm-guide/weapons/'"
        >Weapons</b-button>
        <b-button
          :to="'/gm-guide/armour'"
          :pressed="$route.fullPath == '/gm-guide/armour' || $route.fullPath == '/gm-guide/armour/'"
        >Armour</b-button>
        <b-button
          :to="'/gm-guide/spells'"
          :pressed="$route.fullPath == '/gm-guide/spells' || $route.fullPath == '/gm-guide/spells/'"
        >Spells</b-button>
        <b-button
          :to="'/gm-guide/supplies'"
          :pressed="$route.fullPath == '/gm-guide/supplies' || $route.fullPath == '/gm-guide/supplies/'"
        >General Supplies</b-button>
      </b-button-group>
    </b-jumbotron>
    <section>
      <b-container fluid="xl">
        <b-row>
          <b-col>
            <b-img
              v-if="$route.path == '/gm-guide' || $route.path == '/gm-guide/'"
              :src="require('@/assets/tnt-vitalspots.png')"
              fluid-grow
              alt="Ha-Ha! Yah missed all my vital spots!!"
            ></b-img>
            <transition
              appear
              mode="out-in"
              appear-active-class="animated fadeInUpBig fast"
              enter-active-class="animated fadeInUpBig fast"
              leave-active-class="animated fadeOutDownBig faster delay-1s"
              type="animation"
            >
              <router-view />
            </transition>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    guide: {
      component: "Weapons"
    }
  })
};
</script>

<style lang="less" scoped>
.bg-image {
  background-size: cover;
  background-position: center 33%;
  background-repeat: no-repeat;
}
</style>