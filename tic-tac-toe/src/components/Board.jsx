import React, { useState } from 'react'
import ReactDom from 'react-dom'
import '../index.css'
import Square from './Square'

function Board() {
    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initialSquares)
    const [xTurn, setXTurn] = useState(true)

    const handleClickEvent = (i) => {
        const newValues = [...squares];
        newValues[i] = xTurn ? 'X' : 'O'
        setSquares(newValues)
        setXTurn(!xTurn)
    }

    const renderSquare = (i) => {
        return (
            <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
        );
    }

    const winnner = calculateWinner(squares);
    const status = winnner ? 'Winner:' + winnner : 'Next player: ' + (xTurn ? 'X' : 'O');

    return (
        <div style={{ backgroundColor: '#666', margin: 10, padding: 20 }}>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </div>
        </div>
    )
}

export default Board

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for (let line of lines) {
        var [a,b,c] = line;
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    };
    // lines.forEach((line) => {
    //     let [a,b,c] = line
    //     if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
    //         return squares[a]
    //     }
    //   });

    return null;
}