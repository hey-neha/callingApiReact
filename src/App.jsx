import { useState } from 'react'

// import viteLogo from '/vite.svg'
import './App.css'
import Apis from './Components/Apis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Apis/>
    </>
  )
}

export default App
