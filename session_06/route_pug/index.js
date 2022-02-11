const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', 'view')

const peserta = []

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Selamat datang',
    message: 'Belajar membuat data peserta menggunakan array',
    data: peserta
  })
})

app.get('/tambah', function(req, res) {
  res.render('index', {
    title: 'Selamat datang',
    message: 'Belajar membuat data peserta menggunakan array'
  })
})

app.get('/delete/:id', function(req, res) {
  var idPeserta = req.params.id - 1
  
  peserta.splice(idPeserta, 1)
  res.redirect('/')
})

app.post('/tambah', function(req, res) {
  peserta.push({
    nama: req.body.nama
  })
})

app.listen(port, function() {
  console.log(`Server berjalan di port ${port}`)
})
