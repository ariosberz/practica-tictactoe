import Square from './Square'

function Board({xIsNext, currentSquares, handlePlay}) {
    
  
    
    const winner = calculateWinner(currentSquares);

    let status;

    if(winner){
        status = "Ganador: " + winner;
    } else {
        status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
    }
    
    function handleClick(i){
        if(currentSquares[i] || calculateWinner(currentSquares)){
            return;
        }

        const nextSquares = currentSquares.slice();
        xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O"; 
        handlePlay(nextSquares);
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
    
    const plantilla = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        
    ];
    
    //Modificacion a tutorial para usar Array.map en lugar de invocar manualmente los components.
    const tabla = plantilla.map((i,index)=>{
        return(
            <div key={index} className="m-0 p-0">
                {plantilla[index].map((j,ind)=>{
                return(
                    <Square key= {j} value= {currentSquares[j]} handleClick={()=>{handleClick(j)}} />
                );
            })}
            </div>
        );
    });
        

    
    return (
        <div>
            <div className="mb-10 text-white text-lg font-bold text-center">{status}</div>
            {tabla}
        </div>

    /*<div> Version del tutorial
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={currentSquares[0]} handleClick={()=>{handleClick(0)}}/>
            <Square value={currentSquares[1]} handleClick={()=>{handleClick(1)}}/>
            <Square value={currentSquares[2]} handleClick={()=>{handleClick(2)}}/>
        </div>
        <div className="board-row">
            <Square value={currentSquares[3]} handleClick={()=>{handleClick(3)}}/>
            <Square value={currentSquares[4]} handleClick={()=>{handleClick(4)}}/>
            <Square value={currentSquares[5]} handleClick={()=>{handleClick(5)}}/>
        </div>
        <div className="board-row">
            <Square value={currentSquares[6]} handleClick={()=>{handleClick(6)}}/>
            <Square value={currentSquares[7]} handleClick={()=>{handleClick(7)}}/>
            <Square value={currentSquares[8]} handleClick={()=>{handleClick(8)}}/>
        </div>
    </div>*/
  )
}

export default Board