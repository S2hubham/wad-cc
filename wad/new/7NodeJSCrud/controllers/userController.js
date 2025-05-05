const User = require('../models/User');
const passport = require('passport');

// Show registration form
exports.showRegister = (req, res) => res.render('register');

// Show login form
exports.showLogin = (req, res) => res.render('login');

// Register user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.send('User already exists');

  const user = new User({ name, email, password });
  await user.save();
  res.redirect('/users/login');
};

// Login user (uses passport local)
exports.login = passport.authenticate('local', {
  successRedirect: '/users/profile',
  failureRedirect: '/users/login',
});

// Logout user
exports.logout = (req, res) => {
  req.logout(() => {
    res.redirect('/users/login');
  });
};

// Show profile page
exports.getProfile = async (req, res) => {
  if (!req.isAuthenticated()) return res.redirect('/users/login');
  const user = await User.findById(req.user.id).select('-password');
  res.render('index', { user });
};
