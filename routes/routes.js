const express = require('express')
const {home , createUser, getusers, deleteuser , updateuser} = require('../controllers/control.js')

const router = express.Router()
router.get('/' , home)
router.post('/createuser' , createUser)
router.get('/getusers' , getusers)
router.put('/edituser/:id' , updateuser)
router.delete('/deleteuser/:id' , deleteuser)

module.exports = router;

