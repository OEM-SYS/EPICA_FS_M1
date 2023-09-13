//importamos los tipos de datos desde sequelize
import { DataTypes } from "sequelize";
//importamos los datos desde configuraciones/baseDatos.js contiene base usuario y contraseña
import { mysequelize } from "../configuraciones/baseDatos.js";

// exportamos el modeloTarea para utilizarlo en controladores/tarea.controladores.js
export const modeloTarea = mysequelize.define('Posteo', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contenido: {
        type: DataTypes.STRING,
        allowNull: true
    },
    urlImagen: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
});//la tabla no hace falta crearla; se creara automaticamente en plural (Posteos) 
