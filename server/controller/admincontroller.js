const admin = require("../model/admin");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "web-brain",
  api_key: "963419561286416",
  api_secret: "iyqWVOXGLFdngjJAGn_wtNkbNEU",
});

// Create and Save a new Tutorial
exports.createUser = async(req, res) => {
    const { name, email, phone, pass,role } = req.body;

    const emailVerify = await admin.findOne({ email: email }).lean();
  
    if (emailVerify) res.json({ error: "Email already Exists." });
  
    if (!emailVerify) {
      const createUser = await admin.create({
        name: name,
        email: email,
        pic:img,
        phone: phone,
        pass: pass,
        role:role,
      });
  
      createUser.save();
      if (createUser) res.json({ success: "User added Successfully" });
    }
  };
  


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
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