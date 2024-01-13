import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";


import { useTheme } from '../../contexts/ThemeProvider' 
import useAnimatedSlide from "../../hooks/useAnimatedSlide";

import Char from "../../components/Char";



const Title = ({title, side}) => {

  // HERE I CHANGE THE COLOR OF THE BORDER
  let theme = useTheme()
  let borderStyles = {
    borderBottom : `5px solid ${theme.mainColor}`
  }


  // HERE I CALL A CUSTOM HOOK THAT WILL DIFINE IF THE ELEMENT IS VISIBLE OR NOT
  // AND HANDLE THE ANIMATION WHEN NECESSARY
  const [isVisible, onChange, objArray] = useAnimatedSlide(title)
  let elements = objArray.map((item, i) => {
    return(
      <Char 
        key={`${i}_${item.char}`}
        isVisible={isVisible} 
        item={item}
        delay={400 + (i * 40)}
        side={side}
      />
    )
  })


  // HERE I ANIMATE THE RULLER
  let rullerSpring = useSpring({
    to: {opacity: isVisible ? 1 : 0},
    config:{ mass:2, tension: 250, friction: 35},
    delay: (600 + (objArray.length * 40))
  })



  return(
    <VisibilitySensor onChange={onChange}  >
      <span className="title-box">
        <h1 className="my-heading divided-heading">
          {elements}  
        </h1>
        <animated.hr style={{...borderStyles, ...rullerSpring}} className="title-ruller"></animated.hr>
        
      </span>
    </VisibilitySensor>
    
  )
}

export default Title