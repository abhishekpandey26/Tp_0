import React, { useState, useEffect } from "react";

function App() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [message, setMessage] = useState("");

  const choices = ["Rock", "Paper", "Scissors"];

  // Function to generate a random computer choice
  const generateComputerChoice = () => {
    const ans = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(ans);
  };

  // Handle user choice and determine the game result
  const playGame = (userSelection) => {
    setUserChoice(userSelection);
    generateComputerChoice(); // Generate a new choice for the computer

    if (userSelection === computerChoice) {
      setMessage("It's a tie! Try again.");
    } else if (
      (userSelection === "Rock" && computerChoice === "Scissors") ||
      (userSelection === "Paper" && computerChoice === "Rock") ||
      (userSelection === "Scissors" && computerChoice === "Paper")
    ) {
      setUserScore((prev) => prev + 1);
      setMessage("I win Fuck Of!");
    } else {
      setComputerScore((prev) => prev + 1);
      setMessage("Computer wins!");
    }
  };

  return (
    <div className="w-full h-screen">
      <h1 className="text-center">Welcome to Rock, Paper, Scissors Game</h1>
      <div className="flex gap-2 items-center justify-center mt-5">
        <button
          onClick={() => playGame("Rock")}
          className="px-4 py-1 bg-green-600 text-white rounded-md"
        >
          Rock
        </button>
        <button
          onClick={() => playGame("Paper")}
          className="px-4 py-1 bg-green-600 text-white rounded-md"
        >
          Paper
        </button>
        <button
          onClick={() => playGame("Scissors")}
          className="px-4 py-1 bg-green-600 text-white rounded-md"
        >
          Scissors
        </button>
      </div>
      <h2 className="text-center mt-5">User Score: {userScore}</h2>
      <h2 className="text-center mt-1">Computer Score: {computerScore}</h2>
      {message && <h3 className="text-center mt-3">{message}</h3>}
    </div>
  );
}

export default App;
