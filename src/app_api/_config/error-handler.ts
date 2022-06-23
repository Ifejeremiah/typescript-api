import { NextFunction, Request, Response, } from 'express'
import { Response as response } from './'

const { errorResponse: error } = response

export { notFoundHandler, errorHandler }

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  switch (true) {
    case typeof err === 'string':
      // custom application error
      const is404 = err.toLowerCase().endsWith('not found')
      const statusCode = is404 ? 404 : 400
      console.log(err)
      return error(res, err, statusCode)
    case err.name === 'ValidationError':
      // mongoose validation error
      console.log(err)
      return error(res, err.message, 400)
    case err.name === 'UnauthorizedError':
      // jwt authentication error
      console.log(err)
      return error(res, err.message, 401)
    default:
      console.log(err)
      return error(res, err.message, 500)
  }
}

function notFoundHandler(req: Request, res: Response) {
  return error(res, 'Could not find resource', 404)
}