import React, { useState, useEffect } from "react";

import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';

import WinsLosses from './components/WinsLosses';
import GameState from './components/GameState';
import Choices from './components/Choices';
import "./style.css";

// <WinsLosses state={gameState} userChoice={userChoice} computerChoice={computerChoice}/>

const choices = [
  { id: 1, name: 'rock', component: Rock, losesTo: 2 },
  { id: 2, name: 'paper', component: Paper, losesTo: 3 },
  { id: 3, name: 'scissors', component: Scissors, losesTo: 1 }
];

export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setlosses] = useState(0);

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const [gameState, setGameState] = useState(null);


  useEffect(() => {
    restartGame();
  }, [])


  function restartGame() {
    setGameState(null);
    setComputerChoice(null);
    
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  function handleUserChoice(choice) {
    const chosenChoice = choices.find(c => c.id === choice);
    setUserChoice(chosenChoice);

    if (chosenChoice.losesTo === computerChoice.id ) {
      setlosses(l => l + 1);
      setGameState('lose');
    } else if (computerChoice.losesTo === chosenChoice.id) {
      setWins(l => l + 1);
      setGameState('win');
    } else if (computerChoice.id === chosenChoice.id) {
      setGameState('draw');
    }
  }


  return (
    <div className="app">
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>
        <WinsLosses wins={wins} losses={losses} />
      </div>
      {
        gameState && <GameState 
            state={gameState} 
            userChoice={userChoice.component()} 
            computerChoice={computerChoice.component()}
            clicked={restartGame}
            />
      }
      <Choices handleUserChoice={handleUserChoice} />
    </div>
  );
}
