import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  add,
  divide,
  multiply,
  selectValue,
  subtract,
  total,
} from './features/calc/calcSlice'
import { useState } from 'react'

function App() {
  const dispatch = useDispatch()
  const value = useSelector(selectValue)

  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleOperation = (operation) => {
    if (input !== '') {
      dispatch(operation(Number(input)))
      setInput('')
    }
  }

  return (
    <>
      <h1>Calculator App</h1>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
      </div>
      <div>
        <button onClick={() => handleOperation(add)}> +</button>
        <button onClick={() => handleOperation(subtract)}> -</button>
        <button onClick={() => handleOperation(multiply)}> *</button>
        <button onClick={() => handleOperation(divide)}> /</button>
        <button onClick={() => handleOperation(total)}> =</button>
      </div>

      <div>
        <p>{value}</p>
      </div>
    </>
  )
}

export default App
