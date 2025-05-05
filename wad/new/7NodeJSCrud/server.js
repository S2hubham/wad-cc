// npm install express mongoose ejs dotenv express-session passport passport-local bcryptjs connect-flash
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const connectDB = require('./config/db');
const passportConfig = require('./config/passportConfig');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

dotenv.config();
connectDB();
passportConfig();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/users/profile');
  }
  res.redirect('/users/login');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
