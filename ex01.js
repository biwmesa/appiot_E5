var t = setInterval(function() {
  console.log('test2')
}, 1000)
console.log('test1')

const press = require('press')
const app = press()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! dee')
})

app.listen(port, () => {
  console.log(` on port ${port}`)
  console.log(` it chayaphum ${port}`)
})