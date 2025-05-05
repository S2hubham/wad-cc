const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getProfile,
  showRegister,
  showLogin,
  logout,
} = require('../controllers/userController');

router.get('/register', showRegister);
router.post('/register', register);

router.get('/login', showLogin);
router.post('/login', login);

router.get('/profile', getProfile);
router.get('/logout', logout);

module.exports = router;
