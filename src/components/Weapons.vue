<template>
  <div id="weaponsVue">
    <div class="d-flex">
      <h1>Weapons Charts</h1>
      <p @click="$bvModal.show('addWeapon')">
        <b-icon icon="plus-square" class="mr-2"></b-icon>Add Weapon
      </p>
    </div>

    <!-- Apollo watched Graphql query -->
    <ApolloQuery :query="require('@/graphql/allWeapons.gql')">
      <template slot-scope="{ result: { loading, error, data }, query, isLoading }">
        <!-- Add Weapon Popup -->
        <b-modal
          id="addWeapon"
          hide-footer
          title="Add Weapon"
          scrollable
          @hidden="refreshQuery(query)"
        >
          <CreateWeapon></CreateWeapon>
        </b-modal>
        <!-- Edit Weapon Popup -->
        <b-modal
          id="weaponOptions"
          hide-footer
          title="Weapon Options"
          centered
          @hidden="refreshQuery(query)"
        >
          <b-button v-b-modal.editWeapon variant="outline-primary" class="mr-3">
            <b-icon icon="pencil" class="mr-2"></b-icon>Edit Weapon
          </b-button>
          <b-button v-b-modal.deleteWeapon variant="danger">
            <b-icon icon="trash" class="mr-2"></b-icon>Delete Weapon
          </b-button>
        </b-modal>
        <b-modal
          id="editWeapon"
          hide-footer
          title="Edit Weapon"
          centered
          @hidden="$bvModal.hide('weaponOptions')"
        >
          <EditWeapon :weaponID="selectedWeapon"></EditWeapon>
        </b-modal>
        <!-- Delete Weapon Popup -->
        <b-modal
          id="deleteWeapon"
          hide-footer
          title="Delete Weapon"
          centered
          @hidden="$bvModal.hide('weaponOptions')"
        >
          <p>
            Are you sure you really want to delete this
            <strong>Weapon</strong>?
          </p>
          <b-button variant="danger" @click="DeleteWeapon">
            <b-icon icon="trash" class="mr-2"></b-icon>Delete Weapon
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
          <template v-for="wpn in weapontypes">
            <h2 :key="wpn">{{ wpn }}</h2>
            <template v-for="weapon in GetWeapons(data.Weapons.filter(itm => itm.category == wpn))">
              <b-table
                responsive
                small
                hover
                selectable
                select-mode="single"
                @row-selected="OnSelect"
                :items="weapon.data"
                :fields="weapontables[wpn]"
                :key="weapon.type || weapon.category"
                caption-top
                :tbody-tr-attr="trID"
                head-variant="dark"
                striped
              >
                <template v-if="weapon.type" v-slot:table-caption>
                  <h3>{{weapon.type}}</h3>
                </template>
                <template v-slot:cell(diceAdds)="data">
                  {{ data.item.dice }}
                  <template v-if="data.item.adds">+ {{ data.item.adds }}</template>
                </template>
              </b-table>
            </template>
          </template>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import CreateWeapon from "@/components/CreateWeapon.vue";
import EditWeapon from "@/components/EditWeapon.vue";

export default {
  components: { CreateWeapon, EditWeapon },
  data: () => ({
    selectedWeapon: "",
    weapontables: {
      Swords: [
        "name",
        { key: "diceAdds", label: "Dice + Adds" },
        { key: "strengthReq", label: "ST req." },
        { key: "dexReq", label: "DEX req." },
        "cost",
        "weight"
      ],
      "Hafted Weapons": [
        "name",
        { key: "diceAdds", label: "Dice + Adds" },
        { key: "strengthReq", label: "ST req." },
        { key: "dexReq", label: "DEX req." },
        "cost",
        "weight"
      ],
      "Pole Weapons": [
        "name",
        { key: "length", label: "Approx. Length" },
        { key: "diceAdds", label: "Dice + Adds" },
        { key: "strengthReq", label: "ST req." },
        { key: "dexReq", label: "DEX req." },
        "cost",
        "weight"
      ],
      Spears: [
        "name",
        { key: "length", label: "Approx. Length" },
        { key: "diceAdds", label: "Dice + Adds" },
        { key: "strengthReq", label: "ST req." },
        { key: "dexReq", label: "DEX req." },
        "cost",
        "weight",
        "range"
      ],
      Daggers: [
        "name",
        { key: "diceAdds", label: "Dice + Adds" },
        { key: "strengthReq", label: "ST req." },
        { key: "dexReq", label: "DEX req." },
        "cost",
        "weight",
        "range"
      ],
      "Projectile Weapons": [
        "name",
        { key: "diceAdds", label: "Dice + Adds" },
        { key: "strengthReq", label: "ST req." },
        { key: "dexReq", label: "DEX req." },
        "cost",
        "weight",
        "range"
      ],
      "Weird Weapons": [
        "name",
        { key: "diceAdds", label: "Dice + Adds" },
        { key: "strengthReq", label: "ST req." },
        { key: "dexReq", label: "DEX req." },
        "cost",
        "weight"
      ]
    },
    weapontypes: [
      "Swords",
      "Hafted Weapons",
      "Pole Weapons",
      "Spears",
      "Daggers",
      "Projectile Weapons",
      "Weird Weapons"
    ]
  }),
  methods: {
    GetWeapons(arr) {
      if (!arr.length > 0) return;
      if (!arr[0].type)
        return [
          {
            data: arr
          }
        ];
      else
        return [
          {
            type: `${arr.filter(wpn => wpn.type.includes("Class I:"))[0].type}`,
            data: arr.filter(wpn => wpn.type.includes("Class I:"))
          }
        ];
    },
    trID(item, type) {
      if (!item || type !== "row") return;
      if (item) return { "data-weapon-id": item.id };
    },
    refreshQuery(query) {
      query.refetch();
    },
    OnSelect(items) {
      if (items.length > 0) {
        this.selectedWeapon = items[0].id;
        this.$bvModal.show("weaponOptions");
      }
    },
    DeleteWeapon() {
      this.$apollo
        .mutate({
          mutation: require("@/graphql/deleteOneWeapon.gql"),
          variables: {
            id: this.selectedWeapon
          }
        })
        .then(res => {
          this.$bvModal.hide("deleteWeapon");
          console.log(
            `Spell Deleted: ${res.data.deleteOneWeapon.name} -- ${res.data.deleteOneWeapon.id}`
          );
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>