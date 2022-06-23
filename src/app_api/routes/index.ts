import Router from "express"
import userRoute from './user.route'

const router = Router()

const routes = [
  {
    path: '/users',
    route: userRoute
  }
]

routes.forEach(x => router.use(x.path, x.route))

export default router