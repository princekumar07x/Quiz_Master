const { questions, categories } = require('../data/questions');

const getCategories = (req, res) => {
  res.json({ success: true, data: categories });
};

const getQuestions = (req, res) => {
  const { category, difficulty, limit = 10 } = req.query;

  if (!category || !questions[category]) {
    return res.status(400).json({
      success: false,
      message: 'Invalid or missing category'
    });
  }

  let filteredQuestions = [...questions[category]];

  if (difficulty && difficulty !== 'all') {
    filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
  }

  // Shuffle questions
  filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);

  // Limit
  filteredQuestions = filteredQuestions.slice(0, parseInt(limit));

  // Remove correctAnswer from response (send separately for validation)
  const questionsForClient = filteredQuestions.map(({ correctAnswer, ...rest }) => rest);

  // Store answers server-side per session (simplified: return encrypted or separate)
  // For simplicity, we're keeping answers accessible via validate endpoint
  res.json({
    success: true,
    data: {
      questions: questionsForClient,
      total: questionsForClient.length,
      category,
      difficulty: difficulty || 'all'
    }
  });
};

const validateAnswer = (req, res) => {
  const { questionId, answer, category } = req.body;

  if (!questionId || !answer || !category) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const categoryQuestions = questions[category];
  if (!categoryQuestions) {
    return res.status(400).json({ success: false, message: 'Invalid category' });
  }

  const question = categoryQuestions.find(q => q.id === questionId);
  if (!question) {
    return res.status(404).json({ success: false, message: 'Question not found' });
  }

  const isCorrect = question.correctAnswer === answer;

  res.json({
    success: true,
    data: {
      isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: isCorrect ? 'Correct!' : `Wrong! The correct answer is: ${question.correctAnswer}`
    }
  });
};

module.exports = { getCategories, getQuestions, validateAnswer };
