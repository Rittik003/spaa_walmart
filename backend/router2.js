const mongo=require('mongoose');
const express=require('express');
const router=express.Router();
const productinfo=require('./schema2');
const User=require('./schema');

router.post('/insertproductinfo',async (req,res)=>{
    const{productname,productimg,price}=req.body;
    if(!productname || !productimg || !price)
    return res.json({err:"fill the entire data"});
    const user=req.header('user');
    const find= await User.findOne({email:user});
    if(find)
    {
       const u1= new productinfo({user:user,productimg:productimg,productname:productname,price:price});
       const done=await u1.save(); 
       if(done)
       {
          return res.status(200).json({mess:"Success",u1});
       }
       else
       return res.status(400).json({err:"Internal error"});
    }
    else
    return res.status(400).json({err:"Not available"});

})
router.post('/productinfo',async (req,res)=>{
    const user1=req.header('user');
    const v= await productinfo.find({user:user1})
    if(v)
    {
        return res.status(200).json(v);
    }
    else
    return res.status(200).json({mess:"not found"})
})
router.delete('/deleteproduct',async (req,res)=>{
    const {productname}=req.body;
    const find= await productinfo.findOne({productname:productname});
    if(find)
    {
        const done= await productinfo.deleteOne();
    if(done)
    return res.json({mess:"success"});
    else
    return res.json({err:"sorry error"})
    }
    else
    return res.json({err:"not found"})

})
module.exports= router;