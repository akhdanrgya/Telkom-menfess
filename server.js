const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5500

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1> Welcome To Telkom Menfess </h1>')
})

app.listen(port, () => {
    console.log(`Listening server on port http://localhost:${port}`)
})
