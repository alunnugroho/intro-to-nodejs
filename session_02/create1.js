var fs = require('fs')

fs.appendFile('buatbaru.txt', 'Belajar di Hactiv8 Indonesia!', function(err) {
  if (err) throw err
  console.log('Sukses dibuat!')
})
