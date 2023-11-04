import React, { createContext, useContext,  useState } from 'react'

// Create a context
const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(false)

  const changeColorMode = () => {
    setColorMode(!colorMode)
  }

  return (
    <AppContext.Provider value={{ colorMode, setColorMode, changeColorMode }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to access the context
export const useGlobalContext = () => {
  return useContext(AppContext)
}
