import './Display.css'

const Display = () => {
  return (
    <div className="display">
      <div className="tipAmount">
        <div className="tipAmount-left">
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <div className="tipAmount-right">
          <h1>$0.00</h1>
        </div>
      </div>
      <div className="total">
        <div className="total-left">
          <p>total</p>
          <p>/ person</p>
        </div>
        <div className="total-right">
          <h1>$0.00</h1>
        </div>
      </div>
      <button className="reset-btn">RESET</button>
    </div>
  )
}
export default Display
