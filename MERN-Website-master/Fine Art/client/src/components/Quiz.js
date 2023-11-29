import React, { useState } from "react";
import "./Quiz.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "In which type of loan providing system the rate of interest is not fixed?",
      options: [
        { id: 0, text: "GoldLoan", isCorrect: false },
        { id: 1, text: "StudyLoan", isCorrect: false },
        { id: 2, text: "Mortgage", isCorrect: false },
        { id: 3, text: "pawnbroker", isCorrect: true },
      ],
    },
    {
      text: "How much of your monthly gross income should you spend on your mortgage payment and other debt expenses?",
      options: [
        { id: 0, text: "58", isCorrect: false },
        { id: 1, text: "45", isCorrect: true },
        { id: 2, text: "33", isCorrect: false },
        { id: 3, text: "68", isCorrect: false },
      ],
    },
    {
      text: "what is the minimum credit score most lenders require to receive their best interest rate on your mortgage?",
      options: [
        { id: 0, text: "500", isCorrect: false },
        { id: 1, text: "750", isCorrect: false },
        { id: 2, text: "680", isCorrect: true },
        { id: 3, text: "450", isCorrect: false },
      ],
    },
    {
      text: "What is the colloquial word for pawning an item for a loan?",
      options: [
        { id: 0, text: "Hooked", isCorrect: false },
        { id: 1, text: "Side selling", isCorrect: false },
        { id: 2, text: "Selling", isCorrect: false },
        { id: 3, text: "Hocked", isCorrect: true },
      ],
    },
    {
      text: "What document is a lender required to provide that allows a borrower to compare multiple mortgage proposals?",
      options: [
        { id: 0, text: "Verbal Summary", isCorrect: false },
        { id: 1, text: "Loan Estimate", isCorrect: true },
        { id: 2, text: "Closing Disclosure", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>USA Quiz 🇺🇸</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Quiz</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
