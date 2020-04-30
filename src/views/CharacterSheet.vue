<template>
  <div id="charcterSheets">
    <b-jumbotron
      fluid
      class="fullbleed bg-image"
      :style="'background-image: url('+require('@/assets/bg-3.jpg')+');'"
    >
      <template v-slot:header>Character Sheets</template>
      <template
        v-slot:lead
      >View Pre-Made Charcter Sheets retrieved from a RESTful API endpoint, or Create your own Character Sheet</template>
      <b-button-group size="lg" class="flex-wrap">
        <b-button
          @click="restapi.component = 'GetCharacters'"
          :pressed.sync="restapi.component == 'GetCharacters'"
        >View Charcter Sheets</b-button>
        <b-button
          @click="restapi.component = 'CreateCharacter'"
          :pressed.sync="restapi.component == 'CreateCharacter'"
        >Create New Charcter Sheet</b-button>
      </b-button-group>
    </b-jumbotron>
    <section>
      <b-container fluid="xl">
        <b-row>
          <b-col>
            <component :is="restapi.component"></component>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GetCharacters from "@/components/GetCharacters.vue";
import CreateCharacter from "@/components/CreateCharacter.vue";
import { eBus } from "../main.js";

export default {
  data: () => ({
    restapi: {
      component: "GetCharacters"
    }
  }),
  components: { GetCharacters, CreateCharacter },
  created() {
    eBus.$on("CharacterComponent", ({ component }) => {
      this.restapi.component = component;
    });
  }
};
</script>

<style lang="less" scoped>
.bg-image {
  background-size: cover;
  background-position: center 33%;
  background-repeat: no-repeat;
}
</style>