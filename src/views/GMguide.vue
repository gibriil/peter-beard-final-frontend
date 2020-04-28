<template>
  <div id="gmGuide">
    <b-jumbotron fluid>
      <template v-slot:header>Game Master's Guide</template>
      <template
        v-slot:lead
      >API output for GraphGL queries for Weapons, Armour, and Spells. Restful API output for General Supplies</template>
      <b-button-group size="lg" class="flex-wrap">
        <b-button
          :to="'/gm-guide/weapons'"
          :pressed="$route.fullPath == '/gm-guide/weapons'"
        >Weapons</b-button>
        <b-button :to="'/gm-guide/armour'" :pressed="$route.fullPath == '/gm-guide/armour'">Armour</b-button>
        <b-button :to="'/gm-guide/spells'" :pressed="$route.fullPath == '/gm-guide/spells'">Spells</b-button>
        <b-button
          :to="'/gm-guide/supplies'"
          :pressed="$route.fullPath == '/gm-guide/supplies'"
        >General Supplies</b-button>
      </b-button-group>
    </b-jumbotron>
    <section>
      <b-container fluid="xl">
        <b-row>
          <b-col>
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