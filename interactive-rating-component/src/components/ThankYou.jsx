import { useContext } from 'react'
import { AppContext } from '../App'
import './ThankYou.css'
import illustration from '../../images/illustration-thank-you.svg'

const ThankYou = () => {
  const { ratingValue } = useContext(AppContext)
  return (
    <div className="container ">
      <div className="box boxT">
        <img src={illustration} alt="illustration" />

        <p className="rating">You selected {ratingValue} out of 5</p>

        <p className="thankYou">Thank You!</p>

        <p className="info infoT">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}
export default ThankYou
