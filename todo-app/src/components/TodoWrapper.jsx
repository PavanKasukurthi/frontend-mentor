import lightBackgroundImage from '../images/bg-desktop-light.jpg'
import mobileLightBackgroundImage from '../images/bg-mobile-light.jpg'
import darkBackgroundImage from '../images/bg-desktop-dark.jpg'
import mobileDarkBackgroundImage from '../images/bg-mobile-dark.jpg'

import Heading from './Heading'
import Input from './Input'
import Todo from './Todo'

import { useGlobalContext } from '../context'
import styled from 'styled-components'

const TodoWrapper = () => {
  const { colorMode } = useGlobalContext()
  return (
    <Wrapper>
      <h1>Todo App</h1>
    </Wrapper>
  )
}
export default TodoWrapper

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222831;

  height: fit-content;
  padding: 1rem 0;
  width: 90%;

  border-radius: 0.5rem;

  h1 {
    color: white;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`
