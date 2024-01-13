import React from "react";
import { useSpring, animated } from "react-spring"
import VisibilitySensor from "react-visibility-sensor";


import useAnimatedSlide from "../../hooks/useAnimatedSlide";

const Slogan = ({text}) => {
  
  const [isVisible, onChange] = useAnimatedSlide('')
  let spring = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      translateX: isVisible ? '0px' : '-15%',
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: 300
  })

  return (
    <VisibilitySensor onChange={onChange} partialVisibility={true}>
      <animated.h4 style={spring}>{text}</animated.h4> 
    </VisibilitySensor>
  )
}

export default Slogan