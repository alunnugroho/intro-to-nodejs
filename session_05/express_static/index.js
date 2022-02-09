const express = require('express')
const app = express()

app.use('/', function(req, res, next) {
  console.log('Aplikasi sedang berjalan')
  next()
})

app.use('/table', function(req, res, next) {
  // var shirt = req.shirt
  // var shoes = req.shoes
  
  var shirt = true
  var shoes = true
  
  if (shirt && shoes) {
    next()
  } else {
    res.send('Gagal')
  }
})

app.get('/table', function(req, res) {
  res.send('Masuk')
})

app.get('/', function(req, res) {
  const message = '<h1>Welcome</h1>'
  res.send(message)
})

app.get('/about', function(req, res) {
  res.sendFile('./about.html', {root: __dirname})
})

app.get('/menu/:isiMenu/kelengkapan/:isiKelengkapan', function(req, res) {
  let message = 'Silakan pulang'
  const isiMenu = req.params.isiMenu
  const isiKelengkapan = req.params.isiKelengkapan
  
  if (isiMenu == 1) {
    if (isiKelengkapan == 'y') {
      message = 'Silakan duduk'
    }
  } else if (isiMenu == 2) {
    if (isiKelengkapan == 'burger') {
      message = 'Makanan Anda diantar'
    }
  } else if (isiMenu == 3) {
    if (isiKelengkapan == '24000') {
      message = 'Berhasil terbayar. Terima kasih.'
    }
  }
  
  res.send(message)
})

app.listen(3000, function() {
  console.log('Server berjalan di port 3000')
})
