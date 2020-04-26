<template>
  <div id="RestfulGet">
    <h1>General Supplies</h1>
    <b-table
      responsive
      small
      hover
      selectable
      fixed
      :items="GetAPI"
      :fields="fields"
      caption-top
      :tbody-tr-attr="trID"
      head-variant="dark"
    >
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:row-details="row">{{row.item.info}}</template>
    </b-table>
  </div>
</template>

<script>
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
      return fetch(
        "https://pbeard-tunnels-and-trolls.herokuapp.com/generalsupply"
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          return (
            data.map(itm => {
              return { ...itm, _showDetails: true };
            }) || []
          );
        })
        .catch(err => console.log(err));
    }
  }
};
</script>