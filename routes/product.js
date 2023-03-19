const express = require('express')
const router = express.Router()
const Product = require('../models/product')


router.get('/', async(req,res) => {
    const date = new Date();
    today = date.getDate();
    try{
           const products = await Product.find()
        
            
            res.json(products)
           
         
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const product = await Product.findById(req.params.id)
           const IP = req.body.IP;
           const site = req.body.site;
            if(site === 'one'){
                const visits = product.visitors1
                if(!visits.includes(IP)){
                    visits.push(IP)
                   }
            }
            else if(site === 'two'){
                const visits = product.visitors2
                if(!visits.includes(IP)){
                    visits.push(IP)
                   }
            }
            else{
                const visits = product.visitors3
                if(!visits.includes(IP)){
                    visits.push(IP)
                   }
            }


          
           const a1 = await product.save()
           res.json(a1)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const product = new Product({
        name: req.body.name,
        des: req.body.des,
        price: req.body.price,
        
    })

    try{
        const a1 =  await product.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const Product = await Product.findById(req.params.id) 
        Product.sub = req.body.sub
        const a1 = await Product.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router