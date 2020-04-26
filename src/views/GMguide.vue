<template>
  <div class="gmGuide">
    <b-jumbotron fluid>
      <template v-slot:header>Game Master's Guide</template>
      <b-button-group size="lg">
        <b-button
          @click="guide.component = 'Weapons'"
          :pressed.sync="guide.component == 'Weapons'"
        >Weapons</b-button>
        <b-button
          @click="guide.component = 'Armour'"
          :pressed.sync="guide.component == 'Armour'"
        >Armour</b-button>
        <b-button
          @click="guide.component = 'Spells'"
          :pressed.sync="guide.component == 'Spells'"
        >Spells</b-button>
      </b-button-group>
    </b-jumbotron>
    <section>
      <b-container fluid="xl">
        <b-row>
          <b-col>
            <component :is="guide.component"></component>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Weapons from "@/components/Weapons.vue";
import Armour from "@/components/Armour.vue";
import Spells from "@/components/Spells.vue";

export default {
  data: () => ({
    guide: {
      component: "Armour"
    }
  }),
  components: { Weapons, Armour, Spells }
};
</script>