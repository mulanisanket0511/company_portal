const express = require('express')
const { Login ,alladmin, Createadmin, Adminpic} = require('../controller/employeecontroller')
const router = express.Router()


router.get("/all",alladmin)
router.post('/add-user', Createadmin)
router.post("/upload",upload.single("pic"), Adminpic);
router.post('/login', Login)

module.exports = router