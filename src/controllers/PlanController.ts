import { Request, Response } from 'express'
import * as yup from 'yup'
import { calcPlanDiscount } from '@helpers/plans'
import PlanModel from '@models/Plan'
import TaxPriceModel from '@models/TaxPrice'

const PlanShowSchema = yup.object().shape({
    origin: yup.string().min(3).max(3).required(),
    destiny: yup.string().min(3).max(3).required(),
    planName: yup.string().required(),
    minutes: yup.number().required()
})
class UserController {
    public index = async (req: Request, res: Response): Promise<Response> => {
        return PlanModel.find()
            .then(plan => res.json(plan))
            .catch(err => res.status(500).send(err))
    }

    public show = async (req: Request, res: Response): Promise<Response> => {
        const { origin, destiny, minutes, planName } = req.body

        const yupValidation = await PlanShowSchema.validate(
            { origin, destiny, minutes, planName },
            {
                abortEarly: false
            }
        ).catch(err => err)

        if (yupValidation.errors) {
            return res.status(400).send(yupValidation.errors)
        }

        return TaxPriceModel.findOne({ origin, destiny })
            .then(tax => {
                if (!tax) {
                    return res
                        .status(404)
                        .send(
                            'Tax not found in database, check origin and destiny fields'
                        )
                }

                return PlanModel.findOne({ name: planName })
                    .then(plan => {
                        if (!plan) {
                            return res
                                .status(404)
                                .send(
                                    'Plan not found in database, check plan name'
                                )
                        }

                        const priceWithoutPlan = parseFloat(
                            (minutes * tax.pricePerMinute).toFixed(2)
                        )
                        const priceWithPlanDiscount = parseFloat(
                            calcPlanDiscount(
                                plan.timeInMinutes,
                                minutes,
                                tax.pricePerMinute
                            ).toFixed(2)
                        )

                        return res.json({
                            origin,
                            destiny,
                            planName,
                            minutes,
                            priceWithoutPlan,
                            priceWithPlanDiscount
                        })
                    })
                    .catch(err => res.status(500).send(err))
            })
            .catch(err => res.status(500).send(err))
    }
}

export default new UserController()
