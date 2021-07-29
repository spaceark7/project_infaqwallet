import express from 'express'
import data from './data/data.js'
import connectDB from './config/database.js'
import dotenv from 'dotenv'

dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is Running')
})

app.get('/api/rincian', (req, res) => {
  res.json(data)
})
app.get('/api/rincian/:tanggal', (req, res) => {
  const dt = data.find((p) => p.Tanggal === req.params.tanggal)

  res.json(dt)
})

app.get('/api/rincian/:tanggal/:id', (req, res) => {
  const dt = data
    .find((p) => p.Tanggal === req.params.tanggal)
    .rincian.find((p) => p.id === req.params.id)

  res.json(dt)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode @port ${PORT}`)
)
