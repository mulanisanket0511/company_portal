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
   


// Retrieve all Tutorials from the database.
exports.readoneemployee = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.allemployee = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};