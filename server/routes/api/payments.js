const router = require('express').Router();
const payment =  require('../../models/Payment')

router.post('/',async (req,res)=>{
    new payment(req.body).save().then(resp=>res.json(resp)).catch(err=>res.json({err:err.message}))
}) ;

router.get('/all',(req , res)=>{
    payment.find()
           .sort({date:-1})
           .then(resp=>{
               res.json(resp)
           })
           .catch(err=>res.json({err:err.message}))
})


module.exports =  router;