//controlador para obtener todas las tareas
export const controladorObtenerTareas = async (solicitud, respuesta) => {
    try {
        const tarea = await tareaModelo.findAll();
        if (!tarea) return respuesta.status(404);
        return respuesta.status(200).json(tarea);
    } 
    catch (error) {
        console.error(error);
        return respuesta.status(500).json({
            message: 'Error de Servidor'
        });
    }
}

//controlador para crear una tarea
export const controladorCrearTarea = async (solicitud, respuesta) => {
    try {
        const nuevaTarea = await tareaModelo.create(solicitud.body);
        return respuesta.status(201).json(nuevaTarea);
    }
    catch (error) {
        console.error(error)
        return respuesta.status(500).json({
            message: 'Error de Servidor'
        });
    }
}
//controlador para modificar una tarea
export const controladorModificarTarea = async (solicitud, respuesta) => {
    const { ID } = solicitud.params;
    try {
        const tarea = await tareaModelo.findByPk(ID);
        if (!tarea) {
            return respuesta.status(404).json({
                message: 'Tarea no encontrada'
            });
        }
        tarea.update(solicitud.body);

        return respuesta.status(200).json(tarea);
    }
    catch (error) {
        console.error(error)
        return respuesta.status(500).json({
            message: 'Error de Servidor'
        });
    }
}
//controlador para eliminar una tarea
export const controladorEliminarTarea = async (solicitud, respuesta) => {
    const { ID } = solicitud.params
    try {
        const tareaEliminada = await tareaModelo.destroy({
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
        console.error(error)
        return respuesta.status(500).json({
            message: 'Error de Servidor'
        });
    }
}

// faltan los controladores para la vista
