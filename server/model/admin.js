const  mongoose = require("mongoose")

const adminSchema =  mongoose.Schema({
    name: {
        type:String
    },
    pic: {
        type:Array
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    pass:{
        type:String
    },
    role: {
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model("admin",adminSchema)