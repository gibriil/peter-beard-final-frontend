<template>
  <div id="gmGuide">
    <b-jumbotron fluid>
      <template v-slot:header>Game Master's Guide</template>
      <template
        v-slot:lead
      >API output for GraphGL queries for Weapons, Armour, and Spells. Restful API output for General Supplies</template>
      <b-button-group size="lg" class="flex-wrap">
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
        <b-button
          @click="guide.component = 'GenSupplies'"
          :pressed.sync="guide.component == 'GenSupplies'"
        >General Supplies</b-button>
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
import GenSupplies from "@/components/GenSupplies.vue";

export default {
  data: () => ({
    guide: {
      component: "Weapons"
    }
  }),
  components: { Weapons, Armour, Spells, GenSupplies }
};
</script>