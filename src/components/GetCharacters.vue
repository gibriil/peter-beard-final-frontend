<template>
  <div id="RestfulGetCharcaters">
    <b-card-group columns>
      <b-card v-for="character in characters" :key="character._id">
        <b-card-body>
          <p>
            <strong>Name:</strong>
            {{character.name}}
          </p>
          <p>
            <strong>Kindred:</strong>
            {{character.kin}}{{character.sex == "male" ? "♂" : character.sex == "female" ? "♀" : ""}}
            <template
              v-if="character.age"
            >- {{character.age}}</template>
          </p>
          <p>
            <strong>Class:</strong>
            {{character.type}}
          </p>
          <p>
            <strong>Level:</strong>
            {{character.lvl}}
          </p>
          <p>
            <strong>Height:</strong>
            {{character.height}}
          </p>
          <p>
            <strong>Weight:</strong>
            {{character.weight}}
          </p>
          <p v-for="(att, key) in character.primeAtts" :key="key+att">
            <strong>{{key}}:</strong>
            &nbsp;{{att}}
          </p>
          <p>
            <strong>Adds:</strong>
            {{character.personalAdds}}
          </p>
          <p>
            <strong>Weight Possiple:</strong>
            {{character.weightPossible}}
          </p>
          <p>
            <strong>Weight Carried:</strong>
            {{character.weightCarried}}
          </p>
          <p>
            <strong>Gold Pieces:</strong>
            {{character.gp}}
          </p>
          <p>
            <strong>Adventure Points:</strong>
            {{character.ap}}
          </p>
          <p v-for="weapon in weapons" :key="weapon.id">{{weapon}}</p>
          <p v-for="armor in armour" :key="armor.id">{{armor}}</p>
          <p v-for="language in languages" :key="language+id">{{language}}</p>
          <p v-for="spell in magic" :key="spell.id">{{spell}}</p>
          <p>{{other}}</p>
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