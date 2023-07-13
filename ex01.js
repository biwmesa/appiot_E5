var t = setInterval(function() {
 console.log('test2')
}, 1000)
console.log('test1')


app.get('/', (req, res) => {
  res.send('Hello World! dee')
})

app.listen(port, () => {
  console.log(` on port ${port}`)
  console.log(` it chayaphum ${port}`)
})
