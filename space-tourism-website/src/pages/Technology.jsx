import { useEffect, useRef, useState } from 'react'
import data from '../../data.json'

import firstTechnologyImage from '../assets/technology/image-launch-vehicle-landscape.jpg'
import secondTechnologyImage from '../assets/technology/image-space-capsule-landscape.jpg'
import thirdTechnologyImage from '../assets/technology/image-spaceport-landscape.jpg'

import mobileFirstTechnologyImage from '../assets/technology/image-launch-vehicle-portrait.jpg'
import mobileSecondTechnologyImage from '../assets/technology/image-space-capsule-portrait.jpg'
import mobileThirdTechnologyImage from '../assets/technology/image-spaceport-portrait.jpg'

const Technology = () => {
  const [technologyIndex, setTechnologyIndex] = useState(0)
  const [mobile, setMobile] = useState(() => {
    if (window.innerWidth < 994) {
      return true
    } else {
      return false
    }
  })

  let technologyNavigation = useRef()

  const technologyImages = [
    firstTechnologyImage,
    secondTechnologyImage,
    thirdTechnologyImage,
  ]

  const mobileTechnologyImages = [
    mobileFirstTechnologyImage,
    mobileSecondTechnologyImage,
    mobileThirdTechnologyImage,
  ]

  const changeTab = (e) => {
    setTechnologyIndex(e.target.dataset.index)

    let children = technologyNavigation.current.children

    for (let index = 0; index < children.length; index++) {
      const child = children[index]
      child.classList.remove('active')
    }

    e.target.classList.add('active')
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 994) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    })
  })

  return (
    <div className="technology-section">
      <div className="technology-subtitle">
        <span>03</span> Space launch 101
      </div>
      {
        <>
          <div className="technology-image">
            <img
              src={
                mobile === true
                  ? technologyImages[technologyIndex]
                  : mobileTechnologyImages[technologyIndex]
              }
              alt=""
            />
          </div>
          <div ref={technologyNavigation} className="technology-navigation">
            <div
              data-index={0}
              onClick={changeTab}
              className="technology-tab active"
            ></div>
            <div
              data-index={1}
              onClick={changeTab}
              className="technology-tab"
            ></div>
            <div
              data-index={2}
              onClick={changeTab}
              className="technology-tab"
            ></div>
          </div>

          <div className="technology-content">
            <div className="technology-content-subtitle">The technology...</div>
            <div className="technology-content-name">
              {data.technology[technologyIndex].name}
            </div>
            <div className="technology-content-body">
              {data.technology[technologyIndex].description}
            </div>
          </div>
        </>
      }
    </div>
  )
}
export default Technology
