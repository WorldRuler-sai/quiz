import React, { useState } from "react";
import Timer from "./Timer";

const Card = ({ q, o, answer, next, score, setScore }) => {
  const [selected, setSelected] = useState("");
  const [resetKey, setResetKey] = useState(0);

  const goNext = () => {
    setSelected("");
    setResetKey((prev) => prev + 1);
    next();
  };

  const handleClick = (opti) => {
    setSelected(opti);

    if (opti === answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleTimeUp = () => {
    setScore((prev) => prev - 1);
    goNext();
  };

  return (
    <div className="w-full relative">
      <h1 className="fixed top-4 left-4 text-white text-2xl font-bold z-50">
        Score: {score}
      </h1>

      <div className="max-w-4xl mx-auto mt-16 relative">
        <div className="absolute -top-10 left-0">
          <Timer onTimeUp={handleTimeUp} resetKey={resetKey} />
        </div>

        <div className="border-2 border-amber-50 p-8 rounded-lg pt-14">
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
              onClick={goNext}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;