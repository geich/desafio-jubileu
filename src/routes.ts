import { Router } from 'express'
import PlanController from '@controllers/PlanController'

const routes = Router()

routes.get('/plans', PlanController.index)
routes.post('/plans', PlanController.show)

export default routes
