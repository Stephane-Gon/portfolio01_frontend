import React from "react";

import Illustration from "../slides/Illustration";
import TextBubble from "../bubbles/TextBubble";
import Title from "../slides/Title";

const TextSection = (props) => {
  const {
    title, 
    sectionId, 
    hasTitle=false, 
    fromSide, 
    textContent,
    imgUrl,
    isFlip=false,
    delay,
    margin="0px"
  } = props

  
  return(
    <section id={sectionId} className="text-section" style={{marginTop: margin}}>
      { hasTitle && <Title title={title} side={fromSide} />}
      {
        isFlip
         ?
        <div className="section-inner-box">
          <Illustration imgUrl={imgUrl} isFlip={true} delay={delay} />
          <TextBubble textContent={textContent} isFlip={true} delay={delay} />
        </div>
         :
        <div className="section-inner-box">
         <TextBubble textContent={textContent} delay={delay} />
         <Illustration imgUrl={imgUrl} delay={delay}/>
        </div>
      }
    </section>
  )
}

export default TextSection