import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HorizontalTimeline from './components/HorizontalTimeline.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>

      <Header />
      <HorizontalTimeline />
    </div>
  )
}

export default App
