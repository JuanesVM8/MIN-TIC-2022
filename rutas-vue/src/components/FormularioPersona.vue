<template>
  <div>
    <h1>Formulario Persona</h1>
    <!----Ciudades--->
    <select>
      <!---Iteran todos los municipios--->
      <option
        v-for="obj in municipios"
        :key="obj.c_digo_dane_del_municipio"
        :value="obj.municipio"
      >
        {{ obj.municipio }}
      </option>
    </select>
    <br />
    <!-----Botón de redirección---->
    <button v-on:click="goCarros">Carros</button>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  methods: {
      goCarros(){
          this.$router.push('/carros');
      }
  },
  created: () => {
    //Llamar las acciones (con dispatch se llaman las acciones del store)
    store.dispatch("cargarMunicipios");
  },
  computed: {
    municipios: () => {
      return store.state.municipios;
    },
  },
};
</script>

<style>
</style>