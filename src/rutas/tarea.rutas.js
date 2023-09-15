import {Router} from "express";
import { controladorCrearTarea, controladorEliminarTarea, controladorModificarTarea, controladorObtenerTareas, controladorVista } from "../controladores/tarea.controladores.js";
import {crearEsquemaTarea, editarEsquemaTarea} from "../modelos/esquemas/tareas.esquema.js";
import { validador } from "../middlewares/validador.js";
import { modeloTarea } from "../modelos/tareas.js";

const tareaEnrutador= Router();//este es el enrutador utilizado en aplicacion.js

//enpoint para obtener todas las tareas
tareaEnrutador.get('/api/tareas', controladorObtenerTareas);

//enpoint para crear una tarea
tareaEnrutador.post('/api/tareas', crearEsquemaTarea, validador, controladorCrearTarea);

//enpoint para modificar una tarea
tareaEnrutador.put('/api/tareas/:ID', editarEsquemaTarea, validador, controladorModificarTarea);

//enpoint para eliminar una tarea
tareaEnrutador.delete('/api/tareas/:ID', controladorEliminarTarea);

//ruta para la vista
tareaEnrutador.get('/tareas', controladorVista);

export {tareaEnrutador};