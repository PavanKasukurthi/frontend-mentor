import { styled } from 'styled-components'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountryCard from './components/CountryCard'

function App() {
  return (
    <>
      <Navbar />
      <Wrapper className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path='/:name' element={<CountryCard />} />
          </Routes>
        </Router>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  display: grid;
  margin: 7rem auto 3rem;
  width: 90%;
`

export default App
