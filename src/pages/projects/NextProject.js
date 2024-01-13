import React from "react";
import {useSpring, animated} from "react-spring"
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";

import useAnimatedSlide from "../../hooks/useAnimatedSlide";
import s from '../../styles/pages/projects.module.scss'

const NextProject = () => {

  const [isVisible, onChange] = useAnimatedSlide('')
  let spring = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      translateX: isVisible ? '0px' : "-80%"
    },
    config: {mass:2, tension: 250, friction: 25},
    delay: 100
  })

  return (
      <animated.div style={spring} className={s.nextWorkBox}>
        <h4>More Works</h4>

        <VisibilitySensor onChange={onChange} partialVisibility={true}>
          <Link to={`/projects/`}>
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </VisibilitySensor>

      </animated.div>
  )
}


export default NextProject