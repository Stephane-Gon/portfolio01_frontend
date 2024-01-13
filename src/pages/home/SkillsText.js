import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring"

import useAnimatedSlide from "../../hooks/useAnimatedSlide";
import { useTheme } from "../../contexts/ThemeProvider";
import s from '../../styles/pages/home.module.scss'


const SkillsText = () => {
  const theme = useTheme()
  let style = {color : theme.mainColor}

  const [isVisible, onChange] = useAnimatedSlide('')
  let spring = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      translateX: isVisible ? '0px' : "-15%"
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: 600
  })
  

  return (
    <VisibilitySensor onChange={onChange}  partialVisibility={true}>
      <animated.h4 className={s.skillsSubTitle} style={spring} >
        These are my skills, <strong className="accent-word" style={style}>press</strong> the 
        bubble and see the tools I use to practice each of them.
      </animated.h4>
    </VisibilitySensor>
  )
}

export default SkillsText