import { useState } from "react"
import "./App.css"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="h-screen w-screen fixed inset-0 transition-colors duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center items-center w-full bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex gap-3 bg-white px-4 py-2 rounded-full shadow-lg">
          <button
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>

          <button
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
