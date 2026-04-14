const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Check karein aapka User model isi path par hai

// Saare users ki list mangwane ki API
router.get('/all', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Password chhod kar sab bhejenge
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;