import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import apiRoute from './app_api/routes'
import { errorHandler } from './app_api/_config'
const { notFoundHandler,
  errorHandler: handleError
} = errorHandler

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoute)

app.use(notFoundHandler)

app.use(handleError)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))