import { check } from 'express-validator'
import { validateResult } from '../helpers/validate.helper.js'

export const validadorDePublicacion = [
  check('nombre')
    .notEmpty()
    .exists()
    .isString()
    .withMessage('El nombre es requerido'),
  check('titulo')
    .exists()
    .not()
    .isEmpty()
    .withMessage('El titulo es requerido'),
  check('descripcion')
    .exists()
    .not()
    .isEmpty()
    .withMessage('La descripcion es requerida'),
  check('contenido')
    .exists()
    .not()
    .isEmpty()
    .withMessage('El contenido es requerido'),
  (req, res, next) => { validateResult(req, res, next) }]
