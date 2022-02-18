const  mongoose = require("mongoose")

const employeeSchema =  mongoose.Schema({
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

module.exports = mongoose.model("employee",employeeSchema)