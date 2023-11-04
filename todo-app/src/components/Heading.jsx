import { useGlobalContext } from '../context'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'

const Heading = () => {
  const { colorMode, setColorMode, changeColorMode } = useGlobalContext()
  return (
    <div className="flex justify-between items-center">
      <h2 className="uppercase font-bold text-5xl text-white tracking-[1rem]">
        todo
      </h2>
      <img
        src={colorMode === true ? moon : sun}
        alt="logo"
        className="w-10 h-10 cursor-pointer  "
        onClick={() => changeColorMode()}
      />
    </div>
  )
}
export default Heading
