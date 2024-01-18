import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";

import ToolBubble from "../../features/bubbles/toolBubble";

import useAnimatedSlide from "../../hooks/useAnimatedSlide";
import s from '../../styles/pages/projects.module.scss'

const ToolsSection = ({tools, title, slogan}) => {

  const [isVisible, onChange] = useAnimatedSlide('')
  let spring = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      translateX: isVisible ? '0px' : '-15%'
    },
    config: {mass:2, tension: 250, friction: 22},
    delay: 300
  })

  let elements = []
  elements = tools?.map((tool, i) => {

    return(
      <VisibilitySensor key={i} onChange={onChange} partialVisibility={true}>
        <animated.div  className={s.toolFlexItem} style={spring}>
          <ToolBubble content={tool} color="Orange"/>
        </animated.div>
      </VisibilitySensor>
    )
  })

  return (
    <>
      <div className={s.toolsText}>
        <h4>{title}</h4>
        <p>{slogan}</p>
      </div>
      <div className={s.toolsWrapper}>
        {elements}
      </div>
    </>
  )
} 

export default ToolsSection