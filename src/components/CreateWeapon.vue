<template>
  <ApolloMutation
    :mutation="require('@/graphql/createOneWeapon.gql')"
    :variables="{
        name,
        category,
        type,
        dice,
        adds,
        strengthReq,
        dexReq,
        cost,
        weight,
        range,
        length,
        extraInfo
    }"
    @done="$bvModal.hide('addWeapon')"
  >
    <template v-slot="{ mutate, loading, error }">
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

        <b-form-group id="category-input-group" label="Category" label-for="category">
          <b-form-select
            id="category"
            name="category"
            :options="weaponCategory"
            v-model="$v.category.$model"
            :state="validateState('category')"
            aria-describedby="category-live-feedback"
          ></b-form-select>

          <b-form-invalid-feedback
            id="category-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="type-input-group" label="Type" label-for="type">
          <b-form-input id="type" name="type" v-model="type" aria-describedby="type-live-feedback"></b-form-input>

          <b-form-invalid-feedback
            id="type-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="dice-input-group" label="Dice" label-for="dice">
          <b-form-input
            id="dice"
            name="dice"
            type="number"
            v-model.number="$v.dice.$model"
            :state="validateState('dice')"
            aria-describedby="dice-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="dice-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="adds-input-group" label="Adds" label-for="adds">
          <b-form-input
            id="adds"
            name="adds"
            v-model="$v.adds.$model"
            :state="validateState('adds')"
            aria-describedby="adds-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="adds-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="strengthReq-input-group"
          label="Strength Requirement"
          label-for="strengthReq"
        >
          <b-form-input
            id="strengthReq"
            name="strengthReq"
            type="number"
            v-model.number="$v.strengthReq.$model"
            :state="validateState('strengthReq')"
            aria-describedby="strengthReq-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="strengthReq-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="dexReq-input-group" label="Dexterity Requirement" label-for="dexReq">
          <b-form-input
            id="dexReq"
            name="dexReq"
            type="number"
            v-model.number="$v.dexReq.$model"
            :state="validateState('dexReq')"
            aria-describedby="dexReq-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="dexReq-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="cost-input-group" label="Cost" label-for="cost">
          <b-form-input
            id="cost"
            name="cost"
            type="number"
            v-model.number="$v.cost.$model"
            :state="validateState('cost')"
            aria-describedby="cost-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="cost-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="weight-input-group" label="Weight" label-for="weight">
          <b-form-input
            id="weight"
            name="weight"
            type="number"
            v-model.number="$v.weight.$model"
            :state="validateState('weight')"
            aria-describedby="weight-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="weight-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="range-input-group" label="Range" label-for="range">
          <b-form-input
            id="range"
            name="range"
            v-model="range"
            aria-describedby="range-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="range-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="length-input-group" label="Length" label-for="length">
          <b-form-input
            id="length"
            name="length"
            v-model="length"
            aria-describedby="length-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="length-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="extraInfo-input-group" label="Extra Info" label-for="extraInfo">
          <b-form-input
            id="extraInfo"
            name="extraInfo"
            v-model="extraInfo"
            aria-describedby="extraInfo-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="extraInfo-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
      <p v-if="error">An error occurred: {{ error }}</p>
    </template>
  </ApolloMutation>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, numeric } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data: () => ({
    name: null,
    category: null,
    type: null,
    dice: null,
    adds: null,
    strengthReq: null,
    dexReq: null,
    cost: null,
    weight: null,
    range: "",
    length: "",
    extraInfo: "",
    weaponCategory: [
      { value: null, text: "Choose..." },
      { value: "Swords", text: "Swords" },
      { value: "Hafted Weapons", text: "Hafted Weapons" },
      { value: "Pole Weapons", text: "Pole Weapons" },
      { value: "Spears", text: "Spears" },
      { value: "Daggers", text: "Daggers" },
      { value: "Projectile Weapons", text: "Projectile Weapons" },
      { value: "Weird Weapons", text: "Weird Weapons" }
    ]
  }),
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    category: {
      required
    },
    dice: {
      required,
      numeric
    },
    adds: {
      numeric
    },
    strengthReq: {
      required,
      numeric
    },
    dexReq: {
      required,
      numeric
    },
    cost: {
      required,
      numeric
    },
    weight: {
      required,
      numeric
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v[name];
      return $dirty ? !$error : null;
    }
  }
};
</script>