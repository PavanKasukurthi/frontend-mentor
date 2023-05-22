import './Tip.css'

const Tip = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="tip">
      <form onSubmit={handleSubmit}>
        <label className="subHeading" htmlFor="billInput">
          Bill
        </label>
        <input className="billInput" type="number" id="billInput" />

        <p className="subHeading">Select Tip %</p>
        {/* <label>select tip %</label> */}
        <div class="button-group">
          <button id="5" class="percent-btn" type="button">
            5%
          </button>
          <button id="10" class="percent-btn" type="button">
            10%
          </button>
          <button id="15" class="percent-btn" type="button">
            15%
          </button>
          <button id="25" class="percent-btn" type="button">
            25%
          </button>
          <button id="50" class="percent-btn" type="button">
            50%
          </button>
          <input id="percent" type="text" placeholder="Custom" />
        </div>

        <label className="subHeading" htmlFor="numberOfPeople">
          number of people
        </label>
        <input
          className="numberOfPeople"
          type="number"
          name="numberOfPeople"
          id="numberOfPeople"
        />
      </form>
    </div>
  )
}
export default Tip
