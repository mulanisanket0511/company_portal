const express = require('express')
const { Login ,alladmin, Addadmin} = require('../controller/admincontroller')
const upload = require('../middelware/multer')
const router = express.Router()
const cloudinary = require("cloudinary").v2;


router.get("/all",alladmin)
router.post('/add-user',upload.single("pic"), Addadmin)
router.post('/login', Login)

module.exports = router