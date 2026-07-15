import React, { useState } from "react";

const Card = ({ q, o, answer, next }) => {
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);

  const handleClick = (opti) => {
    setSelected(opti);

    if (opti === answer) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full">
      <h1 className="fixed top-4 left-4 text-white text-xl font-semibold">
        Score: {score}
      </h1>

      <div className="border-2 border-amber-50 p-8 rounded-lg max-w-4xl mx-auto mt-16">
        <h1 className="font-bold text-4xl mb-10 text-white">{q}</h1>

        <div className="flex justify-center gap-3 flex-wrap mt-10">
          {o.map((opt, index) => (
            <button
              key={index}
              onClick={() => handleClick(opt)}
              className={`text-white px-4 py-2 rounded ${
                selected === opt
                  ? opt === answer
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-gray-800"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={next}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;