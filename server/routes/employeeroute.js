const express = require('express')
const { Login ,alladmin, Createadmin } = require('../controller/employeecontroller')
const router = express.Router()


router.get("/all",alladmin)
router.post('/add-user', Createadmin)

router.post('/login', Login)

module.exports = router