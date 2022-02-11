const express = require('express')
const db = require('./db')
const app = express()
const port = 3000

global.db = db

const pesertaRoutes = require('./routes/peserta.route')

app.use(express.json())
app.use('/peserta', pesertaRoutes)

app.listen(port, function() {
  console.log(`Server berjalan di port ${port}`)
})
