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
      return [
        {
          type: "Level 1 Spells",
          data: arr.filter(spell => spell.level == 1)
        },
        {
          type: "Level 2 Spells",
          data: arr.filter(spell => spell.level == 2)
        },
        {
          type: "Level 3 Spells",
          data: arr.filter(spell => spell.level == 3)
        },
        {
          type: "Level 4 Spells",
          data: arr.filter(spell => spell.level == 4)
        },
        {
          type: "Level 5 Spells",
          data: arr.filter(spell => spell.level == 5)
        },
        {
          type: "Level 6 Spells",
          data: arr.filter(spell => spell.level == 6)
        },
        {
          type: "Level 7 Spells",
          data: arr.filter(spell => spell.level == 7)
        },
        {
          type: "Level 8 Spells",
          data: arr.filter(spell => spell.level == 8)
        },
        {
          type: "Level 9 Spells",
          data: arr.filter(spell => spell.level == 9)
        },
        {
          type: "Level 10 Spells",
          data: arr.filter(spell => spell.level == 10)
        },
        {
          type: "Level 11 Spells",
          data: arr.filter(spell => spell.level == 11)
        },
        {
          type: "Level 12 Spells",
          data: arr.filter(spell => spell.level == 12)
        },
        {
          type: "Level 13 Spells",
          data: arr.filter(spell => spell.level == 13)
        },
        {
          type: "Level 14 Spells",
          data: arr.filter(spell => spell.level == 14)
        },
        {
          type: "Level 15 Spells",
          data: arr.filter(spell => spell.level == 15)
        },
        {
          type: "Level 16 Spells",
          data: arr.filter(spell => spell.level == 16)
        },
        {
          type: "Level 17 Spells",
          data: arr.filter(spell => spell.level == 17)
        },
        {
          type: "Level 18 Spells",
          data: arr.filter(spell => spell.level == 18)
        },
        {
          type: "Level 19 Spells",
          data: arr.filter(spell => spell.level == 19)
        },
        {
          type: "Level 20 Spells",
          data: arr.filter(spell => spell.level == 20)
        }
      ];
    },
    trID(item, type) {
      if (!item || type !== "row") return;
      if (item) return { "data-spell-id": item.id };
    }
  }
};
</script>