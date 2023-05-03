const router = require('express').Router();
const userControler = require('../controllers/user.js');

//REGISTER 
router.route("/register").post(userControler.register);
//LOGIN
router.route("/login").post(userControler.login);



module.exports = router;

