<template>
  <div>
    <formulario-carro />
    <listado-carros />
  </div>
</template>

<script>
import FormularioCarro from "../components/FormularioCarro.vue";
import ListadoCarros from "../components/ListadoCarros.vue";

export default {
  components: {
    FormularioCarro,
    ListadoCarros,
  },
};
</script>

<style>
</style>