const express = require('express');
const cors = require("cors")
const app = express();
require("dotenv").config()
const port = process.env.PORT
const adminRoute = require("./routes/adminroute")
const employeeroute = require("./routes/employeeroute")
const dbConnect = require("./configs/db");





dbConnect()

app.use(express.json());
app.use(cors())
// app.use(express.urlencoded({ extended:true}))
app.use("/public",express.static(__dirname + "/public"))

app.use("/",adminRoute)


app.listen(port,(req,res)=>{
    console.log(`server is running on http://localhost:${port}`);
})