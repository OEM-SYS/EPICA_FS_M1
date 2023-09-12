//En la terminal instalar sequelize:   npm install --save sequelize
//en la terminar instalar mysql2 (tipo de base a utilizar):   npm install --save mysql2
import { Sequelize } from "sequelize";

//new sequelize parametros:
//NOTA:nombre base de datos, usuarios y contraseñas fueron creados desde mysql 
//1) es el nobmre de la base de datos epicamodulo1
//2) es el nombre de usuario para conectarse a la base de datos
//3) es la contraseña para conectarse a la base de datos
//4)parametro son los siguientes
//host: en vez de localhost mysql podria estar en otro lugar ej 192.168.1.10
//en dialect utilizaremos una base de datos mysql
export const mysequelize = new Sequelize("epicamodulo1", "epicamodulo1", "epicamodulo1pass", {
  host: "localhost",
  dialect: "mysql",
});

//inicia la base de datos, si alguno de los parametros  nos es el correcto por ej la contraseña
//devolvera  el codigo de error de mysql y un mensaje ejemplo:
//errno: 1045   sqlMessage: "Access denied for user 'epicamodulo1'@'localhost' (using password: YES)",
export const iniciarBaseDatos = async () => {
  try {
    await mysequelize.authenticate();
    // await mysequelize.sync({ force: true });
    await mysequelize.sync();
    console.log("La conexion fue establecida satisfactoriamente.");
  } 
  catch (error) {
    console.error("No se puede conectar a la base de Datos", error);
  }
};
