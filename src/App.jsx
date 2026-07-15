import React, { useState } from "react";
import Card from "./components/Card";

const quizData = [
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
  const [showCard, setShowCard] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuestion = () => {
    setCurrentIndex((prev) => (prev < quizData.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      {!showCard ? (
        <div className="text-center max-w-xl">
          <button
            onClick={() => setShowCard(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Start...
          </button>

          <p className="mt-8 text-gray-300 text-lg leading-8">
            Test your knowledge with fun and interactive quizzes on different
            topics. Choose an answer, track your score, and see how well you do
            at the end. Perfect for learning, practicing, and challenging
            yourself.
          </p>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <Card
            q={quizData[currentIndex].question}
            o={quizData[currentIndex].options}
            answer={quizData[currentIndex].answer}
            next={nextQuestion}
          />
        </div>
      )}
    </div>
  );
};

export default App;
