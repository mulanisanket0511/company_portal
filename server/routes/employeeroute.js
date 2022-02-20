const express = require('express');

const router = express.Router();
const {allemployee,viewemployee,addemployee} = require("../controller/employeecontroller");
const { verifyAccessToken } = require('../middelware/jwt');
const upload = require("../middelware/multer")


router.get("/all",verifyAccessToken, allemployee);
router.get("/viewemployee/:id",verifyAccessToken, viewemployee);
router.post("/add-employee",verifyAccessToken,upload.single("employeepic"), addemployee);

module.exports = router;
