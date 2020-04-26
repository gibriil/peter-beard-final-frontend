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
            v-for="swords in GetSwords(data.Weapons.filter(wpn => wpn.category == 'swords'))"
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
    ]
  }),
  methods: {
    GetSwords(arr) {
      return [
        {
          type: "Class I: Straight Swords",
          data: arr.filter(swrd => swrd.type.includes("Class I"))
        },
        {
          type: "Class II: Curved Swords",
          data: arr.filter(swrd => swrd.type.includes("Class II"))
        },
        {
          type: "Class III: Unusal Swords",
          data: arr.filter(swrd => swrd.type.includes("Class III"))
        },
        {
          type: "Class IV: Gentleman's Towne Swords",
          data: arr.filter(swrd => swrd.type.includes("Class IV"))
        },
        {
          type: "Class V: Bizarre Swords",
          data: arr.filter(swrd => swrd.type.includes("Class V"))
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