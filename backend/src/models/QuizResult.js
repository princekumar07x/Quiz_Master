const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  question: String,
  selected: String,
  correct: String,
  isCorrect: Boolean
}, { _id: false });

const quizResultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  playerName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['general', 'science', 'technology', 'sports']
  },
  categoryName: String,
  difficulty: {
    type: String,
    default: 'all'
  },
  score: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  timeTaken: {
    type: Number,
    default: 0
  },
  // Yaha change kiya hai: required ko false kar diya taaki validation error na aaye
  grade: {
    type: String,
    enum: ['S', 'A', 'B', 'C', 'D'],
    required: false 
  },
  answers: [answerSchema],
  playedAt: {
    type: Date,
    default: Date.now
  }
});

// Auto-calculate grade before saving
// Ye function ensure karega ki grade hamesha save ho
quizResultSchema.pre('save', function(next) {
  const pct = this.percentage;
  if (pct >= 90) this.grade = 'S';
  else if (pct >= 75) this.grade = 'A';
  else if (pct >= 60) this.grade = 'B';
  else if (pct >= 40) this.grade = 'C';
  else this.grade = 'D';
  next();
});

module.exports = mongoose.model('QuizResult', quizResultSchema);