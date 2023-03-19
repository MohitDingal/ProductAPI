const express = require('express')

const mongoose = require("mongoose")


const URL = "mongodb+srv://mohitdingal:ATS3sTnoRJfuvzjC@cluster0.r1mzhzh.mongodb.net/?retryWrites=true&w=majority"
const app = express()
const connectParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(URL,connectParams).then(() =>{
    console.log("Connected");
})
.catch((e)=>{
    console.log(e);
})

app.use(express.json())

const productRouter = require('./routes/product.js')

app.use('/product',productRouter)


app.listen(9000,()=>{
    console.log('Server Started')
})