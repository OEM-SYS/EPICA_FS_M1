import { validationResult } from "express-validator";


export const validador = (solicitud, respuesta, next) => {
    const errors = validationResult(solicitud)

    if (!errors.isEmpty()) {
        return respuesta.status(400).json(errors);
    }

    next();
}