import data from '../../../data.json'
import './Slot.css'

const Slot = () => {
  return (
    <div>
      {data.map((item, index) => {
        const { category, score, icon } = item

        return (
          <div key={index} className={`${category}Class slotClass`}>
            <div className="summaryName">

            <img src={icon} alt={`${category}-icon`} />
            <span id='category'>{category}</span>
            </div>

            <p className="subScore">{`${score} `} <span id='full'>/100</span> </p>
          </div>
        )
      })}
    </div>
  )
}
export default Slot
