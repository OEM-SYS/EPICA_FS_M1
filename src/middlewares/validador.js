import { validationResult } from "express-validator";


export const validador = (solicitud, respuesta, next) => {
    const errors = validationResult(solicitud);
    if (!errors.isEmpty()) {
        return respuesta.status(400).json(errors);//di hay error devuelvo el error
    }
    next();//y si no hay error continua a la ruta
}