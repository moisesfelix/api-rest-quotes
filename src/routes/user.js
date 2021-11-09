const express = require('express')
const router = express.Router()
const checkAuth = require('../middlewares/check-auth')

const UserController = require('../controllers/user')

//router.get('/', UserController.index)

router.get('/', UserController.getAll)

router.post('/signup', UserController.signup)

router.post('/login', UserController.login)

router.delete('/:id', checkAuth, UserController.delete)

router.patch('/:id', checkAuth, UserController.update)

module.exports = router