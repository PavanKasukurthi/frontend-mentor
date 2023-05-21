import './Display.css'

const Display = () => {
  return (
    <div className='display'>
      <div className="tipAmount">
        <p>Tip Amount</p>
        <p>/ person</p>
      </div>
      <div className="total">
        <p>total</p>
        <p>/ person</p>
      </div>
      <button className="reset-btn">RESET</button>
    </div>
  )
}
export default Display