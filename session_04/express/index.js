const express = require('express')
const app = express()

app.use('/', function(req, res, next) {
  console.log('Aplikasi sedang berjalan')
  next()
})

app.get('/', function(req, res) {
  const message = 'Welcome'
  res.send(message)
})

app.get('/table/:amount', function(req, res) {
  var party = req.params.amount
  let partyName
  
  if (party == 1) {
    partyName = 'Nama saya Alun'
  } else if (party == 2) {
    partyName = 'Rumah saya di Yogyakarta'
  } else {
    partyName = 'We are searching for your table for ' + party + '!'
  }
  
  res.send(partyName)
})

app.post('/users', function(req, res) {
  const message = 'Post di endpoint users'
  res.send(message)
})

app.put('/users', function(req, res) {
  const message = 'Put di endpoint users'
  res.send(message)
})

app.delete('/users', function(req, res) {
  const message = 'Delete di endpoint users'
  res.send(message)
})

app.listen(3000, function() {
  console.log('Server berjalan di port 3000')
})
