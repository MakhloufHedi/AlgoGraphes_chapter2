import React, { useEffect, useState } from 'react'
import Wordle from './comp/Wordle'
import  './Game2.css'

function Game2() {
    const [solution, setSolution] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/solutions')
            .then(res => res.json())
            .then(json => {
                // random int between 0 & 14
                const randomSolution = json[Math.floor(Math.random() * json.length)]
                setSolution(randomSolution.word)
            })
    }, [setSolution])

    return (
        <div className="Game2">
            <h1 className="title">Wordle </h1> 
            {solution && <Wordle solution={solution} />}
        </div>
    )
}

export default Game2