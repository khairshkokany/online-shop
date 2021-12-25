const express = require('express')
const router = express.Router()
const signupTempCopy = require('../models/SignupModels')
const bcrypt = require ('bcrypt')

router.post('/signup' ,async (req,res) => {
    const sPass = await bcrypt.genSalt(10)
    const securePass = await bcrypt.hash(req.body.password,sPass)
    const signedupUser = new signupTempCopy({
        username:req.body.username,
        email:req.body.email,
        password:securePass,
        type:req.body.type
    })
    signedupUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(e=> {
        res.json(e)
    })
})

module.exports = router
