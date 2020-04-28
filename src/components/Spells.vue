<template>
  <div id="spellsVue">
    <div class="d-flex">
      <h1>Spells</h1>
      <p @click="$bvModal.show('addSpell')">
        <b-icon icon="plus-square" class="mr-2"></b-icon>Add Spell
      </p>
    </div>
    <!-- Apollo watched Graphql query -->
    <ApolloQuery :query="require('@/graphql/allSpells.gql')">
      <template slot-scope="{ result: { loading, error, data }, query, isLoading }">
        <!-- Add Spell Popup -->
        <b-modal
          id="addSpell"
          hide-footer
          title="Add Spell"
          scrollable
          @hidden="refreshQuery(query)"
        >
          <CreateSpell></CreateSpell>
        </b-modal>
        <!-- Loading -->
        <div v-if="isLoading" class="loading apollo">
          <div class="text-danger my-2">
            <b-spinner class="align-middle mr-2"></b-spinner>
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
              select-mode="single"
              @row-selected="OnSelect"
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
import CreateSpell from "@/components/CreateSpell.vue";

export default {
  components: { CreateSpell },
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
    },
    refreshQuery(query) {
      query.refetch();
    },
    OnSelect(items) {
      if (items.length > 0) {
        this.$router.push(`/spell/${items[0].id}`);
      }
    }
  }
};
</script>