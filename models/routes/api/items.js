const express= require('express');
const router= express.Router();

const Item=require('../../../models/Items')


router.get('/',(req,res)=>{
    Item.find()
    .sort({date:-1})
    .then(Items=>res.json(Items))
});

router.post('/',(req,res)=>{
    const newItem= new Item({
        name:req.body.name
    });
    newItem.save().then(item=>res.json(item))
})

module.exports=router