import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RotatingText from "./components/RotatingText.jsx"
import Header from './components/Home/Header.jsx'
import Home from './pages/Home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
