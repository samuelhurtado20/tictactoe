import React from 'react'
import ReactDom from 'react-dom'
import '../index.css'
import Square from './Square'

function Board() {

    const renderSquare = (i) => {
        return (
            <Square value={i} />
        );
    }

    return (
        <div style={{ backgroundColor: 'skyblue', margin: 10, padding: 20 }}>
            Board
            <div className='board-row'>
                {renderSquare("O")}{renderSquare("O")}{renderSquare("O")}
            </div>
            <div className='board-row'>
                {renderSquare("O")}{renderSquare("O")}{renderSquare("O")}
            </div>
            <div className='board-row'>
                {renderSquare("O")}{renderSquare("O")}{renderSquare("O")}
            </div>
        </div>
    )
}

export default Board