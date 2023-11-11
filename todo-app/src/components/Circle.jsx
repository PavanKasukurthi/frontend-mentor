import check from '../images/icon-check.svg'
import { useGlobalContext } from '../context'

const Circle = () => {
  const { checked, checkTodo, colorMode } = useGlobalContext()
  return (
    <div
      className={`rounded-full border-2 border-gray-500 h-6 w-6 cursor-pointer flex justify-center items-center bg-[--Check-Background]`}
      onClick={() => checkTodo()}
    >
      <img
        src={!checked ? '' : `${check}`}
        alt=""
        className="bg-[--Check-Background]"
      />
    </div>
  )
}
export default Circle
