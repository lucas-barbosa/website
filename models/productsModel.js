// products model for digital services.
const mongoose = require('mongoose');

const productsSechma = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }, 
    tools:{
        type:[String],
        required:true
    }
})

const productsModel = mongoose.model("products",productsSechma);
module.exports = productsModel;