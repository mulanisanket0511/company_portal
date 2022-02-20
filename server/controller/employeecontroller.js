const employee = require("../model/employee");
const fs = require('fs');
const express = require('express')
const { uploadsingle } = require("../middelware/cloudinary");

// Create and Save a new Tutorial
exports.addemployee = async(req, res) => {
  try{
    console.log(req.body);
    console.log(req.file);
    const { name, email, phone, password } = req.body;
    const pic = req.file
        var path = await uploadsingle(pic.path,pic.fieldname);
        fs.unlink(pic.path, () => {
            console.log({
                status: "200",
                responseType: "string",
                response: "success"
            })
        })
        console.log(path)
        if (path.length !== 0) {
            var createemployee = await employee.create({
                name: name,
                email: email,
                phone: phone,
                pic: path,
                password: password,
                
            })}
            console.log(createemployee);
            createemployee.save()
            if (createemployee) res.json({ success: "employee added Successfully" })
  }
  catch (err){
          console.log(err)
  }
}
   

// Find a single Tutorial with an id
exports.allemployee = async (req, res) => {
  var allemployee = await employee.find({}).lean()
  res.send(allemployee)
};

// Update a Tutorial by the id in the request
exports.viewemployee = async(req, res) => {
  var id = req.params.id;
  // console.log(id);
  const viewemployee = await employee.findOne({ _id: id }).lean();
  if (viewemployee) {
    console.log(viewemployee);
    res.send(viewemployee);
  } else {
    console.log("fail");
  }
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};