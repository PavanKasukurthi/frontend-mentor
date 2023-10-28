import data from '../../data.json'
import { useState } from 'react'

import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

const Destination = () => {
  console.log(data.destinations)
  const [planetNumber, setPlanetNumber] = useState(0)

  let planetImages = [moon, mars, europa, titan]
  return (
    <div className="destination">
      <div className="destination-content">
        <>
          <h1 className="destination-content-subtitle">
            <span>01</span>Pick your destination
          </h1>

          <div className="destination-content-image">
            <img src={planetImages[planetNumber]} alt="moon" />
          </div>

          <div className="destination-content-navigation">
            <div className="tab" onClick={() => setPlanetNumber(0)}>
              moon
            </div>
            <div className="tab" onClick={() => setPlanetNumber(1)}>
              mars
            </div>
            <div className="tab" onClick={() => setPlanetNumber(2)}>
              europa
            </div>
            <div className="tab" onClick={() => setPlanetNumber(3)}>
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
