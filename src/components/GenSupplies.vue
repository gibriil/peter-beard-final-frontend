<template>
  <div id="RestfulGet">
    <h1>General Supplies</h1>
    <b-table
      responsive
      small
      striped
      fixed
      :items="GetAPI"
      :fields="fields"
      caption-top
      :tbody-tr-attr="trID"
      head-variant="dark"
      outlined
    >
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:row-details="row">
        <p v-if="row.item.info" class="font-weight-lighter font-italic w-25">({{row.item.info}})</p>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    fields: ["name", "cost", "weight"]
  }),
  methods: {
    trID(item, type) {
      if (!item || type !== "row") return;
      if (item) return { "data-weapon-id": item._id };
    },
    GetAPI() {
      return axios
        .get("https://pbeard-tunnels-and-trolls.herokuapp.com/generalsupply")
        .then(res => {
          return (
            res.data.map(itm => {
              return { ...itm, _showDetails: true };
            }) || []
          );
        })
        .catch(err => console.log(err));
    }
  }
};
</script>