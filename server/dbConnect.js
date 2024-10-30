const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = () => {
    const uri = process.env.MONGODB_URI
    mongoose.connect(uri)

    mongoose.connection.on('connected', () => {
        console.log('DB Connected')
    })
    mongoose.connection.on('error', (err) => {
        console.log('DB Error', err)
    })
}


module.exports = dbConnect