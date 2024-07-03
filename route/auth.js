let express = require('express')
const { registerController, loginController, getCurrentUserController } = require('../controllers/userController')
let route = express.Router()
//Register || POST
route.post('/register', registerController)

module.exports = route