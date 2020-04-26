<template>
  <div id="charcterSheets">
    <b-jumbotron fluid>
      <template v-slot:header>Character Sheets</template>
      <template v-slot:lead>View Pre-Made Charcter Sheets, or Create your own</template>
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

export default {
  data: () => ({
    restapi: {
      component: "GetCharacters"
    }
  }),
  components: { GetCharacters, CreateCharacter }
};
</script>