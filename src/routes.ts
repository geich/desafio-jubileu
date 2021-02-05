import { Router } from 'express'
import PlanController from './controllers/PlanController'
// import { requireAuth } from './configs/passport'

const routes = Router()

routes.get('/', async (req, res) => {
    res.send('⚡️[server]: Server is running')
})

routes.get('/plans', PlanController.index)

export default routes
