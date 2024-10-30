const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    size:{
        type: [String],
    },
    price:{
        type: [Number],
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema, 'products')
module.exports = Product