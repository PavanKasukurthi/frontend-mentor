import './Tip.css'

import { useGlobalContext } from '../../context'

const Tip = () => {
  const {
    bill,
    setBill,
    tip,
    setTip,
    people,
    setPeople,
    calcTip,
    total,
    hasError,
    setHasError,
  } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    calcTip()
    console.log(total)
  }

  const handleBillChange = (e) => {
    setBill(+e.target.value)
  }

  const handleTipChange = (e) => {
    setTip(+e.target.value)
    // console.log(e.target.value)
  }

  const handlePeople = (e) => {
    setPeople(+e.target.value)

    {
      people === 0 ? setHasError(true) : setHasError(false)
    }
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
          placeholder="0"
        />

        <p className="subHeading">Select Tip %</p>
        {/* <label>select tip %</label> */}
        <div className="button-group">
          <button
            id="5"
            className="percent-btn"
            type="button"
            value="5"
            onClick={(e) => handleTipChange(e)}
          >
            5%
          </button>
          {/* <input
            type="radio"
            onInput={handleTipChange}
            id="input1"
            className="tip-input"
            name="tip"
            value="5"
          />
          <label className="tip-btn" htmlFor="input1">
            5%
          </label> */}
          <button
            id="10"
            className="percent-btn"
            type="button"
            value={10}
            onClick={(e) => handleTipChange(e)}
          >
            10%
          </button>
          <button
            id="15"
            className="percent-btn"
            type="button"
            value={15}
            onClick={(e) => handleTipChange(e)}
          >
            15%
          </button>
          <button
            id="25"
            className="percent-btn"
            type="button"
            value={25}
            onClick={(e) => handleTipChange(e)}
          >
            25%
          </button>
          <button
            id="50"
            className="percent-btn"
            type="button"
            value={50}
            onClick={(e) => handleTipChange(e)}
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
          <p>number of people</p>
          {/* <p className="error" style={{ color: 'red' }}>
            Can't be zero
          </p> */}
          {hasError && <p style={{ color: 'red' }}>Can't be zero</p>}
        </label>
        <input
          className="numberOfPeople"
          type="number"
          name="numberOfPeople"
          id="numberOfPeople"
          value={people}
          onInput={handlePeople}
          placeholder="0"
        />
      </form>
    </div>
  )
}
export default Tip
