import { useGlobalContext } from '../context'
import Circle from './Circle'

const Input = () => {
  const { colorMode } = useGlobalContext()
  return (
    <div className="my-2">
      <label className="input-group input-group-lg w-full rounded-sm transition-all duration-500 ">
        <span
          style={{
            background: colorMode ? `white` : `var(--Very-Dark-Blue)`,
            color: colorMode ? `black` : `var(--Very-Light-Gray)`,
          }}
        >
          <Circle />
        </span>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="input input-bordered input-lg w-full p-4 "
          style={{
            outline: 0,
            background: colorMode ? `white` : `var(--Very-Dark-Blue)`,
            color: colorMode ? `black` : `var(--Very-Light-Gray)`,
          }}
        />
      </label>
    </div>
  )
}
export default Input
