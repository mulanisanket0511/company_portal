const  mongoose = require("mongoose")

const adminSchema =  mongoose.Schema({
    name: {
        type:String
    },
    pic: {
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    },
    role: {
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model("admin",adminSchema)