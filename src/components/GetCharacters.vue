<template>
  <div id="RestfulGetCharcaters">
    <!-- Delete Character Popup -->
    <b-modal id="deleteCharacter" hide-footer title="Delete Character" centered>
      <p>
        Are you sure you really want to delete this
        <strong>Character</strong>?
      </p>
      <b-button variant="danger" @click="DeleteCharacter">
        <b-icon icon="trash" class="mr-2"></b-icon>Delete Character
      </b-button>
    </b-modal>
    <b-card-group columns>
      <b-card v-for="character in characters" :key="character._id">
        <b-card-title title-tag="div" class="text-right" @click="selectedCharacter = character._id">
          <b-button variant="outline-primary" class="mr-3">
            <b-icon icon="pencil" class="mr-2"></b-icon>Edit Character
          </b-button>
          <b-button v-b-modal.deleteCharacter variant="danger">
            <b-icon icon="trash" class="mr-2"></b-icon>Delete Character
          </b-button>
        </b-card-title>
        <b-card-body>
          <b-container fluid>
            <b-row>
              <b-col cols="8">
                <b-row>
                  <b-col>
                    <p>
                      <strong>Name:</strong>
                      {{character.name}}
                    </p>
                  </b-col>
                  <b-col cols="3">
                    <p>
                      <strong>Kindred:</strong>
                      {{character.kin}}{{character.sex == "male" ? "♂" : character.sex == "female" ? "♀" : ""}}
                      <template
                        v-if="character.age"
                      >- {{character.age}}</template>
                    </p>
                  </b-col>
                  <b-col cols="3">
                    <p>
                      <strong>Class:</strong>
                      {{character.type}}
                    </p>
                  </b-col>
                  <b-col cols="2">
                    <p>
                      <strong>Level:</strong>
                      {{character.lvl}}
                    </p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <p>
                  <strong>Height:</strong>
                  {{character.height}}
                </p>
                <p>
                  <strong>Weight:</strong>
                  {{character.weight}}
                </p>
              </b-col>
            </b-row>
          </b-container>
          <b-container>
            <b-row>
              <b-col>
                <b-row>
                  <b-col cols="6" v-for="(att, key) in character.primeAtts" :key="key+att">
                    <p>
                      <strong>{{key}}:</strong>
                      &nbsp;{{att}}
                    </p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <p>
                  <strong>Adds:</strong>
                  {{character.personalAdds}}
                </p>
              </b-col>
              <b-col>
                <p>
                  <strong>Weight Possiple:</strong>
                  {{character.weightPossible}}
                </p>
                <p>
                  <strong>Weight Carried:</strong>
                  {{character.weightCarried}}
                </p>
              </b-col>
            </b-row>
          </b-container>
          <b-row>
            <b-col>
              <p>
                <strong>Gold Pieces:</strong>
                {{character.gp}}
              </p>
            </b-col>
            <b-col>
              <p>
                <strong>Adventure Points:</strong>
                {{character.ap}}
              </p>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    characters: [],
    selectedCharacter: ""
  }),
  created() {
    this.GetCharacters();
  },
  methods: {
    trID(item, type) {
      if (!item || type !== "row") return;
      if (item) return { "data-weapon-id": item._id };
    },
    GetCharacters() {
      let $vm = this;
      axios
        .get("https://pbeard-tunnels-and-trolls.herokuapp.com/characters")
        .then(res => {
          $vm.characters = res.data.reverse() || [];
        })
        .catch(err => console.log(err));
    },
    DeleteCharacter() {
      let $vm = this;
      axios
        .delete("https://pbeard-tunnels-and-trolls.herokuapp.com/characters", {
          data: {
            _id: $vm.selectedCharacter
          }
        })
        .then(function() {
          $vm.$bvModal.hide("deleteCharacter");
          $vm.GetCharacters();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
.card-columns {
  column-count: 1;
}
</style>