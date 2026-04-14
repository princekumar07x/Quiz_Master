const questions = {
  general: [
    {
      id: "g1",
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
      difficulty: "easy"
    },
    {
      id: "g2",
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
      difficulty: "easy"
    },
    {
      id: "g3",
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare",
      difficulty: "easy"
    },
    {
      id: "g4",
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
      difficulty: "easy"
    },
    {
      id: "g5",
      question: "How many bones are there in the human body?",
      options: ["196", "206", "216", "226"],
      correctAnswer: "206",
      difficulty: "medium"
    },
    {
      id: "g6",
      question: "What is the chemical symbol for Gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: "Au",
      difficulty: "medium"
    },
    {
      id: "g7",
      question: "In which year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      correctAnswer: "1945",
      difficulty: "medium"
    },
    {
      id: "g8",
      question: "What is the smallest country in the world?",
      options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
      correctAnswer: "Vatican City",
      difficulty: "medium"
    },
    {
      id: "g9",
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
      correctAnswer: "Hydrogen",
      difficulty: "easy"
    },
    {
      id: "g10",
      question: "What is the speed of light in vacuum (approximately)?",
      options: ["200,000 km/s", "300,000 km/s", "400,000 km/s", "500,000 km/s"],
      correctAnswer: "300,000 km/s",
      difficulty: "hard"
    }
  ],
  science: [
    {
      id: "s1",
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
      correctAnswer: "Mitochondria",
      difficulty: "easy"
    },
    {
      id: "s2",
      question: "What gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
      difficulty: "easy"
    },
    {
      id: "s3",
      question: "What is Newton's Second Law of Motion?",
      options: ["F = ma", "E = mc²", "V = IR", "PV = nRT"],
      correctAnswer: "F = ma",
      difficulty: "medium"
    },
    {
      id: "s4",
      question: "What is the pH of pure water?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7",
      difficulty: "easy"
    },
    {
      id: "s5",
      question: "Which planet has the most moons?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correctAnswer: "Saturn",
      difficulty: "medium"
    },
    {
      id: "s6",
      question: "What is the most abundant gas in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: "Nitrogen",
      difficulty: "medium"
    },
    {
      id: "s7",
      question: "What is the half-life of Carbon-14?",
      options: ["1,000 years", "5,730 years", "10,000 years", "50,000 years"],
      correctAnswer: "5,730 years",
      difficulty: "hard"
    },
    {
      id: "s8",
      question: "Which scientist developed the theory of general relativity?",
      options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
      correctAnswer: "Albert Einstein",
      difficulty: "easy"
    },
    {
      id: "s9",
      question: "What is the chemical formula of water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correctAnswer: "H2O",
      difficulty: "easy"
    },
    {
      id: "s10",
      question: "What is the unit of electrical resistance?",
      options: ["Volt", "Ampere", "Watt", "Ohm"],
      correctAnswer: "Ohm",
      difficulty: "medium"
    }
  ],
  technology: [
    {
      id: "t1",
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
      ],
      correctAnswer: "Hyper Text Markup Language",
      difficulty: "easy"
    },
    {
      id: "t2",
      question: "What does CPU stand for?",
      options: [
        "Central Process Unit",
        "Central Processing Unit",
        "Computer Processing Unit",
        "Core Processing Unit"
      ],
      correctAnswer: "Central Processing Unit",
      difficulty: "easy"
    },
    {
      id: "t3",
      question: "Which programming language was created by Guido van Rossum?",
      options: ["Java", "C++", "Python", "Ruby"],
      correctAnswer: "Python",
      difficulty: "easy"
    },
    {
      id: "t4",
      question: "What does HTTP stand for?",
      options: [
        "HyperText Transfer Protocol",
        "High Transfer Text Protocol",
        "Hyper Text Transit Protocol",
        "Home Text Transfer Protocol"
      ],
      correctAnswer: "HyperText Transfer Protocol",
      difficulty: "easy"
    },
    {
      id: "t5",
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
      correctAnswer: "O(log n)",
      difficulty: "hard"
    },
    {
      id: "t6",
      question: "Which company developed the React JavaScript library?",
      options: ["Google", "Microsoft", "Facebook (Meta)", "Twitter"],
      correctAnswer: "Facebook (Meta)",
      difficulty: "medium"
    },
    {
      id: "t7",
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Standard Query Language",
        "Simple Query Language",
        "Sequential Query Language"
      ],
      correctAnswer: "Structured Query Language",
      difficulty: "easy"
    },
    {
      id: "t8",
      question: "What is the default port for HTTPS?",
      options: ["80", "443", "8080", "3000"],
      correctAnswer: "443",
      difficulty: "medium"
    },
    {
      id: "t9",
      question: "Which data structure operates on LIFO principle?",
      options: ["Queue", "Array", "Stack", "Linked List"],
      correctAnswer: "Stack",
      difficulty: "medium"
    },
    {
      id: "t10",
      question: "What is 'Git' primarily used for?",
      options: [
        "Database management",
        "Version control",
        "Server deployment",
        "UI design"
      ],
      correctAnswer: "Version control",
      difficulty: "easy"
    }
  ],
  sports: [
    {
      id: "sp1",
      question: "How many players are on a football (soccer) team on the field?",
      options: ["9", "10", "11", "12"],
      correctAnswer: "11",
      difficulty: "easy"
    },
    {
      id: "sp2",
      question: "Which country has won the most FIFA World Cup titles?",
      options: ["Germany", "Argentina", "Brazil", "Italy"],
      correctAnswer: "Brazil",
      difficulty: "easy"
    },
    {
      id: "sp3",
      question: "In which sport is the term 'Grand Slam' used?",
      options: ["Cricket", "Tennis", "Golf", "Both Tennis and Golf"],
      correctAnswer: "Both Tennis and Golf",
      difficulty: "medium"
    },
    {
      id: "sp4",
      question: "How many rings are on the Olympic flag?",
      options: ["4", "5", "6", "7"],
      correctAnswer: "5",
      difficulty: "easy"
    },
    {
      id: "sp5",
      question: "What is the diameter of a basketball hoop in inches?",
      options: ["16 inches", "18 inches", "20 inches", "22 inches"],
      correctAnswer: "18 inches",
      difficulty: "hard"
    },
    {
      id: "sp6",
      question: "Which country hosted the 2020 Summer Olympics?",
      options: ["China", "South Korea", "Japan", "Australia"],
      correctAnswer: "Japan",
      difficulty: "easy"
    },
    {
      id: "sp7",
      question: "How long is a standard marathon race?",
      options: ["40 km", "42.195 km", "44 km", "45 km"],
      correctAnswer: "42.195 km",
      difficulty: "medium"
    },
    {
      id: "sp8",
      question: "In cricket, how many runs is a 'duck'?",
      options: ["0", "1", "2", "4"],
      correctAnswer: "0",
      difficulty: "easy"
    },
    {
      id: "sp9",
      question: "Which city hosted the first modern Olympic Games in 1896?",
      options: ["Paris", "London", "Athens", "Rome"],
      correctAnswer: "Athens",
      difficulty: "medium"
    },
    {
      id: "sp10",
      question: "How many holes are in a standard golf course?",
      options: ["12", "15", "18", "21"],
      correctAnswer: "18",
      difficulty: "easy"
    }
  ]
};

const categories = [
  {
    id: "general",
    name: "General Knowledge",
    icon: "🌍",
    description: "Test your general knowledge across various topics",
    totalQuestions: 10,
    color: "#6366f1"
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    description: "Physics, Chemistry, Biology and more",
    totalQuestions: 10,
    color: "#10b981"
  },
  {
    id: "technology",
    name: "Technology",
    icon: "💻",
    description: "Programming, computers, and modern tech",
    totalQuestions: 10,
    color: "#f59e0b"
  },
  {
    id: "sports",
    name: "Sports",
    icon: "⚽",
    description: "Sports trivia from around the world",
    totalQuestions: 10,
    color: "#ef4444"
  }
];

module.exports = { questions, categories };
