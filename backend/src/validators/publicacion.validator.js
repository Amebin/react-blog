import { body } from 'express-validator'
import { validateResult } from '../helpers/validate.helper.js'

export const validadorDePublicacion = [
  body('title')
    .exists()
    .not()
    .isEmpty()
    .withMessage('tittle is required'),
  body('description')
    .exists()
    .not()
    .isEmpty()
    .withMessage('description is required'),
  body('content')
    .exists()
    .not()
    .isEmpty()
    .withMessage('content is required'),
  body('author')
    .exists()
    .not()
    .isEmpty(),
  (req, res, next) => { validateResult(req, res, next) }]
