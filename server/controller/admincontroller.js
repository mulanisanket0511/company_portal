const express = require('express')
const {uploadsingle} = require('../middelware/cloudinary')
const admin = require('../model/admin')
const fs = require('fs')


exports.alladmin = async(req,res) => {
    var Alladmin = await admin.find({}).lean()
    res.send(Alladmin)
    // res.json(admin)
}


exports.Addadmin = async (req,res) => {
  try{
        console.log(req.body);
        console.log(req.file);
        const { name, email,password, phone,role } = req.body
        const pic = req.file
        var path = await uploadsingle(pic.path);
        fs.unlink(pic.path, () => {
            console.log({
                status: "200",
                responseType: "string",
                response: "success"
            })
        })
        console.log(path)
        if (path.length !== 0) {
            var createadmin = await admin.create({
                name: name,
                email: email,
                phone: phone,
                pic: path,
                password: password,
                role: role
            })}
            console.log(createadmin);
            createadmin.save()
            if (createadmin) res.json({ success: "admin added Successfully" })
        }
          catch(err){
        //   res.json({msg:"user added failed"})
          console.log(err);
           }
}   


exports.Login = async (req, res) => {
    const { email, password } = req.body
    const loginadmin = await admin.findOne({ email: email, password: password })
    if (loginadmin) {
        res.send(loginadmin)
    }
    else {
        res.status(400).send({ msg: 'Error please do it again' })
    }
}
  



exports.readonedetail = async (req, res) => {
    var id = req.params.id
    const readadmin = await admin.findOne({ _id: id }).lean()
    res.send(readadmin)
}
