import 'dotenv/config'
import express from 'express'
import { urlencoded, json } from 'body-parser'

import routes from './routes'

const { PORT } = process.env

const app = express()

app.use(urlencoded({ extended: false }))
app.use(json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT || 3000}`)
})
