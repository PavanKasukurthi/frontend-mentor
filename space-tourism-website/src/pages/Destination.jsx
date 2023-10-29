import data from '../../data.json'
import { useRef, useState } from 'react'

import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

const Destination = () => {
  // console.log(data.destinations)
  const [planetNumber, setPlanetNumber] = useState(0)

  const navigation = useRef()

  let planetImages = [moon, mars, europa, titan]

  const tabChange = (e) => {
    setPlanetNumber(e.target.dataset.index)

    let children = navigation.current.children

    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      child.classList.remove('active')
    }

    e.target.classList.add('active')
  }

  return (
    <div className="destination-section">
      <div className="destination-content">
        <>
          <h1 className="destination-content-subtitle">
            <span>01</span> Pick your destination
          </h1>

          <div className="destination-content-image">
            <img src={planetImages[planetNumber]} alt="moon" />
          </div>

          <div ref={navigation} className="destination-content-navigation">
            <div className="tab" data-index={0} onClick={tabChange}>
              moon
            </div>
            <div className="tab" data-index={1} onClick={tabChange}>
              mars
            </div>
            <div className="tab" data-index={2} onClick={tabChange}>
              europa
            </div>
            <div className="tab" data-index={3} onClick={tabChange}>
              titan
            </div>
          </div>

          <h1 className="destination-content-title">
            {data.destinations[planetNumber].name}
          </h1>

          <p className="destination-content-body">
            {data.destinations[planetNumber].description}
          </p>

          <div className="destination-content-info">
            <div className="distance">
              <p>Avg. distance</p>
              <h1>{data.destinations[planetNumber].distance}</h1>
            </div>
            <div className="time">
              <p> Est. travel time</p>
              <h1>{data.destinations[planetNumber].travel}</h1>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}
export default Destination
