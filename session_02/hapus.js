var fs = require('fs')

fs.unlink('ubahnama.txt', function(err) {
  if (err) throw err
  console.log('File telah dihapus')
})
