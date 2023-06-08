import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [people, setPeople] = useState("")
  const [calculatedTip, setCalculatedTip] = useState(0)
  const [total, setTotal] = useState(0)
  const [selectedValue, setSelectedValue] = useState('')

  const handleResetBtn = (e) => {
    setBill('')
    setTip('')
    setPeople('')
    setHasError(false)
    setCalculatedTip(0)
    setTotal(0)
  }

  const [hasError, setHasError] = useState(false)

  const handleRadioChange = (e) => {
    // Uncheck the radio button if it's already selected
    if (selectedValue === e.target.value) {
      setSelectedValue('')
    } else {
      setSelectedValue(e.target.value)
    }
  }

  // const calcTip = () => {
  //   setTotal((bill * tip) / (people * 100))
  // }

  return (
    <AppContext.Provider
      value={{
        bill,
        setBill,
        tip,
        setTip,
        people,
        setPeople,
        calculatedTip,
        setCalculatedTip,
        total,
        setTotal,
        selectedValue,
        setSelectedValue,
        handleRadioChange,
        handleResetBtn,
        hasError,
        setHasError,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
