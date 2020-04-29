<template>
  <ApolloMutation
    :mutation="require('@/graphql/updateOneSpell.gql')"
    :variables="{
        id,
        symbol,
        name,
        level,
        description,
        cost,
        range
    }"
    @done="$router.push('/gm-guide')"
  >
    <template v-slot="{ mutate, loading, error }">
      <h2>Edit Spell</h2>
      <b-form @submit.stop.prevent="mutate()">
        <b-form-group id="name-input-group" label="Name" label-for="name">
          <b-form-input
            id="name"
            name="name"
            v-model="$v.name.$model"
            :state="validateState('name')"
            aria-describedby="name-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="name-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="level-input-group" label="level" label-for="level">
          <b-form-select
            id="level"
            name="level"
            :options="lvls"
            v-model.number="$v.level.$model"
            :state="validateState('level')"
            aria-describedby="level-live-feedback"
          ></b-form-select>
          <b-form-invalid-feedback id="level-live-feedback"></b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="description-input-group" label="description" label-for="description">
          <b-form-input
            id="description"
            name="description"
            v-model="$v.description.$model"
            :state="validateState('description')"
            aria-describedby="description-live-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="description-live-feedback"></b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="cost-input-group" label="cost" label-for="cost">
          <b-form-input
            id="cost"
            name="cost"
            v-model="$v.cost.$model"
            :state="validateState('cost')"
            aria-describedby="cost-live-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="cost-live-feedback"></b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="range-input-group" label="range" label-for="range">
          <b-form-input
            id="range"
            name="range"
            v-model="range"
            aria-describedby="range-live-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="range-live-feedback"></b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="symbol-input-group" label="symbol" label-for="symbol">
          <b-form-select
            id="symbol"
            name="symbol"
            :options="symbols"
            v-model="symbol"
            aria-describedby="symbol-live-feedback"
          ></b-form-select>
          <b-form-invalid-feedback id="symbol-live-feedback"></b-form-invalid-feedback>
        </b-form-group>

        <b-button type="submit" variant="primary">Save Changes</b-button>
      </b-form>
      <p v-if="error">An error occurred: {{ error }}</p>
    </template>
  </ApolloMutation>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, numeric } from "vuelidate/lib/validators";

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mixins: [validationMixin],
  data: () => ({
    name: "",
    level: null,
    description: "",
    cost: "",
    range: "",
    symbol: "",
    lvls: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
      { value: 5, text: "5" },
      { value: 6, text: "6" },
      { value: 7, text: "7" },
      { value: 8, text: "8" },
      { value: 9, text: "9" },
      { value: 10, text: "10" },
      { value: 11, text: "11" },
      { value: 12, text: "12" },
      { value: 13, text: "13" },
      { value: 14, text: "14" },
      { value: 15, text: "15" },
      { value: 16, text: "16" },
      { value: 20, text: "20" },
      { value: 17, text: "17" },
      { value: 18, text: "18" },
      { value: 19, text: "19" }
    ],
    symbols: [
      { value: null, text: "Choose..." },
      { value: "circle", text: "Circle" },
      { value: "triangle", text: "Triangle" }
    ]
  }),
  validations: {
    name: {
      required
    },
    level: {
      required,
      numeric
    },
    description: {
      required
    },
    cost: {
      required
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v[name];
      return $dirty ? !$error : null;
    }
  },
  created() {
    this.$apollo.queries.GetSpell.refetch().then(res => {
      this.name = res.data.spell.name;
      this.level = res.data.spell.level;
      this.description = res.data.spell.description;
      this.cost = res.data.spell.cost;
      this.range = res.data.spell.range;
      this.symbol = res.data.spell.symbol;
    });
  },
  apollo: {
    GetSpell: {
      query: require("@/graphql/getSpell.gql"),
      variables() {
        return {
          id: this.id
        };
      }
    }
  }
};
</script>