import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import useAnimatedSlide from "../../hooks/useAnimatedSlide";

import s from '../../styles/pages/home.module.scss'
import Char from '../../components/Char'


// THIS IS THE STRING I WANT TO SLIDE ANIMATE
let textString = "Hi, I'm Stephane Ribeiro. Want to come on a full stack journey trough my mind?!"

const HeroText = () => {

  // HERE I CALL A CUSTOM HOOK THAT WILL DIFINE IF THE ELEMENT IS VISIBLE OR NOT
  // AND HANDLE THE ANIMATION WHEN NECESSARY
  const [isVisible, onChange, objArray] = useAnimatedSlide(textString)
  let elements = objArray.map((item, i) => {
    return(
      <Char 
        key={i}
        isVisible={isVisible} 
        item={item}
        delay={400 + (i * 20)}
        side='right'
        isBouncy={true}
      />
    )
  })

  let firstElements = elements.slice(0, 3)
  let scdElements = elements.slice(4, 7)
  let thirdElements = elements.slice(8, 25)
  let forthElements = elements.slice(26, 62)
  let fifthElements = elements.slice(63, 79)


  return(
    <VisibilitySensor onChange={onChange}>
      <div className={`${s.heroText} bouncing-letters`}>
        <span>
          <h1 className={"my-heading divided-heading"}>
            {firstElements}
          </h1>
          <h1 className={`divided-heading ${s.heroMainH}`}>
            {scdElements}
          </h1>
          <h1 style={{color: "#96C0ED"}} className={`divided-heading ${s.heroMainH}`}>
            {thirdElements}
          </h1>
        </span>
        <h1 className={`divided-heading ${s.heroMainH}`}>
          {forthElements}
        </h1>
        <h1 className={`my-heading divided-heading ${s.heroSecH}`}>
          {fifthElements}
        </h1>
      </div>
    </VisibilitySensor>
  )
}

export default HeroText
