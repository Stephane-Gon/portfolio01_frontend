import React, { useState } from "react";
import s from '../../styles/components/slider.module.scss'
import bubStyle from '../../styles/components/bubbles.module.scss'
import { dynamicUrl } from '../../helpers'

const Slider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
      setCurrentIndex(index)
  }

  return (
    <div className={s.slider}>

      <div className={s.slide} style={{backgroundImage: `url(${dynamicUrl("media", images[currentIndex]['image'])})`}}></div>

      <div className={s.doots}>
        {
          images.map((slide, i) => {
            return (
              <div 
                className={`${s.doot} ${bubStyle.bubble} ${currentIndex === i && s.activeDoot}`} 
                key={i} 
                onClick={() => goToSlide(i)}
              >
                <div className={`${s.dootElipse} ${bubStyle.bubbleElipse}`}>
                  <div className={bubStyle.bubbleShinny}></div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Slider