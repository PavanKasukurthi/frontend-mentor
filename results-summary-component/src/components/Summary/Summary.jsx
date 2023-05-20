import './Summary.css'


import Slot from '../Slot/Slot'

const Summary = () => {
  return (
    <div className='box'>
      <h1>Summary</h1>
      <Slot />
      <button>Continue</button>
    </div>
  )
}
export default Summary