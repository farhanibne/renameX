const fs = require('fs')
const replacethis = 'b'
const withthis = 'c'


try {
  fs.readdir('data', (error, data) => {
    console.log(data)
    for (let index = 0; index < data.length; index++) {
      const item = data[index]

      const newName = 'data/' + item.replaceAll(replacethis, withthis)

      
        fs.rename('data/' + item, newName, () => {
          console.log('Renamed ' + item + ' to ' + newName)
        })
    
    } 
  })
} catch (error) {
  console.log(error)
}
