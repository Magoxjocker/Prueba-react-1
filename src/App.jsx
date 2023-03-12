import { useEffect, useState } from 'react'
import './App.css'
import MiApi from './assets/components/MiApi'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(()=>{
  },[])
  
  return (
    <div>
      <MiApi/>
      
    </div>
  )
}

export default App
