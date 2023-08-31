const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Makeup Language",
    b: "Hyper Transfer Markup Language",
    c: "Hyper Text Markup Language",
    d: "High Tech Modern Language",
    correct: "c",
  },
  {
    question: "Which programming language is known as the 'mother of all languages'?",
    a: "Python",
    b: "C++",
    c: "Java",
    d: "Assembly",
    correct: "d",
  },
  {
    question: "What is the process of finding and fixing errors in a program called?",
    a: "Debugging",
    b: "Troubleshooting",
    c: "Optimization",
    d: "Analysis",
    correct: "a",
  },
  {
    question: "What data structure uses the Last-In-First-Out (LIFO) principle?",
    a: "Queue",
    b: "Linked List",
    c: "Stack",
    d: "Tree",
    correct: "c",
  },
  {
    question: "Which programming language is often used for web development and is known for its simplicity?",
    a: "Java",
    b: "C#",
    c: "Ruby",
    d: "Python",
    correct: "d",
  },
  {
    question: "What is the term for a function that calls itself directly or indirectly?",
    a: "Loop",
    b: "Iterator",
    c: "Recursion",
    d: "Callback",
    correct: "c",
  },
  {
    question: "Which version control system is designed specifically for collaborative software development?",
    a: "Git",
    b: "SVN (Subversion)",
    c: "Mercurial",
    d: "Perforce",
    correct: "a",
  },
  {
    question: "What does API stand for?",
    a: "Advanced Programming Interface",
    b: "Application Programming Interface",
    c: "Automated Process Integration",
    d: "Applicable Program Integration",
    correct: "b",
  },
  {
    question: "Which programming paradigm treats computation as the evaluation of mathematical functions and avoids changing state and mutable data?",
    a: "Imperative",
    b: "Object-Oriented",
    c: "Declarative",
    d: "Functional",
    correct: "d",
  },
  {
    question: "In JavaScript, what is the purpose of the 'setTimeout' function?",
    a: "To create a new HTML element",
    b: "To define a variable",
    c: "To delay the execution of a function",
    d: "To perform an HTTP request",
    correct: "c",
  },
  {
    question: "Which of the following is NOT a fundamental data type in most programming languages?",
    a: "Integer",
    b: "String",
    c: "Boolean",
    d: "Function",
    correct: "d",
  },
  {
    question: "In object-oriented programming, what is the term for creating a new instance of a class?",
    a: "Inheritance",
    b: "Encapsulation",
    c: "Polymorphism",
    d: "Instantiation",
    correct: "d",
  },
  {
    question: "Which of the following is a widely used version control platform that uses a decentralized model?",
    a: "Perforce",
    b: "Mercurial",
    c: "Subversion (SVN)",
    d: "Git",
    correct: "d",
  },
  {
    question: "What is the primary purpose of a constructor in object-oriented programming?",
    a: "To destroy objects",
    b: "To perform arithmetic operations",
    c: "To initialize objects",
    d: "To manage memory",
    correct: "c",
  },
  {
    question: "Which of the following is a scripting language often used for web development to add interactivity to websites?",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What is the term for a variable that is accessible only within the block of code where it is defined?",
    a: "Global variable",
    b: "Public variable",
    c: "Private variable",
    d: "Local variable",
    correct: "d",
  },
  {
    question: "In Python, which keyword is used to define a function?",
    a: "method",
    b: "def",
    c: "function",
    d: "define",
    correct: "b",
  },
  {
    question: "What is the process of converting high-level programming code into machine code called?",
    a: "Interpreting",
    b: "Transpiling",
    c: "Compiling",
    d: "Debugging",
    correct: "c",
  },
  {
    question: "Which programming language was developed by Microsoft and is commonly used for Windows application development?",
    a: "Java",
    b: "C#",
    c: "Ruby",
    d: "Python",
    correct: "b",
  },
  {
    question: "What is the process of combining multiple smaller data structures to create a larger, more complex one?",
    a: "Aggregation",
    b: "Abstraction",
    c: "Composition",
    d: "Integration",
    correct: "c",
  },

  // Diğer sorular buraya eklenir...
];

// Quiz verisi

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
                <button onclick="history.go(0)">Play Again</button> `
      // location.reload() won't work in CodePen for security reasons; } } });
    }
  }
});