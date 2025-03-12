const mysql = require('mysql');
const key_database = require('./key_database');

class ConnectionDb {
    constructor() {
        //Crear objeto de conexión
        this.connection = mysql.createConnection({
            host: key_database.host,
            user: key_database.username,
            password: key_database.password,
            database : 'misiontic-53410',
            port: 3306
        });
         //Generar conexión
        this.connection.connect();
    }

    insert(query){        
        //Ejecutar query
        this.connection.query(query, (err, rows, fields) => {
            if (err) throw err;
            console.log('The solution is: ', rows[0].solution);
          });
        
          this.connection.end();
    }
}

module.exports = ConnectionDb;