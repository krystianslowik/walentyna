// components/Question.js
import { useState } from "react";

const Question = ({
  imageSrc,
  questionText,
  onYes,
  onNo,
  inputRequired,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col items-center">
      {" "}
      <img src={imageSrc} alt="Question" width={200} />
      <span
        className="font-bold mb-6 text-2xl text-center"
        style={{
          textShadow: "2px 2px white",
          textWrap: "balance",
        }}
      >
        {questionText}
      </span>
      {inputRequired ? (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Twoja odp:"
            className="text-lg bg-pink-100 border-2 border-blue-300 rounded-full py-2 px-4 shadow-md focus:outline-none focus:border-purple-500 focus:bg-white transition duration-300"
            style={{ fontFamily: "'Comic Neue', cursive" }}
          />
          <button
            onClick={() => {
              onSubmit(inputValue);
              setInputValue("");
            }}
            className="ml-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full hover:bg-green-600 transition duration-300"
            style={{ fontFamily: "'Comic Neue', cursive" }}
          >
            Submit
          </button>{" "}
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={onYes}
            className="ml-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full hover:bg-green-600 transition duration-300"
            style={{ fontFamily: "'Comic Neue', cursive" }}
          >
            OCZYWISCIE
          </button>
          <button
            onClick={onNo}
            className="ml-4 px-4 py-2 bg-red-400 text-white font-bold rounded-full hover:bg-green-600 transition duration-300"
            style={{ fontFamily: "'Comic Neue', cursive" }}
          >
            NJE
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
