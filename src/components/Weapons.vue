<template>
  <div id="weaponsVue">
    <h1>Weapons Charts</h1>
    <!-- Apollo watched Graphql query -->
    <ApolloQuery :query="require('@/graphql/allWeapons.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <h2>Swords</h2>
          <template
            v-for="swords in GetWeapons(data.Weapons.filter(wpn => wpn.category == 'swords'))"
          >
            <b-table
              responsive
              small
              hover
              selectable
              :items="swords.data"
              :fields="swordfields"
              :key="swords.type"
              caption-top
              :tbody-tr-attr="trID"
              head-variant="dark"
              striped
            >
              <template v-slot:table-caption>
                <h3>{{swords.type}}</h3>
              </template>
              <template v-slot:cell(diceAdds)="data">
                {{ data.item.dice }}
                <template v-if="data.item.adds">+ {{ data.item.adds }}</template>
              </template>
            </b-table>
          </template>
          <h2>Projectile Weapons</h2>
          <template
            v-for="weapon in GetWeapons(data.Weapons.filter(wpn => wpn.category == 'Projectile Weapons'))"
          >
            <b-table
              responsive
              small
              hover
              selectable
              :items="weapon.data"
              :fields="projectileFields"
              :key="weapon.type"
              caption-top
              :tbody-tr-attr="trID"
              head-variant="dark"
              striped
            >
              <template v-slot:table-caption>
                <h3>{{weapon.type}}</h3>
              </template>
              <template v-slot:cell(diceAdds)="data">
                {{ data.item.dice }}
                <template v-if="data.item.adds">+ {{ data.item.adds }}</template>
              </template>
            </b-table>
          </template>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  data: () => ({
    swordfields: [
      "name",
      { key: "diceAdds", label: "Dice + Adds" },
      { key: "strengthReq", label: "ST req." },
      { key: "dexReq", label: "DEX req." },
      "cost",
      "weight"
    ],
    projectileFields: [
      "name",
      { key: "diceAdds", label: "Dice + Adds" },
      { key: "strengthReq", label: "ST req." },
      { key: "dexReq", label: "DEX req." },
      "cost",
      "weight",
      "range"
    ]
  }),
  methods: {
    GetWeapons(arr) {
      return [
        {
          type: `${arr.filter(wpn => wpn.type.includes("Class I"))[0].type}`,
          data: arr.filter(wpn => wpn.type.includes("Class I"))
        }
      ];
    },
    trID(item, type) {
      if (!item || type !== "row") return;
      if (item) return { "data-weapon-id": item.id };
    }
  }
};
</script>