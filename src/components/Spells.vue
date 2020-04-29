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
        <!-- Edit Spell Popup -->
        <b-modal
          id="spellOptions"
          hide-footer
          title="Spell Options"
          centered
          @hidden="refreshQuery(query)"
        >
          <b-button v-b-modal.editSpell variant="outline-primary" class="mr-3">
            <b-icon icon="pencil" class="mr-2"></b-icon>Edit Spell
          </b-button>
          <b-button v-b-modal.deleteSpell variant="danger">
            <b-icon icon="trash" class="mr-2"></b-icon>Delete Spell
          </b-button>
        </b-modal>
        <b-modal
          id="editSpell"
          hide-footer
          title="Edit Spell"
          centered
          @hidden="$bvModal.hide('spellOptions')"
        >
          <EditSpell :spellID="selectedSpell"></EditSpell>
        </b-modal>
        <!-- Delete Spell Popup -->
        <b-modal
          id="deleteSpell"
          hide-footer
          title="Delete Spell"
          centered
          @hidden="$bvModal.hide('spellOptions')"
        >
          <p>
            Are you sure you really want to delete this
            <strong>Spell</strong>?
          </p>
          <b-button variant="danger">
            <b-icon icon="trash" class="mr-2"></b-icon>Delete Spell
          </b-button>
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
              :key="spells.id"
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
import EditSpell from "@/components/EditSpell.vue";

export default {
  components: { CreateSpell, EditSpell },
  data: () => ({
    fields: [
      "name",
      "description",
      { key: "cost", label: "Cost/Strength" },
      "range"
    ],
    selectedSpell: ""
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
        this.selectedSpell = items[0].id;
        this.$bvModal.show("spellOptions");
      }
    }
  }
};
</script>