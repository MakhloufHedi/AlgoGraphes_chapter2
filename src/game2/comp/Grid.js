import React from 'react'

// components
import Roww from './Roww'

export default function Grid({ guesses, currentGuess, turn }) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Roww key={i} currentGuess={currentGuess} />
        }
        return <Roww key={i} guess={g} /> 
      })}
    </div>
  )
}
