import NavBar from './components/navigation/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <div style={{width: '100px', height: '100px'}}>
          <img src="/bloggy.svg" alt="Bloggy logo" />
        </div>
        <h1>Make a Blog!</h1>
      </div>
    </div>
  )
}

export default App
