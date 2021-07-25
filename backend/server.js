import express from 'express'
import data from './data/data.js'

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

app.listen(5000, console.log('Server running @port 5000'))
