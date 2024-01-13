import React from "react";
import { useSpring, animated } from "react-spring";


import Title from '../../features/slides/Title'
import Slogan from '../../features/slides/Slogan'

import { useTheme } from "../../contexts/ThemeProvider";
import { dynamicUrl } from "../../helpers";
import s from '../../styles/pages/projects.module.scss'

const HeroSection = ({title, slogan, img, uiux, frontend, backend}) => {
  let theme = useTheme()
  let backgroundStyle = {background: theme.darkTheme ? '#f5f5f5da' : '#342e37e0'}
  let colorStyle = {color: theme.darkTheme ? '#342E37' : '#F5F5F5'}
  
  let devText = ""

  if(uiux && frontend && backend) {
    devText = "Full Stack Development"
  }
  else if(frontend && backend) {
    devText = "Frontend & Backend Development"
  }
  else if(uiux && frontend) {
    devText = "Design & Frontend Development"
  }
  else if(uiux && backend) {
    devText = "Design & Backend Development"
  }
  else if (frontend) {
    devText = "Frontend Development"
  }
  else if (backend) {
    devText = "Backend Development"
  }
  else {
    devText = "Project Design"
  }


  let spring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: 300
  })

  let url = dynamicUrl('media', img)

  return (
    <section id="sectionHero" className={s.heroSection}>
      <span className="title-slogan-wrapper">
        <Title title={title} side="top"/>
        <Slogan text={slogan} />
      </span>
      <animated.div className={`${s.heroImgWrapper} ${s.imgWrapper} `} style={{...backgroundStyle, ...spring}}>
        <img 
          className={s.heroImg} 
          src={url}  
          alt={`${title}`}
        />
        <span><h2 style={colorStyle}>{devText}</h2></span>
      </animated.div>
    </section>
  )
}


export default HeroSection