import { Router, Request, Response, NextFunction } from 'express'

import { user } from '../controllers'

const router = Router()

router.get('/', user.getUsers)

router.get('/:id', user.getUserById)

export default router