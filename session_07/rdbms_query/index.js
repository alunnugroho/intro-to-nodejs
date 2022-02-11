const express = require('express')
const db = require('./db')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', function(req, res) {
  res.send('Welcome')
})

/* Materi endpoints */
app.post('/materi', async (req, res) => {
  try {
    const namaMateri = req.body.nama_materi
    const query = `INSERT INTO materi (nama_materi) VALUES ($1) RETURNING *`
    const insertData = await db.query(query, [namaMateri], (err, result) => {
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

app.delete('/materi/:id', async function(req, res) {
  try {
    const id = req.params.id
    const querySelect = `SELECT * FROM peserta WHERE id_materi = $1`
    const checkPeserta = await db.query(querySelect, [id])
    
    if (checkPeserta.rows.length <= 0) {
      const query = `DELETE
                   FROM materi
                   WHERE id_materi = $1`
      await db.query(query, [id])
      res.status(200).send({
        success: true,
        data: null
      })
    } else {
      res.status(500).send({
        success: true,
        message: 'Data tidak dapat dihapus'
      })
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
})

/* Peserta endpoints */
app.post('/peserta', async (req, res) => {
  try {
    const nama = req.body.nama
    const kelas = req.body.kelas
    const idMateri = req.body.id_materi
    const query = `INSERT INTO peserta (nama, kelas, id_materi) VALUES ($1, $2, $3) RETURNING *`
    const insertData = await db.query(query, [nama, kelas, idMateri], (err, result) => {
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

app.delete('/peserta/:id', async function(req, res) {
  try {
    const query = `DELETE
                   FROM peserta
                   WHERE id_peserta = $1`
    await db.query(query, [req.params.id])
    res.status(200).send({
      success: true,
      data: null
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

/* Nilai endpoints */
app.post('/nilai', async (req, res) => {
  try {
    const idPeserta = req.body.id_peserta
    const idMateri = req.body.id_materi
    const nilai = req.body.nilai
    const hurufMutu = req.body.huruf_mutu
    const query = `INSERT INTO nilai (id_peserta, id_materi, nilai, huruf_mutu) VALUES ($1, $2, $3, $4) RETURNING *`
    const insertData = await db.query(query, [idPeserta, idMateri, nilai, hurufMutu], (err, result) => {
      if (err) {
        console.log('Insert data error' + err)
        res.status(500)
      }
      
      res.status(result)
    })
    res.send('success')
  } catch (error) {
    console.log(error.message)
  }
})

app.delete('/nilai/:id', async function(req, res) {
  try {
    const query = `DELETE
                   FROM nilai
                   WHERE id_nilai = $1`
    await db.query(query, [req.params.id])
    res.status(200).send({
      success: true,
      data: null
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.listen(port, function() {
  console.log(`Server berjalan di port ${port}`)
})
