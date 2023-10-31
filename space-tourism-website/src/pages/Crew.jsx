import { useRef, useState } from 'react'
import data from '../../data.json'

import firstCrew from '../../public/assets/crew/image-douglas-hurley.png'
import secondCrew from '../../public/assets/crew/image-mark-shuttleworth.png'
import thirdCrew from '../../public/assets/crew/image-victor-glover.png'
import fourthCrew from '../../public/assets/crew/image-anousheh-ansari.png'

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0)

  let crewNavigation = useRef()

  const crewImages = [firstCrew, secondCrew, thirdCrew, fourthCrew]

  const changeTab = (e) => {
    setCrewIndex(e.target.dataset.index)

    let children = crewNavigation.current.children

    for (let index = 0; index < children.length; index++) {
      const child = children[index]
      child.classList.remove('active')
    }

    e.target.classList.add('active')
  }

  return (
    <div className="crew-section">
      <div className="crew-subtitle">
        <span>02</span> meet your crew
      </div>
      {
        <>
          <div className="crew-image">
            <img src={crewImages[crewIndex]} alt="" />
          </div>
          <div ref={crewNavigation} className="crew-navigation">
            <div data-index={0} onClick={changeTab} className="crew-tab active">
              {' '}
            </div>
            <div data-index={1} onClick={changeTab} className="crew-tab">
              {' '}
            </div>
            <div data-index={2} onClick={changeTab} className="crew-tab">
              {' '}
            </div>
            <div data-index={3} onClick={changeTab} className="crew-tab">
              {' '}
            </div>
          </div>

          <div className="crew-content">
            <div className="crew-content-role">{data.crew[crewIndex].role}</div>
            <div className="crew-content-name">{data.crew[crewIndex].name}</div>
            <div className="crew-content-body">{data.crew[crewIndex].bio}</div>
          </div>
        </>
      }
    </div>
  )
}
export default Crew
