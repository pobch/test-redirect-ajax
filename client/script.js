import axios from 'axios'

axios.get('http://localhost:4000/redirect').then((res) => {
  console.log('Resp', res)
  console.log('DATA', res.data)
})
