import React, { useState } from "react";
import Card from "./components/Card";


const questions = [
  {
    category: "General Knowledge",
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    category: "General Knowledge",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    category: "General Knowledge",
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    category: "Technology",
    question: "Which language is primarily used for web pages?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML",
  },
  {
    category: "Technology",
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    category: "Technology",
    question: "Which company created React?",
    options: ["Google", "Microsoft", "Meta", "Apple"],
    answer: "Meta",
  },
  {
    category: "Easy Mixed Questions",
    question: "How many days are there in a week?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    category: "Easy Mixed Questions",
    question: "What color do you get when you mix red and white?",
    options: ["Pink", "Purple", "Orange", "Brown"],
    answer: "Pink",
  },
  {
    category: "Easy Mixed Questions",
    question: "Which animal barks?",
    options: ["Cat", "Dog", "Cow", "Fish"],
    answer: "Dog",
  },
];


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert(`Quiz finished! Final score: ${score}`);
    }
  };

  const current = questions[currentIndex];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Card
        q={current.question}
        o={current.options}
        answer={current.answer}
        next={nextQuestion}
        score={score}
        setScore={setScore}
      />
    </div>
  );
};

export default App;

