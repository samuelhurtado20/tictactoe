import React, { useState } from 'react'
import ReactDom from 'react-dom'
import '../index.css'

function Square(props) {
    //const [value, setValue] = useState(null)
    return (
        <button className='square' onClick={props.onClickEvent}>
            {props.value}
        </button>
    )
}

export default Square