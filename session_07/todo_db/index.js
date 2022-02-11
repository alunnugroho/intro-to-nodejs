const express = require('express')
const db = require('./db')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', function(req, res) {
  res.send('Welcome')
})

app.post('/belajar', async (req, res) => {
  try {
    const namaPeserta = req.body.nama
    const materi = req.body.materi
    const query = `INSERT INTO belajar (nama, materi) VALUES ($1, $2) RETURNING *`
    const insertData = await db.query(query, [namaPeserta, materi], (err, result) => {
      if (err) {
        console.log('Insert data error')
        res.status(500)
      }
      
      res.status(result)
    })
    res.send('success')
  } catch (error) {
    console.log(error.message)
  }
})

app.delete('/belajar/:id', async function(req, res) {
  try {
    const query = `DELETE
                   FROM belajar
                   WHERE id = $1`
    await db.query(query, [req.params.id])
    res.status(200).send({
      success: true,
      data: null
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.get('/belajar', async function(req, res) {
  try {
    const query = 'SELECT * FROM belajar'
    const result = await db.query(query)
    res.status(200).send({
      success: true,
      data: result.rows
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.get('/belajar/:id', async function(req, res) {
  try {
    const id = req.params.id
    const query = 'SELECT * FROM belajar WHERE id = $1'
    const result = await db.query(query, [id])
    
    let message = 'Data tidak ada'
    let data = []
    if (result.rows.length) {
      message = 'Data berhasil ditemukan'
      data = result.rows
    }
    res.status(200).send({
      success: true,
      data: data,
      message: message
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.listen(port, function() {
  console.log(`Server berjalan di port ${port}`)
})
