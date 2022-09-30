import { useState } from 'react'
import './App.css'
import NavBar from './components/navigation/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <div className="App">
        <div>
          <img src="/bloggy.svg" className="logo" alt="Bloggy logo" />
        </div>
        <h1>Make a Blog!</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
