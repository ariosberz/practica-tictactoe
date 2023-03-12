import React, { useState } from 'react'
import Board from './Board'

export default function Game() {
    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove+1),nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length -1);
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move)=>{
        let description;
        if(move === currentMove){
            description = "Estás en el movimiento #" + move;
        } else if(move >0){
            description = "Ir a movimiento #" + move;
        }
        else{
            description = "Ir al principio"
        }
        return(
            <li key={move}>
                <button 
                className='
                text-gray-100 text-center
                bg-blue-100/50 hover:bg-gray-500/50 active:bg-gray-700/50
                border
                rounded-md
                py-1 px-2
                w-56
                h-10'  
                onClick={()=>{jumpTo(move)}}>{description}</button>
            </li>
        )
    })
  
    return (
    <div className='flex flex-col items-center justify-center'>
      <div className="m-5">
        <Board xIsNext={xIsNext} currentSquares={currentSquares} handlePlay={handlePlay}/>
      </div>
      <div>
        <ol className="flex flex-col items-center justify-center gap-2">{moves}</ol>
      </div>
    </div>
   
    )
}
