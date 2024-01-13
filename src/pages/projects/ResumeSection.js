import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring"

import Title from '../../features/slides/Title'
import Button from '../../components/Button'

import { dynamicUrl } from "../../helpers";
import useAnimatedSlide from "../../hooks/useAnimatedSlide";
import { useTheme } from "../../contexts/ThemeProvider";
import s from '../../styles/pages/projects.module.scss'

const ResumeSection = ({content}) => {
  let theme = useTheme()
  let backgroundStyle = {background: theme.darkTheme ? '#f5f5f5da' : '#342e37e0'}

  const [isVisible, onChange] = useAnimatedSlide("")
  let springText = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      translateX: isVisible ? '0px' : '-15%'
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: 300
  })
  let springImg = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      translateX: isVisible ? '0px' : '15%'
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: 300
  })
  let springBtn = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: 300
  })


  return (
    <section id="sectionResume" className={s.resumeSection}>
      <Title title="The Project" side="right" />
      
      <VisibilitySensor onChange={onChange} partialVisibility={true}>
        <>
          <animated.p style={springText} className={s.resumeText}>{content['description']}</animated.p>
          <animated.div style={springImg} className={s.resumeImgWrapper}>
            <div style={backgroundStyle} className={s.imgWrapper}>
              <img 
                  className={s.pcImg} 
                  src={dynamicUrl('media', content['mainImg'])}  
                  alt={`Computer version of ${content['title']} website.`}
                />
            </div>
            {
              content[`phoneImg`]
                &&
              <div style={backgroundStyle} className={`${s.imgWrapper} ${s.phoneImgWrapper}`}>
                <img 
                    className={s.phoneImg} 
                    src={dynamicUrl('media', content['phoneImg'])}  
                    alt={`Phone version of ${content['title']} website.`}
                  />
              </div>
            }
            
          </animated.div>
          {
            content['link']
              &&
            <animated.div style={springBtn} className={s.resumeLink} >
              <a href={content['link']} target="_blank" rel="noreferrer">
                <Button text="Visit Website"/>
              </a>
            </animated.div>
            
          }
        </>
      </VisibilitySensor>
      
    </section>
  )
}


export default ResumeSection