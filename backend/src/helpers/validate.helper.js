import { validationResult } from 'express-validator'
import { errorResponso } from '../helpers/response_error.helper.js'
export const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    const { statusCode, array } = err
    errorResponso(res, statusCode, array())
  }
}
