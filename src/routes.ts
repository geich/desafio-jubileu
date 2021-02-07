import { Router } from 'express'
import PlanController from '@controllers/PlanController'
// import { requireAuth } from './configs/passport'

const routes = Router()

routes.get('/plans', PlanController.index)
routes.post('/plans', PlanController.show)

export default routes
