<template>
  <div id="characterEdit">
    <template v-if="form.name == null">
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle mr-2"></b-spinner>
        <strong>Loading...</strong>
      </div>
    </template>
    <b-form v-else @submit.stop.prevent="onSubmit">
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
      <b-form-group id="lvl-group" label="lvl" label-for="lvl">
        <b-form-input
          id="lvl"
          name="lvl"
          v-model="$v.form.lvl.$model"
          :state="validateState('lvl')"
          aria-describedby="lvl-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="lvl-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="age-group" label="age" label-for="age">
        <b-form-input
          id="age"
          name="age"
          v-model="$v.form.age.$model"
          :state="validateState('age')"
          aria-describedby="age-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="age-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="height-group" label="height" label-for="height">
        <b-form-input
          id="height"
          name="height"
          v-model="$v.form.height.$model"
          :state="validateState('height')"
          aria-describedby="height-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="height-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="weight-group" label="weight" label-for="weight">
        <b-form-input
          id="weight"
          name="weight"
          v-model="$v.form.weight.$model"
          :state="validateState('weight')"
          aria-describedby="weight-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="weight-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="ST-group" label="ST" label-for="ST">
        <b-form-input
          id="ST"
          name="ST"
          v-model="$v.form.ST.$model"
          :state="validateState('ST')"
          aria-describedby="ST-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="ST-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="IQ-group" label="IQ" label-for="IQ">
        <b-form-input
          id="IQ"
          name="IQ"
          v-model="$v.form.IQ.$model"
          :state="validateState('IQ')"
          aria-describedby="IQ-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="IQ-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="LK-group" label="LK" label-for="LK">
        <b-form-input
          id="LK"
          name="LK"
          v-model="$v.form.LK.$model"
          :state="validateState('LK')"
          aria-describedby="LK-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="LK-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="CON-group" label="CON" label-for="CON">
        <b-form-input
          id="CON"
          name="CON"
          v-model="$v.form.CON.$model"
          :state="validateState('CON')"
          aria-describedby="CON-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="CON-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="DEX-group" label="DEX" label-for="DEX">
        <b-form-input
          id="DEX"
          name="DEX"
          v-model="$v.form.DEX.$model"
          :state="validateState('DEX')"
          aria-describedby="DEX-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="DEX-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="CHR-group" label="CHR" label-for="CHR">
        <b-form-input
          id="CHR"
          name="CHR"
          v-model="$v.form.CHR.$model"
          :state="validateState('CHR')"
          aria-describedby="CHR-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="CHR-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="personalAdds-group" label="personalAdds" label-for="personalAdds">
        <b-form-input
          id="personalAdds"
          name="personalAdds"
          v-model="$v.form.personalAdds.$model"
          :state="validateState('personalAdds')"
          aria-describedby="personalAdds-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="personalAdds-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="weightPossible-group" label="weightPossible" label-for="weightPossible">
        <b-form-input
          id="weightPossible"
          name="weightPossible"
          v-model="$v.form.weightPossible.$model"
          :state="validateState('weightPossible')"
          aria-describedby="weightPossible-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="weightPossible-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="weightCarried-group" label="weightCarried" label-for="weightCarried">
        <b-form-input
          id="weightCarried"
          name="weightCarried"
          v-model="$v.form.weightCarried.$model"
          :state="validateState('weightCarried')"
          aria-describedby="weightCarried-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="weightCarried-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="gp-group" label="gp" label-for="gp">
        <b-form-input
          id="gp"
          name="gp"
          v-model="$v.form.gp.$model"
          :state="validateState('gp')"
          aria-describedby="gp-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="gp-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="ap-group" label="ap" label-for="ap">
        <b-form-input
          id="ap"
          name="ap"
          v-model="$v.form.ap.$model"
          :state="validateState('ap')"
          aria-describedby="ap-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="ap-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, numeric } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  props: {
    characterID: {
      type: String,
      required: true
    }
  },
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
      { value: "rouge", text: "Rogue" },
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
      name: {
        required,
        minLength: minLength(3)
      },
      kin: {
        required
      },
      type: {
        required
      },
      sex: {
        required
      },
      lvl: {
        numeric,
        required
      },
      age: {
        numeric
      },
      height: {
        required
      },
      weight: {
        numeric,
        required
      },
      ST: {
        numeric,
        required
      },
      IQ: {
        numeric,
        required
      },
      LK: {
        numeric,
        required
      },
      CON: {
        numeric,
        required
      },
      DEX: {
        numeric,
        required
      },
      CHR: {
        numeric,
        required
      },
      personalAdds: {
        numeric,
        required
      },
      weightPossible: {
        numeric,
        required
      },
      weightCarried: {
        numeric,
        required
      },
      gp: {
        numeric,
        required
      },
      ap: {
        numeric,
        required
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      let $vm = this;
      $vm.$v.form.$touch();
      if ($vm.$v.form.$anyError) {
        return;
      }

      let form = $vm.form;

      axios
        .patch(`https://pbeard-tunnels-and-trolls.herokuapp.com/characters`, {
          _id: $vm.characterID,
          ...form
        })
        .then(res => {
          console.log("Success:", res.data);
          $vm.$bvModal.hide("editCharacter");
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  },
  beforeCreate() {
    let $vm = this;

    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
      if (modalId == "editCharacter") {
        let path = `https://pbeard-tunnels-and-trolls.herokuapp.com/characters/${$vm.characterID ||
          $vm.$children[0].$children[1].$children[0].selectedCharacter}`;
        axios
          .get(path)
          .then(res => {
            $vm.form.name = res.data.name;
            $vm.form.kin = res.data.kin;
            $vm.form.type = res.data.type;
            $vm.form.sex = res.data.sex;
            $vm.form.lvl = res.data.lvl;
            $vm.form.age = res.data.age;
            $vm.form.height = res.data.height;
            $vm.form.weight = res.data.weight;
            $vm.form.ST = res.data.primeAtts.ST;
            $vm.form.IQ = res.data.primeAtts.IQ;
            $vm.form.LK = res.data.primeAtts.LK;
            $vm.form.CON = res.data.primeAtts.CON;
            $vm.form.DEX = res.data.primeAtts.DEX;
            $vm.form.CHR = res.data.primeAtts.CHR;
            $vm.form.personalAdds = res.data.personalAdds;
            $vm.form.weightPossible = res.data.weightPossible;
            $vm.form.weightCarried = res.data.weightCarried;
            $vm.form.gp = res.data.gp;
            $vm.form.ap = res.data.ap;
          })
          .catch(err => console.log(err));
      }
    });
  }
};
</script>
