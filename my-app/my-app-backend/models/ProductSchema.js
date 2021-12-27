
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: String,
    products: [],
  
});


module.exports = mongoose.model('products' , userSchema)