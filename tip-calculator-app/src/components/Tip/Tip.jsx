import './Tip.css'

const Tip = () => {
  const percentages = [5, 10, 15, 25, 50]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="tip">
      <form onSubmit={handleSubmit}>
        <label htmlFor="billInput">Bill</label>
        <input type="number" id="billInput" />
        <label>select tip %</label>
        <div className="tipPercents" id="selectTip">
          {percentages.map((percent, index) => {
            return (
              <button
                className="percentTip"
                key={index}
              >{percent}%</button>
            )
          })}

          <input
            type="number"
            name="customTip"
            id="selectTip"
            placeholder="custom"
            className="customTip"
          />
        </div>
        <label htmlFor="numberOfPeople">number of people</label>
        <input type="number" name="numberOfPeople" id="numberOfPeople" />
      </form>
    </div>
  )
}
export default Tip
