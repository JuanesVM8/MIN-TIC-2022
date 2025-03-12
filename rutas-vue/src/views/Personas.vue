<template>
  <div>
    <formulario-persona />
    <listado-personas />
  </div>
</template>

<script>
import FormularioPersona from "../components/FormularioPersona.vue";
import ListadoPersonas from "../components/ListadoPersonas.vue";

export default {
  components: {
    FormularioPersona,
    ListadoPersonas,
  },
};
</script>

<style>
</style>