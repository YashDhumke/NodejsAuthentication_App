
// serverside rendering and routing for the application 

const express = require("express");
const authcontrollers = require('../controllers/authcontrollers');

const router = express.Router();


router.post('/signup', authcontrollers.signup_post)

router.post('/login', authcontrollers.login_post)

router.get('/signup', authcontrollers.signup_get)

router.get('/login', authcontrollers.login_get)

router.get('/logout', authcontrollers.logout_get)

module.exports = router;