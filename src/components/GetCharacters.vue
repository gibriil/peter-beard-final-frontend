<template>
  <div id="RestfulGetCharcaters">
    <b-card-group columns>
      <b-card v-for="character in characters" :key="character._id">
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
export default {
  data: () => ({
    characters: []
  }),
  created() {
    let $vm = this;
    fetch("https://pbeard-tunnels-and-trolls.herokuapp.com/characters")
      .then(response => {
        return response.json();
      })
      .then(data => {
        $vm.characters = data || [];
      })
      .catch(err => console.log(err));
  },
  methods: {
    trID(item, type) {
      if (!item || type !== "row") return;
      if (item) return { "data-weapon-id": item._id };
    }
  }
};
</script>

<style>
.card-columns {
  column-count: 1;
}
</style>