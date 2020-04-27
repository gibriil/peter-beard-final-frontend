<template>
  <div id="CharacterCreation">
    <b-form @submit.stop.prevent="onSubmit">
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

      <b-form-group id="kindred-group" label="Kindred" label-for="kin">
        <b-form-select
          id="kin"
          name="kin"
          v-model="$v.form.kin.$model"
          :options="kindred"
          :state="validateState('kin')"
          aria-describedby="kindred-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="kindred-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="sex-group" label="Gender" label-for="sex">
        <b-form-select
          id="sex"
          name="sex"
          v-model="$v.form.sex.$model"
          :options="gender"
          :state="validateState('sex')"
          aria-describedby="sex-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="sex-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="type-group" label="Class" label-for="type">
        <b-form-select
          id="type"
          name="type"
          v-model="$v.form.type.$model"
          :options="typeclass"
          :state="validateState('type')"
          aria-describedby="type-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="type-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data: () => ({
    gender: [
      { value: null, text: "Choose..." },
      { value: "male", text: "Male" },
      { value: "female", text: "Female" }
    ],
    kindred: [
      { value: null, text: "Choose..." },
      { value: "human", text: "Human" },
      { value: "dwarf", text: "Dwarf" },
      { value: "elf", text: "Elf" },
      { value: "fairy", text: "Fairy" },
      { value: "hobbit", text: "Hobbit" },
      { value: "leprechaun", text: "Leprechaun" }
    ],
    typeclass: [
      { value: null, text: "Choose..." },
      { value: "warrior", text: "Warrior" },
      { value: "wizard", text: "Wizard" },
      { value: "rogue", text: "Rogue" },
      { value: "warrior-wizard", text: "Warrior-Wizard" }
    ],
    form: {
      name: null,
      kin: null,
      type: null,
      sex: null,
      lvl: null,
      age: null,
      height: null,
      weight: null,
      ST: null,
      IQ: null,
      LK: null,
      CON: null,
      DEX: null,
      CHR: null,
      personalAdds: null,
      weightPossible: null,
      weightCarried: null,
      gp: null,
      ap: null
    }
  }),
  validations: {
    form: {
      kin: {
        required
      },
      sex: {
        required
      },
      type: {
        required
      },
      name: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    }
  }
};
</script>