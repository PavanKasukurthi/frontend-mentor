import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [flag, setFlag] = useState('')
  const [name, setName] = useState('')

  return (
    <AppContext.Provider value={{ flag, setFlag, name, setName }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
