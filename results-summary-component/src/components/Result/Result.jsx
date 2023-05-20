import './Result.css'

const Result = () => {
  return (
    <div className="container">
      <p className="heading">Your Result</p>
      <div className="circle">
        <div className="score">
          <p>76</p>
          <p className="total">of 100</p>
        </div>
      </div>
      <p className="great">Great</p>
      <p className="result">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  )
}
export default Result
