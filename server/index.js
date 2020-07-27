const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Howdy, friend',
  })
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
