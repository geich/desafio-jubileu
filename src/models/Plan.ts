import { Document, model, Schema } from 'mongoose'

export interface Plan extends Document {
    _id: string
    name: string
    timeInMinutes: number
}

const planSchema: Schema<Plan> = new Schema(
    {
        name: { type: String, unique: true, required: true },
        timeInMinutes: { type: Number, required: true }
    },
    { timestamps: true }
)

export default model<Plan>('plans', planSchema)
