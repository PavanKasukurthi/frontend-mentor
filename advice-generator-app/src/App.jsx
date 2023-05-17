import { useEffect, useState } from 'react'
import desktopDivider from '../images/pattern-divider-desktop.svg'
import mobileDivider from '../images/pattern-divider-mobile.svg'

import './App.css'

function App() {
  const [advice, setAdvice] = useState('')
  const [adviceId, setAdviceId] = useState('')

  const fetchData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
      .then((resp) => resp.json())
      .then((data) => {
        setAdvice(data.slip.advice)
        setAdviceId(data.slip.id)
      })
      .catch((err) => console.log(err))
    return response
  }

  const handleClick = async () => {
    fetchData()
  }

  useEffect(() => {
    fetchData()
  },[advice])

  console.log(advice, adviceId)

  return (
    <div className="container">
      <div className="box">
        <p className="adviceId">Advice #{adviceId}</p>
        <p className="advice">{advice}</p>
        <img src={desktopDivider} alt="desktopDivider" className='desktopDivider' />
        <img src={mobileDivider} alt="mobileDivider" className='mobileDivider' />
      </div>
        <button onClick={handleClick}></button>
    </div>
  )
}

export default App
