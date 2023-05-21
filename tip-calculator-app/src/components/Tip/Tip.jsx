import './Tip.css'

const Tip = () => {
  return (
    <div className="tip">
      <form action="">
        <label htmlFor="billInput">Bill</label>
        <input type="number" id="billInput" />
        <label htmlFor="selectTip">select tip %</label>
        5% 10% 15% 25% 50%
        <input type="number" name="" id="selectTip" placeholder='custom' />
        <label htmlFor="numberOfPeople">number of people</label>
        <input type="number" name="numberOfPeople" id="numberOfPeople" />
      </form>
    </div>
  )
}
export default Tip
