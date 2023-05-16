import './Rating.css'
import star from '../../images/icon-star.svg'
import { useContext } from 'react'
import { AppContext } from '../App'

const Rating = () => {
  const { setIsSubmit, ratingValue, setRatingValue } = useContext(AppContext)

  const ratingArr = [1, 2, 3, 4, 5]

  return (
    <div className="container">
      <div className="box">
        <img src={star} alt="icon-star" className="iconStar" />

        <p className="heading">How did we do?</p>

        <p className="info">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <ul className="ratingValues">
          {ratingArr.map((item, index) => {
            return (
              <li key={index} value={item} number={item}>
                <button
                  className="rtng-btn"
                  onClick={() => setRatingValue(item)}
                >
                  {item}
                </button>
              </li>
            )
          })}
        </ul>

        <button
          className="submitButton"
          type="submit"
          onClick={() => setIsSubmit(ratingValue > 0)}
        >
          SUBMIT
        </button>
      </div>
    </div>
  )
}
export default Rating
