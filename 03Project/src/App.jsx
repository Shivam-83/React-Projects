import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center gap-10">
  <Card username="Shivam" btnText="Click Me" />
  <Card username="Shiv" btnText="Follow" />
</div>

  )
}

export default App
