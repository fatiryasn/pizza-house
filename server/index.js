require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./dbConnect')
const productRoute = require('./routes/productRoute.js')
const commentRoute = require('./routes/commentRoute.js')

const app = express()
const port = process.env.PORT || 8080
dbConnect()

app.use(cors())
app.use(express.json())
app.use('/api', productRoute)
app.use('/api', commentRoute)

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})