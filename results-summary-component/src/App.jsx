import { useState } from 'react'
import Result from './components/Result/Result.jsx'
import Summary from './components/Summary/Summary.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Result />
      <Summary />
    </section>
  )
}

export default App
