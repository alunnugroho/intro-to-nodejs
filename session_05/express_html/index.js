const express = require('express')
const app = express()

app.use('/', function(req, res, next) {
  console.log('Aplikasi sedang berjalan')
  next()
})

app.get('/', function(req, res) {
  const message = '<h1>Welcome</h1>'
  res.send(message)
})

app.get('/about', function(req, res) {
  res.sendFile('./about.html', {root: __dirname})
})

app.listen(3000, function() {
  console.log('Server berjalan di port 3000')
})
