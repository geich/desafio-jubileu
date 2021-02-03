import { Router } from 'express'
// import { requireAuth } from './configs/passport'
import PlanResolver from './controllers/PlanResolver'

const routes = Router()

routes.get('/', async (req, res) => {
    res.send('⚡️[server]: Server is running')
})

routes.post('/plans', PlanResolver.index)

export default routes
