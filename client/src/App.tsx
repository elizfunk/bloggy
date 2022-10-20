import { NavBar } from './components/navigation/NavBar'
import { HomePage } from './components/pages/HomePage'

const splashContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 64px)',
  fontFamily: 'Raleway',
}

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  )
}

export default App
