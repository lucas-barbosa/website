// products model for digital services.
const mongoose = require('mongoose');



const productsSechma = new mongoose.Schema({
    title:{

    },
    description: {

    },
    image:{

    },
    price:{

    }
})

const productsModel = mongoose.model("products",productsModel);
