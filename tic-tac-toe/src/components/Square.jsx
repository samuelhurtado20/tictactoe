import React from 'react'
import ReactDom from 'react-dom'
import '../index.css'

function Square(props) {
    return (
        <button className='square' onClick={() =>{alert(`${props.value}`)}}>
            {props.value}
        </button>
    )
}

export default Square