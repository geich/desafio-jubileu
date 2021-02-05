import { connect } from 'mongoose'

const { DB_HOST, DB_PORT } = process.env

export const MONGO_URI = `mongodb://${DB_HOST}:${DB_PORT}`

export default async (database: string): Promise<void> => {
    const mongoConnectUrl = `${MONGO_URI}/${database}`

    const dbConnect = () =>
        connect(mongoConnectUrl, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

    return dbConnect()
        .then(() => console.info('Database Connected'))
        .catch(err => console.info(err))
}
