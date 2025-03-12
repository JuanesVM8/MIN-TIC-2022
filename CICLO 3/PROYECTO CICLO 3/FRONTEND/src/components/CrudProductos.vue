<template>
  <div>
    <h1>Productos</h1>

    <!---Formulario para crear un producto---->
    <div>
      <!-----Nombre y precio---->
      <div class="row">
        <!---nombre-->
        <div class="col-6 mb-3">
          <input
            type="text"
            class="form-control"
            id="nombreProducto"
            placeholder="nombre producto"
            v-model="nombre"
          />
        </div>
        <!---precio-->
        <div class="col-6 mb-3">
          <input
            type="number"
            class="form-control"
            id="precioProducto"
            placeholder="precio producto"
            v-model="precio"
          />
        </div>
      </div>
      <!-----Categoría y descripción--->
      <div class="row">
        <!---Categoría--->
        <div class="col-6">
          <select
            v-model="categoria"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected value="null">Categoría</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Licores">Licores</option>
            <option value="Frutas">Frutas</option>
          </select>
        </div>
        <!------Descripción----->
        <div class="col-6 mb-3">
          <input
            type="text"
            class="form-control"
            id="nombreProducto"
            placeholder="descripción producto"
            v-model="descripcion"
          />
        </div>
      </div>
      <!----Botón de guardado--->
      <button type="button" class="btn btn-success" @click="btnCrearProducto">
        Guardar
      </button>
    </div>

    <!-----TABLA DE PRODUCTOS------->
    <table class="table table-striped table-hover">
      <!---Cabecera de la tabla--->
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Categoria</th>
          <th scope="col">Descripción</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <!---Cuerpo de la tabla--->
      <tbody>
        <!---Iterar la propiedad computada que contiene los productos--->
        <tr v-for="objProducto in productos" :key="objProducto._id">
          <td>{{ objProducto.nombre }}</td>
          <td>{{ objProducto.precio }}</td>
          <td>{{ objProducto.categoria }}</td>
          <td>{{ objProducto.descripcion }}</td>
          <td>
            <!---Botón de editar--->
            <button type="button" class="btn btn-primary">Editar</button>
            &nbsp;
            <!----Botón de eliminar--->
            <button type="button" class="btn btn-danger" @click="btnEliminar(objProducto._id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  data: () => {
    return {
      nombre: null,
      precio: null,
      categoria: null,
      descripcion: null,
    };
  },
  methods: {
    btnCrearProducto() {
      if (
        this.nombre != null &&
        this.precio != null &&
        this.categoria != null &&
        this.descripcion != null
      ) {
        //Crear objeto con los datos del formulario
        let objProducto = {
          nombre: this.nombre,
          precio: this.precio,
          categoria: this.categoria,
          descripcion: this.descripcion,
        };
        //Enviamos el objeto a las acciones del store para que posteriormente se envíe
        //en el cuerpo de la petición http a la API del servidor construido
        store.dispatch("crearProducto", objProducto).then(() => {
          this.limpiarCampos();
          store.dispatch("cargarProductos");
        });
      }
    },
    //método para limpiar los campos
    limpiarCampos() {
      this.nombre = null;
      this.precio = null;
      this.categoria = null;
      this.descripcion = null;
    },
    //Método para eliminar un producto
    btnEliminar(id) {
      let obj = {
        id: id,
      };
      store.dispatch("eliminarProducto", obj).then(() => {
        store.dispatch("cargarProductos");
      });
    },
  },
  created: () => {
    //llamar a las acciones del store para cargar los productos de la api
    store.dispatch("cargarProductos");
  },
  computed: {
    //Propiedad computada que contiene los productos del state
    productos: () => {
      return store.state.productos;
    },
  },
};
</script>

<style>
</style>