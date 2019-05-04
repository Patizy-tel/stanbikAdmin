const router = require('express').Router();
const deposit =  require('../../models/Deposits')

router.post('/',async (req,res)=>{
    new deposit(req.body).save().then(resp=>res.json(resp)).catch(err=>res.json({err:err.message}))
}) ;

router.get('/all',(req , res)=>{
    deposit.find()
           .sort({date:-1})
           .then(resp=>{
               res.json(resp)
           })
           .catch(err=>res.json({err:err.message}))
})


module.exports =  router;