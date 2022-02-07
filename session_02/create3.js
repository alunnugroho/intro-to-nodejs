var fs = require('fs')

fs.open('buatbarulagi.txt', 'w+', function(err, file) {
  if (err) throw err
  
  let content = 'Hello saya student di Hactiv8 online program'
  fs.writeFile(file, content, (err) => {
    if (err) throw err
    console.log('Sukses yang ketiga')
    
    fs.readFile(file, (err, data) => {
      if (err) throw errconsole.log(data.toString('utf8'))
    })
  })
})
