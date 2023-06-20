import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    flag: '',
    name: '',
    nativeName: '',
    population: '',
    region: '',
    subRegion: '',
    capital: '',
    currencies: [],
    languages: [],
    borderCountries: [],
  })

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
