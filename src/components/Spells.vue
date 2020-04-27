<template>
  <div id="spellsVue">
    <h1>Spells</h1>
    <!-- Apollo watched Graphql query -->
    <ApolloQuery :query="require('@/graphql/allSpells.gql')">
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
          <template v-for="spells in GetSpells(data.Spells)">
            <b-table
              responsive
              small
              hover
              selectable
              fixed
              :items="spells.data"
              :fields="fields"
              :key="spells.type"
              caption-top
              :tbody-tr-attr="trID"
              head-variant="dark"
            >
              <template v-slot:table-caption>
                <h3>{{spells.type}}</h3>
              </template>
              <template v-slot:cell(name)="data">
                <template v-if="data.item.symbol">
                  <b-icon :icon="`${data.item.symbol}-fill`"></b-icon>
                </template>
                {{data.value}}
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
    fields: [
      "name",
      "description",
      { key: "cost", label: "Cost/Strength" },
      "range"
    ]
  }),
  methods: {
    GetSpells(arr) {
      let spells = [];

      for (let i = 1; i < 21; i++) {
        spells.push({
          type: `Level ${i} Spells`,
          data: arr.filter(spell => spell.level == i)
        });
      }

      return spells;
    },
    trID(item, type) {
      if (!item || type !== "row") return;
      if (item) return { "data-spell-id": item.id };
    }
  }
};
</script>