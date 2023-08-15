const mongo=require('mongoose');
const userschema=new mongo.Schema({
    user:{
       type:String,
       require
    },
    productname:{
        type:String,
    },
    productimg:{
        type:String,
    },
    price:{
        type:Number
    }
})
module.exports=mongo.model('product',userschema);