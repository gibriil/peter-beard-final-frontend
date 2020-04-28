<template>
  <div id="armourVue">
    <div class="d-flex">
      <h1>Armour & Shields</h1>
      <!-- <p @click="$bvModal.show('addArmour')">
        <b-icon icon="plus-square" class="mr-2"></b-icon>Add Armour
      </p>-->
    </div>
    <!-- Apollo watched Graphql query -->
    <ApolloQuery :query="require('@/graphql/allArmour.gql')">
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
          <h2>Complete Sets:</h2>
          <b-table
            responsive
            small
            hover
            selectable
            :items="data.AllArmour.filter(armr => armr.category == 'complete')"
            :fields="fields"
            caption-top
            :tbody-tr-attr="trID"
            head-variant="dark"
            striped
          ></b-table>
          <h2>Parts:</h2>
          <template
            v-for="parts in GetArmourParts(data.AllArmour.filter(armr => armr.category == 'parts'))"
          >
            <b-table
              responsive
              small
              hover
              selectable
              :items="parts.data"
              :fields="fields"
              :key="parts.type"
              caption-top
              :tbody-tr-attr="trID"
              head-variant="dark"
              striped
            >
              <template v-slot:table-caption>
                <h3>{{parts.type}}</h3>
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
      { key: "hits", label: "Hits taken" },
      { key: "strengthReq", label: "ST needed" },
      "cost",
      "weight"
    ]
  }),
  methods: {
    GetArmourParts(arr) {
      return [
        {
          type: "Chest",
          data: arr.filter(swrd => swrd.type.includes("chest"))
        },
        {
          type: "Limbs",
          data: arr.filter(swrd => swrd.type.includes("limbs"))
        },
        {
          type: "Head",
          data: arr.filter(swrd => swrd.type.includes("head"))
        },
        {
          type: "Shields",
          data: arr.filter(swrd => swrd.type.includes("shields"))
        },
        {
          type: "Odd Pieces",
          data: arr.filter(swrd => swrd.type.includes("odd"))
        }
      ];
    },
    trID(item, type) {
      if (!item || type !== "row") return;
      if (item) return { "data-armour-id": item.id };
    }
  }
};
</script>