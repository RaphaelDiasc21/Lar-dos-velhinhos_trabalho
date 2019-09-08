const router = require('express').Router();
const LoginController = require('../controllers/login');
router.get('/login',LoginController.index);

router.get('/logout',LoginController.logout);

module.exports = router;