const express = require('express');
const router = express.Router();
const { getLeaderboard, submitScore, getMyHistory } = require('../controllers/leaderboardController');
const { protect } = require('../middleware/auth');

router.get('/', getLeaderboard);
router.post('/submit', protect, submitScore);
router.get('/my-history', protect, getMyHistory);

module.exports = router;
