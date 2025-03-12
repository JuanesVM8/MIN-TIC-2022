import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    municipios: []
  },
  mutations: {
    setMunicipios(state, payload){
      state.municipios = payload;
    }
  },
  actions: {
    async cargarMunicipios({commit}){
      const peticion = await fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json');
      const data = await peticion.json();
      console.log(data);
      commit('setMunicipios', data);
    }
  },
  modules: {
  }
})
