<template>
  <div>
    <button type="button" class="btn btn-primary" v-on:click="cargarArreglo">
      Cargar tarjetas
    </button>
    <!------Contenedor padre---->
    <div id="contenedor">
      <!----Contenedor hijo encargado de iterar el componente tarjeta---->
      <div v-for="obj in arreglo" :key="obj.nombre">
        <tarjeta
          :url="obj.url"
          :nombre="obj.nombre"
          :descripcion="obj.descripcion"
          :imagenes="imagenes"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tarjeta from "./Tarjeta.vue";

export default {
  components: {
    Tarjeta,
  },
  data: () => {
    return {
      arreglo: [],
      imagenes: ["https://rickandmortyapi.com/api/character/avatar/2.jpeg", "https://rickandmortyapi.com/api/character/avatar/3.jpeg", "https://rickandmortyapi.com/api/character/avatar/4.jpeg"]
    };
  },
  methods: {
    cargarArreglo() {
      console.log("Cargando arreglo...");
      let obj_1 = {
        url: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        nombre: "upb",
        descripcion: "Descripcion corta",
      };
      let obj_2 = {
        url: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        nombre: "Rick and Morty 1",
        descripcion: "Descripcion corta",
      };
      let obj_3 = {
        url: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        nombre: "Rick and Morty 2",
        descripcion: "Descripcion corta",
      };

      this.arreglo.push(obj_1);
      this.arreglo.push(obj_2);
      this.arreglo.push(obj_3);
    },

  },
  created: () => {},
};
</script>

<style>
#contenedor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>