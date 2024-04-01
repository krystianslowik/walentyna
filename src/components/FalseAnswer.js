// components/FalseAnswer.js

const FalseAnswer = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <img src={"/false.png"} alt="Question" width={200} />
      <span
        className="font-bold mb-6 text-2xl text-center"
        style={{
          textShadow: "2px 2px white",
          textWrap: "balance",
        }}
      >
        OJ COSIK NIE TEGES, SPR PONOWNIE
      </span>
      <button
        onClick={onRetry}
        className="ml-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full hover:bg-green-600 transition duration-300"
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        {" "}
        JESZCZE RAZ{" "}
      </button>
    </div>
  );
};

export default FalseAnswer;
