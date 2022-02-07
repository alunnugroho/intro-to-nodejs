var fs = require('fs')

fs.rename('buatbaru.txt', 'ubahnama.txt', function(err) {
  if (err) throw err
  console.log('Nama file telah diubah')
})
