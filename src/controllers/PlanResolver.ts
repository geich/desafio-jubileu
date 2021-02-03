import { Request, Response } from 'express'

class PlanController {
    public index = async (req: Request, res: Response): Promise<Response> => {
        return res.send('Plan check')
    }

}

export default new PlanController()