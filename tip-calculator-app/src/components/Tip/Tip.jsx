import './Tip.css'

import { useGlobalContext } from '../../context'

const Tip = () => {
  const { bill, setBill, tip, setTip, people, setPeople, calcTip, total } =
    useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    calcTip()
    console.log(total)
  }

  const handleBillChange = (e) => {
    setBill(e.target.value)
  }

  const handleTipChange = (e) => {
    setTip(e.target.value)
    // console.log(e.target.value)
  }

  const handlePeople = (e) => {
    setPeople(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <div className="tip">
      <form onSubmit={handleSubmit}>
        <label className="subHeading" htmlFor="billInput">
          Bill
        </label>
        <input
          className="billInput"
          type="number"
          id="billInput"
          value={bill}
          onChange={handleBillChange}
        />

        <p className="subHeading">Select Tip %</p>
        {/* <label>select tip %</label> */}
        <div className="button-group">
          <button
            id="5"
            className="percent-btn"
            type="button"
            value={5}
            onClick={handleTipChange}
          >
            5%
          </button>
          <button
            id="10"
            className="percent-btn"
            type="button"
            value={10}
            onClick={handleTipChange}
          >
            10%
          </button>
          <button
            id="15"
            className="percent-btn"
            type="button"
            value={15}
            onClick={handleTipChange}
          >
            15%
          </button>
          <button
            id="25"
            className="percent-btn"
            type="button"
            value={25}
            onClick={handleTipChange}
          >
            25%
          </button>
          <button
            id="50"
            className="percent-btn"
            type="button"
            value={50}
            onClick={handleTipChange}
          >
            50%
          </button>
          <input
            id="percent"
            type="text"
            placeholder="Custom"
            value={tip}
            onChange={handleTipChange}
          />
        </div>

        <label className="subHeading" htmlFor="numberOfPeople">
          number of people
        </label>
        <input
          className="numberOfPeople"
          type="number"
          name="numberOfPeople"
          id="numberOfPeople"
          value={people}
          onChange={handlePeople}
        />
      </form>
    </div>
  )
}
export default Tip
