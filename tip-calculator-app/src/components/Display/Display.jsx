import { useGlobalContext } from '../../context'
import './Display.css'

const Display = () => {
  const { tipAmount, total, reset } = useGlobalContext()

  return (
    <div className="display">
      <div className="tipAmount">
        <div className="tipAmount-left">
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <div className="tipAmount-right">
          <h1>${tipAmount ? tipAmount : '0.00'}</h1>
        </div>
      </div>
      <div className="total">
        <div className="total-left">
          <p>total</p>
          <p>/ person</p>
        </div>
        <div className="total-right">
          <h1>${total}</h1>
        </div>
      </div>
      <button className="reset-btn" onClick={reset}>
        RESET
      </button>
    </div>
  )
}
export default Display
