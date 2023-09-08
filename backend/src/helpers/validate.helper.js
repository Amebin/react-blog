import { validationResult } from 'express-validator'
import { borrarImagen } from './eliminar-imagen.helper.js'
export const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    const rutaDeLaImagen = req.file.path
    borrarImagen(rutaDeLaImagen)
    res.status(403).send({ errors: err.array() })
  }
}
