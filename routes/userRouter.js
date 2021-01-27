const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Article = require('../models/articles');

router.post('/login', async (req, res) => {
  try {
    var userData = await User.findOne({ email: req.body.email });
    if (!userData) {
      return res.status(400).json('This email id doesnt exist');
    }

    var validPass = await bcrypt.compare(req.body.password, userData.password);
    if (!validPass) {
      return res.status(400).json('Password not valid');
    }
    var userToken = await jwt.sign({ email: userData.email }, 'mySecretKey');
    res.header('auth', userToken).send(userToken);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
