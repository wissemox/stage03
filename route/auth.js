//Require router from express 
const router = require('express').Router()
//Require user schema
const User = require('../models/User'); 
//Register user
// router.post('/register',async(req,res)=>{
//     const{name , lastName , email , password}=req.body; 
//     try{
//         if(!name || !lastName || !email || !password) {
//             return res.status(400).json({msg:'plese enter all field'})
//         }
// //Check for exisiting user 
//         let user = await User.find({email})
//         if(!user){
//             return res.status(400).json({msg:'User alerdy exists'})
//         }
//         //Creqte new User 
//         user=new User({name , lastName , email , password})
//         //save the user 
//         await user.save()
//         res.status(200).json({msg:"user register with success",user})
//     }catch(error){
//         res.status(500).json({msg:'Server Error'})
//     }
// });
router.post('/addContect',async(req,res)=>{
    const{name , lastName , email , password , descraption}=req.body; 
    try{
    if(!name || !lastName ||!email ||!password || !descraption){
        res.json({msg:'filed enter uncorrect'})
    }
    let user = new User({name , lastName , email , password,descraption})
    await user.save()
    res.json({msg:"user Add",user})
    }catch(error){
        res.json({msg:"errore",error})
    }
})
router.get('/findalluser',async(req,res)=>{
    try{
        const alluser = await User.find()
        res.json({msg:"data fatched",alluser})
    }catch(error){
        res.json({msg:"eroore",error})
    }
    

})
router.delete('/Deleted/:_id',async(req,res)=>{
    const {_id} = req.params
    try{
        const Deleted02 = await User.findOneAndDelete({_id})
        res.json({msg:"Deleted",Deleted02})
    }catch(error){
        res.json({msg:"eroore",error})
    }
    

})
router.put('/UserUpdated/:_id',async(req,res)=>{
    const {_id}=req.params
    try{
        const UserUpdated = await User.findOneAndUpdate({_id}, { $set: req.body })
        res.json({msg:"Data upadted",UserUpdated})
    }catch(err){
        console.log(err)
    }
})
module.exports=router;
