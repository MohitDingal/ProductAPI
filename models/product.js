const mongoose = require('mongoose');

const visitors = new mongoose.Schema({IP:String});
const product = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: false
    },
    visitors1:[{
        type: String,

    },
    ],
    visitors2:[{
        type:String,
    }],
    visitors3:[{
        type:String,
    }]
    

})

module.exports = mongoose.model('product',product)