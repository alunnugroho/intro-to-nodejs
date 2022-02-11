const express = require('express')
const bodyParser = require('body-parser')
const url = require('url')
const querystring = require('querystring')
// const Article = require('./models').Article

let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/welcome', async function(req, res) {
  let page = req.query.page
  let limit = req.query.limit
  let nama = req.query.nama
  let hasil = ''
  console.log('nama = ' + nama)
  console.log('page = ' + page)
  console.log('limit = ' + limit)
  
  res.send({
    page, limit
  })
})

let server = app.listen(3000, function() {
  console.log('Server berjalan di server 3000')
})
