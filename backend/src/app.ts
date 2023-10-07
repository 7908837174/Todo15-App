import express from 'express'
import cors from 'cors'
import todo from './routes/Todo'
import './db/config'

const PORT = process.env.PORT ?? 3000
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') ?? []

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: (origin: string | undefined, callback) => {
      if (origin === undefined) {
        callback(null, true)
        return
      }
      if (allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }
      callback(new Error('Not allowed by CORS'))
    },
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  })
)

app.use('/todo', todo)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
