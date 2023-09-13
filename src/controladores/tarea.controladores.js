//importamos modeloTarea que contiene los tipos de datos
import { modeloTarea } from "../modelos/tareas.js";

//controlador para obtener todas las tareas
export const controladorObtenerTareas = async (solicitud, respuesta) => {
    console.log(solicitud.body);//para probar si llega
    try {
        const tarea = await modeloTarea.findAll();//trae todos los datos del modeloTarea
        if (!tarea) return respuesta.status(404);
        return respuesta.status(200).json(tarea);
    } 
    catch (error) {
        console.error(error);
        return respuesta.status(500).json({
            message: 'Error de Servidor'
        });
    }
};
//controlador para crear una tarea
export const controladorCrearTarea = async (solicitud, respuesta) => {
    console.log(solicitud.body);//para probar si llega
    try {
        const nuevaTarea = await modeloTarea.create(solicitud.body);
        return respuesta.status(201).json(nuevaTarea);
    }
    catch (error) {
        console.error(error);
        return respuesta.status(500).json({
            message: 'Error de Servidor'
        });
    }
};
//controlador para modificar una tarea
export const controladorModificarTarea = async (solicitud, respuesta) => {
    console.log(solicitud.body);//para probar si llega
    const { ID } = solicitud.params;
    try {
        const tarea = await modeloTarea.findByPk(ID);
        if (!tarea) {
            return respuesta.status(404).json({
                message: 'Tarea no encontrada'
            });
        }
        tarea.update(solicitud.body);

        return respuesta.status(200).json(tarea);
    }
    catch (error) {
        console.error(error);
        return respuesta.status(500).json({
            message: 'Error de Servidor'
        });
    }
};
//controlador para eliminar una tarea
export const controladorEliminarTarea = async (solicitud, respuesta) => {
    console.log(solicitud.body);//para probar si llega
    const { ID } = solicitud.params;
    try {
        const tareaEliminada = await modeloTarea.destroy({
            where: {
                ID: ID
            }
        });
        if (!tareaEliminada) {
            return respuesta.status(404).json({
                message: 'Tarea no encontrada'
            });
        }
        return respuesta.status(200).json({
            message: 'Tarea eliminada'
        });
    }
    catch (error) {
        console.error(error);
        return respuesta.status(500).json({
            message: 'Error de Servidor'
        });
    }
};

// controlador para la vista
export const controladorVista = async (solicitud, respuesta) => {
    try {
        const tareas = await modeloTarea.findAll();
        respuesta.render('tareas.ejs', {tareas});
    }
    catch (error) {
        console.error(error)
        return respuesta.status(500).json({
            message: 'Error de Servidor'
        });
    }
};