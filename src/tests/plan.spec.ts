import PlanModel from '@models/Plan'
import TaxPrice from '@models/TaxPrice'

describe('Models', () => {
    it('Create Plan', async () => {
        const plan = new PlanModel()
        expect(plan).toHaveProperty('_id')
    })

    it('Create TaxPrice', async () => {
        const taxPrice = new TaxPrice()
        expect(taxPrice).toHaveProperty('_id')
    })
})
