const express = require('express')
const admin = require('../model/admin')


exports.alladmin = async(req,res) => {
    var Alladmin = await admin.find({}).lean()
    res.send(Alladmin)
    // res.json(admin)
}


exports.Addadmin = async (req,res) => {
        console.log(req.body);
        console.log(req.file);
        const { name, email,password, phone,role } = req.body
        const pic = req.file 
        var path = ""
        if(pic.path){
            path = pic.path
            console.log(path)
        }
        console.log(path)
        if (path !== "") {
            var createadmin = await admin.create({
                name: name,
                email: email,
                phone: phone,
                pic: path,
                password: password,
                role: role
            })
            createadmin.save()
            if (createadmin) res.json({ success: "admin added Successfully" })
        }
    // }
    // catch{
    //     res.json({msg:"admin creation fail"})
    // }
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
