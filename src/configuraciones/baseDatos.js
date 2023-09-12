import { Sequelize } from "sequelize";

export const mysequelize = new Sequelize("epicamodulo1", "epicamodulo1", "epicamodulo1pass", {
  host: "localhost",
  dialect: "mysql",
});

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
