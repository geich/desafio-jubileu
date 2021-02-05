import { Document, model, Schema } from 'mongoose'

export interface TaxPrice extends Document {
    _id: string
    origin: string
    destiny: string
    pricePerMinute: number
}

const taxPriceSchema: Schema<TaxPrice> = new Schema(
    {
        origin: { type: String, required: true },
        destiny: { type: String, required: true },
        pricePerMinute: { type: Number, required: true }
    },
    { timestamps: true }
)


export default model<TaxPrice>('TaxesPrices', taxPriceSchema)
