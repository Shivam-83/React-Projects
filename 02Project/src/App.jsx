import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }
  const reduceCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={addCount}>+</button>
      <button onClick={reduceCount}>-</button>
    </>
  )
}

export default App
