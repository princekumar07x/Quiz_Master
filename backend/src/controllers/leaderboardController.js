const QuizResult = require('../models/QuizResult');
const User = require('../models/User');

// GET /api/leaderboard?category=all
const getLeaderboard = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = {};
    if (category && category !== 'all') filter.category = category;

    const data = await QuizResult.find(filter)
      .sort({ score: -1, timeTaken: 1 })
      .limit(20)
      .select('playerName score totalQuestions percentage category difficulty timeTaken grade playedAt');

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// POST /api/leaderboard/submit  (protected)
const submitScore = async (req, res) => {
  try {
    const { score, totalQuestions, category, categoryName, difficulty, timeTaken, answers } = req.body;

    if (score === undefined || !totalQuestions || !category) {
      return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    const percentage = Math.round((score / totalQuestions) * 100);

    const result = await QuizResult.create({
      user: req.user._id,
      playerName: req.user.name,
      category,
      categoryName: categoryName || category,
      difficulty: difficulty || 'all',
      score,
      totalQuestions,
      percentage,
      timeTaken: timeTaken || 0,
      answers: answers || []
    });

    // Update user stats
    const user = await User.findById(req.user._id);
    user.totalQuizzes += 1;
    user.totalScore += score;
    if (score > user.bestScore) user.bestScore = score;
    await user.save();

    res.json({
      success: true,
      message: 'Score saved to MongoDB!',
      data: result
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// GET /api/leaderboard/my-history  (protected)
const getMyHistory = async (req, res) => {
  try {
    const results = await QuizResult.find({ user: req.user._id })
      .sort({ playedAt: -1 })
      .limit(20);

    res.json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

module.exports = { getLeaderboard, submitScore, getMyHistory };
