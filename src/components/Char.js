import React from "react"
import { useSpring, animated } from "react-spring"

import useBounce from "../hooks/useBounce"


const Char = (props) => {
  const { isVisible, item, delay, isBouncy, side} = props
  const [ref, addBounce] = useBounce()
  let springConfig = {}

  if (side === 'right') {
    springConfig = {
      to: {
        opacity: isVisible ? 1 : 0,
        translateX : isVisible ? '0px' : '1000px'
      },
      config: { mass:2, tension: 200, friction: 30},
      delay: delay
    }
  }
  else if (side === 'top') {
    springConfig = {
      to: {
        opacity: isVisible ? 1 : 0,
        translateY: isVisible ? '0px' : '-500px'
      },
      config:{ mass:2, tension: 250, friction: 35},
      delay: delay
    }
  }
 
  const spring = useSpring({...springConfig})

  return(
    <animated.span
      ref={ ref }
      style={ spring }
      onMouseOver={isBouncy ? addBounce : null}
      >
        {item.char === ' ' ? <span>&nbsp;</span> : item.char}
    </animated.span>
  )
}

export default Char