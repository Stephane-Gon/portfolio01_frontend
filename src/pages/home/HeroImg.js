import React from "react";
import  { useSpring, animated } from "react-spring"
import { dynamicUrl } from "../../helpers";
import { useTheme } from "../../contexts/ThemeProvider"

import s from '../../styles/pages/home.module.scss'


const HeroImg = () => {
  let theme = useTheme()
  let background = {
    backgroundColor : theme.darkTheme ?
                      'rgba(245, 245, 245, 0.937)'
                        :
                      'rgba(52, 46, 55, 0.89)'
    }

  const spring = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: { mass:1, tension: 200, friction: 30, duration: 1000}
  })

  let url = dynamicUrl('static', 'img_44_min.webp')
  let smalUrl = dynamicUrl('static', 'img_44_small.webp')

  return (
    <div className={s.heroImgBox} style={background}>
      <animated.img
        style={spring}
        className={s.heroImg} 
        src={url}
        srcset={`${smalUrl} 500w`}
        sizes="(max-width: 500px) 500px, 300vw"
        alt="Stephane Ribeiro"
      >    
      </animated.img>
    </div>
    
  )
}

export default HeroImg