import styled from 'styled-components'
import './App.css'
import TodoWrapper from './components/TodoWrapper'
import backg from './images/bg-desktop-light.jpg'

import { useGlobalContext } from './context'

function App() {
  const { colorMode } = useGlobalContext()
  return (
    <Wrapper>
      <div className="container">
        <TodoWrapper />
      </div>
    </Wrapper>
  )
}

export default App

export const Wrapper = styled.main`
  .container {
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('./images/bg-desktop-light.jpg');
    background-position: center;
    background-size: cover;
  }
`
