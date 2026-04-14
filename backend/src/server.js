require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');
const leaderboardRoutes = require('./routes/leaderboard');
// Naya route import kiya
const userRoutes = require('./routes/userRoutes'); 

// Connect MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
// Naya User Dashboard route register kiya
app.use('/api/users', userRoutes); 

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Quiz App API is running!', db: 'MongoDB Connected' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;