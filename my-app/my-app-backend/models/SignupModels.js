const mongoose = require('mongoose')

const signupTemp = new mongoose.Schema({
    username:{
        type:String,
    }, 
    email:{
        type:String,
    }, 
    password:{
        type:String,
    },
    products:{
        type:Array,

    },
    items:{
         type:Array,
    },
  
})



module.exports = mongoose.model('signinTable' , signupTemp)