import React from "react";
import { useSpring, animated } from "react-spring"
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";


import Button from "../../components/Button";

import { useTheme } from "../../contexts/ThemeProvider";
import useAnimatedSlide from "../../hooks/useAnimatedSlide";
import s from '../../styles/pages/home.module.scss';
import { dynamicUrl } from "../../helpers";


const ProjectCard = ({projects, isFlip=false}) => {
  let element

  let theme = useTheme()
  let dynamicStyle = {
    background : theme.darkTheme ? '#F5F5F5' : '#342E37',
    color: theme.darkTheme ? '#342E37' : '#F5F5F5',
  }

  const [isVisible, onChange] = useAnimatedSlide('')
  let leftSpring = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      translateX: isVisible ? '50px' : "-200px"
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: 300
  })
  let rightSpring = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      translateX: isVisible ? '-50px' : "200px"
    },
    config: {mass:2, tension: 250, friction: 35},
    delay: 300
  })

  let url = dynamicUrl('data', projects['mainImg'])

  if(projects) {

      if(!isFlip) {
        element = (
          <VisibilitySensor onChange={onChange}>
            <div className={s.proCard}>
              <animated.div className={`${s.cardImgWrapper} card-img-wrapper`} style={leftSpring}>
                <img 
                  className={s.proCardImg} 
                  src={url}  
                  alt={`${projects['title']}`}
                />
                <span className="card-img-cover">
                  <Link to={`/projects/${projects['id']}`}>
                    <Button text="Case Study"/>
                  </Link>
                </span>
              </animated.div>
              <animated.span className={s.cardText} style={{...dynamicStyle, ...rightSpring}}>
                <h2>{projects['title']}</h2>
                <p>{projects['slogan']}</p>
              </animated.span>
            </div>
          </VisibilitySensor>
        )
      }
      else {
        element = (
          <VisibilitySensor onChange={onChange}>
            <div className={s.proCard}>
              <animated.span className={s.cardTextFlip} style={{...dynamicStyle, ...leftSpring}}>
                <h2>{projects['title']}</h2>
                <p>{projects['slogan']}</p>
              </animated.span>
              <animated.div className={`${s.cardImgWrapper} card-img-wrapper`} style={rightSpring}>
                <img 
                  className={s.proCardImg} 
                  src={url} 
                  alt={`${projects['title']}`}
                />
                <span className="card-img-cover">
                  <Link to={`/projects/${projects['id']}`} onClick={() => theme.toggleMainColor("/projects")}>
                    <Button text="Case Study"/>
                  </Link>
                </span>
              </animated.div>
              
            </div>
          </VisibilitySensor>
        )
      }
    
  }  

  return (
    <>
      {element}
    </>
  )
}

export default ProjectCard