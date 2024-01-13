import React from "react"
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

import useWidth from "../../hooks/useWidth"
import { useTheme } from "../../contexts/ThemeProvider";
import { bubbleColor } from "../../helpers";

import s from '../../styles/components/bubbles.module.scss';
import useAnimatedSlide from "../../hooks/useAnimatedSlide";


function TextBubble({textContent, delay=600, isFlip=false}) {
  // HERE I CALLA FUNCTION TO CHANGE THE BUBBLES COLOR
  const theme = useTheme()
  let bubbleStyles = bubbleColor(theme.mainColor)  

  let windowWidth = useWidth()
  
  const [isVisible, onChange] = useAnimatedSlide("")
  let spring = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      translateX: isVisible ? '0px' : `${isFlip ? '15%' : '-15%'}`,
      scale: isVisible ? 1 : 0.5,
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: delay
  })

  return(
    <VisibilitySensor onChange={onChange} partialVisibility={true}>
       <animated.div 
        className={`${s.bigBubble}`} 
        style={{
          background : windowWidth < 500 ? 'none' : bubbleStyles.bubble1, 
          ...spring
        }}
      >
        <div 
          className={s.bubbleElipse} 
          style={{
            background : windowWidth < 500 ? 'none' : bubbleStyles.bubble2
            }}
          >
          <div className={s.bubbleShinny}></div>
        </div>
        {
            textContent 
              && 
            <span className={s.bubbleText}>
              <h2>{ textContent['subTitle'] }</h2>
              <p>{ textContent['text'] }</p>
            </span>
          }
      </animated.div>
    </VisibilitySensor>
   
  )
}

export default TextBubble