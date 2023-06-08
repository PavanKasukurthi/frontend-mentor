import { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import './Display.css'

const Display = () => {
  const {
    bill,
    people,
    tip,
    calculatedTip,
    setCalculatedTip,
    total,
    setTotal,
    handleResetBtn,
  } = useGlobalContext()

  useEffect(() => {
    console.log({ bill, people, tip })
    if (bill > 0 && people > 0 && tip > 0) {
      setCalculatedTip(bill * (tip / 100))
      setTotal((parseInt(calculatedTip) + parseInt(bill)) / people)
    }
  }, [bill, people, tip, calculatedTip])

  return (
    <div className="display">
      <div className="tipAmount">
        <div className="tipAmount-left">
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <div className="tipAmount-right">
          <h1>
            $
            {calculatedTip
              ? `${(calculatedTip / people).toFixed(2)}` === Infinity
                ? '0.00'
                : `${(calculatedTip / people).toFixed(2)}`
              : '0.00'}
          </h1>
        </div>
      </div>
      <div className="total">
        <div className="total-left">
          <p>total</p>
          <p>/ person</p>
        </div>
        <div className="total-right">
          <h1>${total.toFixed(2)}</h1>
        </div>
      </div>
      <button className="reset-btn" onClick={handleResetBtn}>
        RESET
      </button>
    </div>
  )
}
export default Display
