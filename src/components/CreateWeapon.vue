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
  >
    <template v-slot="{ mutate, loading, error }">
      <b-form @submit.stop.prevent="onSubmit && mutate()">
        <b-form-group id="name-input-group" label="Name" label-for="name">
          <b-form-input
            id="name"
            name="name"
            v-model="$v.form.name.$model"
            :state="validateState('name')"
            aria-describedby="name-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="name-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="category-input-group" label="Category" label-for="category">
          <b-form-input
            id="category"
            name="category"
            v-model="$v.form.category.$model"
            :state="validateState('category')"
            aria-describedby="category-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="category-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="type-input-group" label="Type" label-for="type">
          <b-form-input
            id="type"
            name="type"
            v-model="$v.form.type.$model"
            :state="validateState('type')"
            aria-describedby="type-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="type-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="dice-input-group" label="Dice" label-for="dice">
          <b-form-input
            id="dice"
            name="dice"
            v-model="$v.form.dice.$model"
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
            v-model="$v.form.adds.$model"
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
            v-model="$v.form.strengthReq.$model"
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
            v-model="$v.form.dexReq.$model"
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
            v-model="$v.form.cost.$model"
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
            v-model="$v.form.weight.$model"
            :state="validateState('weight')"
            aria-describedby="weight-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="weight-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="name-input-group" label="Name" label-for="name">
          <b-form-input
            id="name"
            name="name"
            v-model="$v.form.name.$model"
            :state="validateState('name')"
            aria-describedby="name-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="name-live-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>
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
    range: null,
    length: null,
    extraInfo: null
  }),
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      category: {
        required
      },
      type: {
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
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    }
  }
};
</script>