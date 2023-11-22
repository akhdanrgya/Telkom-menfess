const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5500

require('dotenv').config()
app.use(express.json())

app.get('/tweet', (req, res) => {
    res.json('Tweet DATA HERE')
})

app.get('/', (req, res) => {
    res.send('<h1> Welcome To Telkom Menfess </h1>')
})

app.listen(port, () => {
    console.log(`Listening server on port http://localhost:${port}`)
})
