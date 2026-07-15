import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
          Start...
        </button>

        <p className="mt-8 text-gray-300 text-lg leading-8">
          Test your knowledge with fun and interactive quizzes on different
          topics. Choose an answer, track your score, and see how well you do
          at the end. Perfect for learning, practicing, and challenging
          yourself.
        </p>
      </div>
    </div>
  );
};

export default App;