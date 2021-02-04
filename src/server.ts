import 'dotenv/config'
import express from 'express'
import { urlencoded, json } from 'body-parser'

import dbConnection from './config/database'
import routes from './routes'

const { PORT } = process.env

const app = express()

dbConnection('jubileu')

app.use(urlencoded({ extended: false }))
app.use(json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT || 3000}`)
})
