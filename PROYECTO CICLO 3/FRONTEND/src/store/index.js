import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Variable que representa la url del servidor
const urlServidor = "https://backend-53410.herokuapp.com/"//"http://localhost:3000/"


export default new Vuex.Store({
  state: {
    productos: []
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload;
    }
  },
  actions: {
    async cargarProductos({ commit }) {
      const peticion = await fetch(urlServidor + 'producto');
      const data = await peticion.json();
      console.log(data);
      //llamamos al mutations
      commit('setProductos', data);
    },
    //Método para crear un producto
    async crearProducto({commit}, objProducto){
      await fetch(urlServidor + 'producto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objProducto)//Casteamos el objeto a formato JSON
      });
    },
    //Método para eliminar un producto
    async eliminarProducto({commit}, obj){
      await fetch(urlServidor + 'producto', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
    }
  },
  modules: {
  }
})
