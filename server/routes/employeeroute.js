const express = require('express');
const router = express.Router();
const {allemployee,readoneemployee,addemployee} = require("../controller/employeecontroller")
const upload = require("../middelware/multer")


router.get("/all", allemployee);
router.post("/user/:id", readoneemployee);
router.post("/add-employee",upload.single("employeepic"), addemployee);

module.exports = router;
