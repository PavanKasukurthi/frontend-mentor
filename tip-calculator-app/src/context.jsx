import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [people, setPeople] = useState('')
  const [tipAmount, setTipAmount] = useState(0.0)
  const [total, setTotal] = useState(0.0)

  const reset = () => {
    setTipAmount(0.0)
    setTotal(0.0)
    setBill('')
    setPeople('')
    setTip('')
  }

  const calcTip = () => {
    setTotal((bill * tip) / (people * 100))
  }

  return (
    <AppContext.Provider
      value={{
        tipAmount,
        setTipAmount,
        total,
        setTotal,
        bill,
        setBill,
        tip,
        setTip,
        people,
        setPeople,
        reset,
        calcTip,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
