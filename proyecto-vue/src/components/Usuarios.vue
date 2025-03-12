<template>
  <div>
    <h1>Usuarios</h1>
    <!-----Formulario:
      *Nombre
      *Apellido
      *Nickname
      *email
      *telefono
      --->
    <input type="text" v-model="nombre" placeholder="Nombre" />
    <br />
    <input type="text" v-model="apellido" placeholder="Apellido" />
    <br />
    <input type="text" v-model="nickname" placeholder="Nickname" />
    <br />
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="text" v-model="telefono" placeholder="Teléfono" />
    <br />
    <!----Desarrollar el botón 'crear usuario' y añadirlo a un arreglo de objetos----->
    <button v-on:click="crearUsuario" v-if="!mostrarActualizar">Crea usuario</button>
    <button v-if="mostrarActualizar">Actualizar Datos</button>
    <br />
    <table>
      <!------Cabecera de la tabla----->
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Nickname</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <!-----Cuerpo de la tabla---->
      <tbody>
        <tr v-for="objUsuario in usuarios" :key="objUsuario.nickname">
          <td>{{ objUsuario.nombre }}</td>
          <td>{{ objUsuario.apellido }}</td>
          <td>{{ objUsuario.nickname }}</td>
          <td>{{ objUsuario.email }}</td>
          <td>{{ objUsuario.telefono }}</td>
          <td>
            <button v-on:click="btnActualizar(objUsuario.nombre, objUsuario.apellido, objUsuario.nickname, objUsuario.email, objUsuario.telefono)">Actualizar</button>
            <button>Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <br>
    <br>
    <!--
    <h1 v-if="mostrar">Titulo</h1>
    <button v-on:click="mostrarTitulo">Mostrar</button>
    -->
  </div>
</template>

<script>
var obj_1 = {
  nombre: "Carolina",
  apellido: "Daza",
  nickname: "caro123",
  email: "carolina@gmail.com",
  telefono: "319872",
};
var obj_2 = {
  nombre: "Ana Maria",
  apellido: "Hernán",
  nickname: "ana0123",
  email: "anamaria@gmail.com",
  telefono: "08255",
};
var obj_3 = {
  nombre: "Juan",
  apellido: "Quiñonez",
  nickname: "Juancho",
  email: "juan@gmail.com",
  telefono: "64332",
};
var obj_4 = {
  nombre: "Daniel",
  apellido: "Fernandez",
  nickname: "danielF",
  email: "daniel@gmail.com",
  telefono: "2945002",
};

export default {
  data: () => {
    return {
      nombre: null,
      apellido: null,
      nickname: null,
      email: null,
      telefono: null,
      usuarios: [obj_1, obj_2, obj_3, obj_4],
      mostrarActualizar: false
    };
  },
  methods: {
    crearUsuario() {
      //Crear objeto json a partir de la info del formulario
      let objUsuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        nickname: this.nickname,
        email: this.email,
        telefono: this.telefono,
      };

      //Añadimos el objeto al arreglo global del componente
      this.usuarios.push(objUsuario);
      //llamamos al método para que limpie los datos de los campos del formulario
      this.limpiarCampos();
    },
    limpiarCampos() {
      this.nombre = null;
      this.apellido = null;
      this.nickname = null;
      this.email = null;
      this.telefono = null;
    },
    btnActualizar(nombre, apellido, nickname, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nickname = nickname;
        this.email = email;
        this.telefono = telefono;
        this.mostrarActualizar = !this.mostrarActualizar;
    },
    /*
    mostrarTitulo(){
        this.mostrar = !this.mostrar;
    }
    */
    /******
     * Ejercicio:
     * Añada una función al botón 'actualizar' el cual lleve los datos
     * de la fila a la tabla 'registro'
     */
  },
};
</script>

<style>
table {
  margin-top: 50px;
  width: 100%;
}

table,
tr,
td,
th {
  border: 1px solid black;
}
</style>