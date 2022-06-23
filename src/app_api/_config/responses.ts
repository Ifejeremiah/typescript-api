import { Response } from "express"

export { successResponse, errorResponse }

function successResponse(res: Response, message = 'Done successfully', data: any = null, statusCode = 200) {
  const body = {
    success: true,
    message,
    data
  }

  return res.status(statusCode).json(body)
}

function errorResponse(res: Response, message = 'Sorry, there is an error', statusCode = 400) {
  const body = {
    success: false,
    message,
  }

  return res.status(statusCode).json(body)
}