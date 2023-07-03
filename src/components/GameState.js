import React from 'react';

const stateMessages = {
    win: 'Congrats! You won!',
    lose: 'Sorry! You lost!',
    draw: 'You draw!'
}

export default ({state, userChoice, computerChoice, clicked}) => {
  return (
    <div 
    onClick={clicked}
    className={`game-state ${state}`}>
      <div>
        <div className="game-state-content">
          <p>{userChoice}</p>
          <p>{stateMessages[state]}</p>
          <p>{computerChoice}</p>
        </div>
      </div>
    </div>
  )
}