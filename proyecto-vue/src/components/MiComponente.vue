<template>
    <div>
    <h1>{{ Titulo }}</h1>
    <h2>{{ Subtitulo }}</h2>
    <input v-model="numero1" type="number" placeholder="Numero 1" />
    <br>
    <input v-model="numero2" type="number" placeholder="Numero 2" />
    <br>

    <button v-on:click="sumar">Sumar</button>
    
    <span>Suma: {{ resultado }}</span>
    
    <button v-on:click="restar">Restar</button>
    
    
    <span>Resta: {{ resultado2 }}</span>
    
    <button v-on:click="multiplicar">Multiplicar</button>
    
    <span>Multiplicación: {{ resultado3 }}</span>
    
    <button v-on:click="dividir">Dividir</button>
    
    <span>División: {{ resultado4 }}</span>
</div>
</template>

<script>
export default {
  //Data contiene las variables globales del componente
  data: () => {
    return {
      Titulo: "Titulo Componente",
      Subtitulo: "Subtítulo Componente",
      numero1: null,
      numero2: null,
      resultado: "",
      resultado2: "",
      resultado3: "",
      resultado4: "",
    };
  },
  methods: {
    sumar() {
      this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
    },
    restar() {
      this.resultado2 = parseInt(this.numero1) - parseInt(this.numero2);
    },
    multiplicar() {
      this.resultado3 = parseInt(this.numero1) * parseInt(this.numero2);
    },
    dividir() {
      this.resultado4 = parseInt(this.numero1) / parseInt(this.numero2);
    },
  },
};
</script>

<style>
</style>