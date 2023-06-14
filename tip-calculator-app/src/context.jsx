import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [people, setPeople] = useState('')
  const [calculatedTip, setCalculatedTip] = useState(0)
  const [total, setTotal] = useState(0)
  const [selectedValue, setSelectedValue] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleResetBtn = () => {
    setBill('')
    setTip('')
    setPeople('')
    setHasError(false)
    setCalculatedTip(0)
    setTotal(0)
  }

  const handleRadioChange = (e) => {
    // Uncheck the radio button if it's already selected
    if (selectedValue === e.target.value) {
      setSelectedValue('')
    } else {
      setSelectedValue(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    calcTip()
    console.log(total)
  }

  const handleBillChange = (e) => {
    setBill(+e.target.value)
  }

  const handleTipChange = (e) => {
    setTip(+e.target.value)
    // console.log(e.target.value)
  }

  const handlePeople = (e) => {
    setPeople(+e.target.value)

    if (+e.target.value <= 0) {
      setHasError(true)
      setPeople('')
    } else {
      setHasError(false)
    }
    // console.log(e.target.value)
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
        handleSubmit,
        handleBillChange,
        handleTipChange,
        handlePeople,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
