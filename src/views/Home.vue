<template>
  <div>
    <h1>Pets for addoption</h1>
    <p>Total animals: {{animalsCount}}</p>
    <p>Dogs: {{getAllDogs.length}} </p>
    <p>Cats: {{getAllCats.length}} </p>
    {{all}}
    <button @click="togglePetForm" class="btn btn-primary">Add new pet</button>
    <b-form @submit.prevent="handelSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet Name:" label-for="input-2">
        <b-form-input 
          id="input-2" 
          v-model="formData.name" 
          required placeholder="Enter name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species" label-for="input-3">
        <b-form-select id="input-3" v-model="formData.species" :options="['cats', 'dogs']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet age" label-for="input-2">
        <b-form-input
         id="input-2" 
         type="number"
         v-model="formData.age" 
         required placeholder="Enter age">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
   </b-form>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';   

export default {
  name: "Home",
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    };
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats', 
      'getAllDogs',
      'all'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handelSubmit() {
      const {species, age, name} = this.formData; 
      const payload = {
        species, 
        pet: {
          name, 
          age
        }
      }
      this.addPet(payload)

      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    },
  },
};
</script>
