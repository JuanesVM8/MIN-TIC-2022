<template>
  <div>
    <div class="card" style="width: 18rem">
      <img
        :src="url"
        class="card-img-top"
        alt="upb"
      />
      <div class="card-body">
        <h5 class="card-title">{{nombre}}</h5>
        <p class="card-text">
          {{descripcion}}
        </p>
        <a href="#" class="btn btn-primary" v-on:click="cambiarImg1">Cambiar imagen</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["url", "nombre", "descripcion", "imagenes"],
    methods:{
        cambiarImg1(){
            this.url = this.imagenes[0];
        }
    }
};
</script>

<style>
</style>