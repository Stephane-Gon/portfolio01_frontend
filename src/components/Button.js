import React from "react"
import {useSpring, animated} from "react-spring"
import VisibilitySensor from "react-visibility-sensor";

import useAnimatedSlide from "../hooks/useAnimatedSlide";
import { useTheme } from '../contexts/ThemeProvider' 

import { changeColor } from "../helpers"


function Button({margin, text}) {
  let theme = useTheme()

  let styles = {
    color: theme.mainColor,
    border: `3px solid ${theme.mainColor}`,
  }

  let dynamicClass = changeColor(theme.mainColor, 'btn-')

  const [isVisible, onChange] = useAnimatedSlide("")
  let spring = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: 300
  })

  return(
    <VisibilitySensor onChange={onChange}>
      <animated.button 
        style={{...styles, ...spring}} 
        className={`main-btn ${margin} ${dynamicClass}`}
      >
        {text}
      </animated.button>
    </VisibilitySensor>
  )
}

export default Button