import { Request, Response } from 'express'
import { Response as response } from '../_config'

export { getUsers, getUserById }

const { successResponse: success } = response

function getUsers(req: Request, res: Response) {
  const users = {
    user1: [{ name: 'Ife Jeremiah' }],
    user2: [{ name: 'Mark John' }],
    user3: [{ name: 'John Doe' },],
  }

  success(res, 'Users fetched successfully', users)
}

function getUserById(req: Request, res: Response) {
  const user = { user1: [{ name: 'Ife Jeremiah' }] }

  success(res, 'User data fetched successfully', user)
}