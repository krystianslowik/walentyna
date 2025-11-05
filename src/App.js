import { useState } from "react";
import Question from "./components/Question";
import FalseAnswer from "./components/FalseAnswer";
import FinalScreen from "./components/FinalScreen";

function App() {
  // pages/index.js

  const questions = [
    {
      id: 1,
      type: "yes-no",
      imageSrc: "1.png",
      questionText: "HEY PIEKNA, WANNA BE MAJ WALENTAJN?",
      inputRequired: false,
    },
    {
      id: 2,
      type: "input",
      imageSrc: "2.png",
      questionText: "HOLA HOLA KOLEZANKO, A KTO TY? PODAJ SWOM GOSNOSC",
      inputRequired: true,
      correctAnswers: ["oliwka", "oliwia", "bombel", "nie mam", "niemam"],
    },
    {
      id: 3,
      type: "yes-no",
      imageSrc: "3.png",
      questionText: "ALE CZY NA PEWNO????",
      inputRequired: false,
    },
    {
      id: 4,
      type: "yes-no",
      imageSrc: "4.png",
      questionText: "HMM PODEJRZANE, OBIECUJESZ BYC GRZECZNA????",
      inputRequired: false,
    },
    {
      id: 5,
      type: "input",
      imageSrc: "5.png",
      questionText: "A KOCHAS MNIE???",
      inputRequired: true,
      correctAnswers: ["tak", "kochas", "kocham", "ehe"],
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [showFalseAnswer, setShowFalseAnswer] = useState(false);

  const handleYes = () => {
    const nextStep = currentStep + 1;
    if (nextStep < questions.length) {
      setCurrentStep(nextStep);
    } else {
      setCurrentStep("final");
    }
    setShowFalseAnswer(false);
  };

  const handleNo = () => {
    setShowFalseAnswer(true);
  };

  const handleRetry = () => {
    setShowFalseAnswer(false);
  };
  const handleSubmit = (inputValue) => {
    const currentQuestion = questions[currentStep];

    if (currentQuestion.inputRequired) {
      if (
        currentQuestion.correctAnswers.includes(inputValue.trim().toLowerCase())
      ) {
        const nextStep = currentStep + 1;
        if (nextStep < questions.length) {
          setCurrentStep(nextStep);
        } else {
          setCurrentStep("final");
        }
        setShowFalseAnswer(false);
      } else {
        setShowFalseAnswer(true);
      }
    }
  };
  return (
    <main
      style={{
        backgroundImage: "url('https://krystianslowik.com/walentyna/bg.png')",
        width: "100vw", // Use 100vw for 100% of the viewport width
        height: "100vh", // Use 100vh for 100% of the viewport height
      }}
      className="flex items-center justify-center"
    >
      {showFalseAnswer ? (
        <FalseAnswer onRetry={handleRetry} />
      ) : currentStep === "final" ? (
        <FinalScreen imageSrc="" finalText="tekst" />
      ) : (
        <Question
          imageSrc={questions[currentStep].imageSrc}
          questionText={questions[currentStep].questionText}
          onYes={handleYes}
          onNo={handleNo}
          inputRequired={questions[currentStep].inputRequired}
          onSubmit={handleSubmit}
        />
      )}
    </main>
  );
}

export default App;
