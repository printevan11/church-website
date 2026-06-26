import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Front from './Components/Front'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Front/>
    </>
  )
}

export default App
