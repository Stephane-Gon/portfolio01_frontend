import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring"

import useAnimatedSlide from "../../hooks/useAnimatedSlide";

const Illustration = ({imgUrl, delay=600, isFlip=false}) => {

  const [isVisible, onChange] = useAnimatedSlide("")
  let spring = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      translateX: isVisible ? '0px' : `${isFlip ? '-15%' : '15%'}`,
      scale: isVisible ? 1 : 0.5
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: delay
  })

  return (
    <VisibilitySensor onChange={onChange} partialVisibility={true}>
      <animated.img src={imgUrl} className="illustration" style={spring} />
    </VisibilitySensor>
  )
}

export default Illustration