const express = require('express')
const { Login ,alladmin, Addadmin,readonedetail} = require('../controller/admincontroller')
const { verifyAccessToken } = require('../middelware/jwt')
const upload = require('../middelware/multer')
const router = express.Router()



router.get("/all",alladmin)
router.get("/user/:id",verifyAccessToken,readonedetail)
router.post('/add-user',upload.single("pic"), Addadmin)
router.post('/login',  Login)

module.exports = router