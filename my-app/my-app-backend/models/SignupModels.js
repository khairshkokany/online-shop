const mongoose = require('mongoose')

const signupTemp = new mongoose.Schema({
    username:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('signinTable' , signupTemp)