import { param } from 'express-validator'
import { validateResult } from '../helpers/validate.helper.js'

export const validadorDeId = [
  param('id')
    .notEmpty()
    .exists()
    .withMessage('La id es requerida')
    .isString()
    .isUUID()
    .withMessage('La id tiene que ser UUId'),
  (req, res, next) => {
    validateResult(req, res, next)
    console.log(req.params)
  }]
