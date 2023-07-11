var t = setInterval(function() {
  console.log('test2')
}, 1000)
console.log('test1')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` on port ${port}`)
  console.log(` it chayaphum ${port}`)
})