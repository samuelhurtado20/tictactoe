import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board'

const styled = {
  backgroundColor: 'salmon',
  margin: 10,
  padding: 20,
  display: flex,
  flexDirection: column,
  alignItems: center
}

function App() {
  return (
    <>
      <div style={styled} >Game
        <Board />
      </div>

    </>
  )
}

export default App
