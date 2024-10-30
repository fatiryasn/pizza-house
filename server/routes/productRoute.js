const router = require('express').Router()
const Product = require('../models/productModel')

router.get('/product', async (req, res) => {
    try{
        const products = await Product.find()
        if (products.length <= 0){
            return res.status(400).json({message: "Tidak ada produk tersedia"})
        }
        res.status(200).json({
            data: products,
            totalData: products.length
        })
    }catch (error){
        res.status(500).json({message: error.message})
    }
})


module.exports = router