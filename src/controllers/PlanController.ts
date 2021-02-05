
import { Request, Response } from 'express'
import PlanModel, { Plan } from '../models/Plan'


class UserController {
    public index = async (req: Request, res: Response): Promise<Response> => {
        return PlanModel.find()
        .then(plan => res.json(plan))
        .catch(err => res.status(500).send(err))
    }

    
}

export default new UserController()
