import express from 'express'
import { jobsRouter } from './routes/jobs.js'
import { corsMiddleware } from './middlewares/cors.js'
import { DEFAULTS } from './config.js'
import { aiRouter } from './routes/ai.js'

const PORT = process.env.PORT ?? DEFAULTS.PORT
const app = express()

app.set('trust proxy', 1)

app.use(corsMiddleware())
app.use(express.json())

app.get('/health', (req, res) => {
  const healthcheck = {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    memory: process.memoryUsage(),
    nodeVersion: process.version
  }
  return res.json(healthcheck)
})

app.use('/jobs', jobsRouter)
app.use('/ai', aiRouter)

if (!process.env.NODE_ENV) {
  app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`)
  })
}

export default app