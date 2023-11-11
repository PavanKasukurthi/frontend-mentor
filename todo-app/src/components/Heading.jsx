import { useGlobalContext } from '../context'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'

import styled from 'styled-components'

const Heading = () => {
  const { colorMode, changeColorMode } = useGlobalContext()
  return (
    <Wrapper>
      <div className="flex justify-between items-center">
        <h2 className="uppercase font-bold text-sm md:text-5xl text-white tracking-[1rem]">
          todo
        </h2>
        <img
          src={colorMode === true ? moon : sun}
          alt="logo"
          className="h-4 w-4 md:w-6 md:h-6 cursor-pointer  "
          onClick={() => changeColorMode()}
        />
      </div>
    </Wrapper>
  )
}
export default Heading

export const Wrapper = styled.main`
  display: flex;
`
