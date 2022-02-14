const express = require('express')
const admin = require('../model/admin')


exports.alladmin = async(req,res) => {
    var Alladmin = await admin.find({}).lean()
    res.send(Alladmin)
    // res.json(admin)
}


exports.Createadmin = async (req,res) => {

    try {
        console.log(req.body);
        const { name, email,password, phone,pic,role } = req.body
        var path = await upload(pic)
        console.log(path);
        if (path.length !== 0) {
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
    }
    catch{
        res.json({msg:"admin creation fail"})
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
