const mongoose = require ("mongoose")

const registerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
    },
    lastname:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    country:{
        type:String,
        trim:true
    },
    state:{
        type:String,
        trim:true
    },
    town:{
        type:String,
        trim:true
    },
    zipcode:{
        type:String,
        trim:true
    },
    dob:{
        type:Date,
        trim:true
    },
    phone1:{
        type:String,
        trim:true,
    },
    phone2:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true
    },

})
// //schema can be any name
module.exports = mongoose.model("Register",registerSchema)









