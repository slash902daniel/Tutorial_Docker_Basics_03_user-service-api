const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([{
    name: 'Bob2',
    email: 'bob@gmail.com'
  
}]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})