const express = require('express')
const router = express.Router()
const SignupTempCopy = require('../models/SignupModels')
// const bcrypt = require ('bcrypt')

router.post('/signup' ,async (req,res) => {
    // const sPass = await bcrypt.genSalt(10)
    // const securePass = await bcrypt.hash(req.body.password,sPass)
  
    const {username , email,password,type} = req.body;
    const userExist = await SignupTempCopy.findOne({email});

    if (userExist) {
        res.status(400)
        throw new Error ("User Already Exists");
    }

    const signedupUser = new SignupTempCopy({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        type:req.body.type
    })

    if(signedupUser) {
        signedupUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(e=> {
            res.json(e)
        })
    }
    
})

router.post('/login' ,async (req,res) => {
    // const sPass = await bcrypt.genSalt(10)
    // const securePass = await bcrypt.hash(req.body.password,sPass)
  
    const {email,password} = req.body;
    const userExist = await SignupTempCopy.findOne({email});
    const passwordExist = await SignupTempCopy.findOne({password});
    const loginUser = new SignupTempCopy({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        type:req.body.type
    })
    
    if (userExist && passwordExist) {
        res.json(loginUser)
    }

    else{
        res.status(400)
        throw new Error ("User Not Found");
    }
   
    
    
})



module.exports = router
