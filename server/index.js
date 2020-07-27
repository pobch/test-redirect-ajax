const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Howdy, friend',
  })
})

app.get('/redirect', (req, res) => {
  res.redirect('/login')
})

app.use('/login', express.static('login'))

app.listen(4000, () => {
  console.log('listening on port 4000')
})
