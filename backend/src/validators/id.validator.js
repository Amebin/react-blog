import { param } from 'express-validator'
import { validateResult } from '../helpers/validate.helper.js'

export const validadorDeId = [
  param('id')
    .notEmpty()
    .exists()
    .isString()
    .withMessage('La id es requerida'),
  (req, res, next) => { validateResult(req, res, next) }]
