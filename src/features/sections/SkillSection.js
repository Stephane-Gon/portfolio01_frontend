import React, { useRef, useEffect } from "react";
import {useSpring, animated} from "react-spring"
import VisibilitySensor from "react-visibility-sensor";

import useAnimatedSlide from "../../hooks/useAnimatedSlide";
import useWidth from '../../hooks/useWidth'
import { dynamicUrl } from "../../helpers";

import ToolBubble from "../../features/bubbles/toolBubble";

import stylesB from '../../styles/components/bubbles.module.scss'
import stylesS from '../../styles/pages/skills.module.scss'
import stylesH from '../../styles/pages/home.module.scss'

const SkillSection = ({id, skill, tools, color}) => {
  let windowWidth = useWidth()
  
  let skillRef = useRef(null)
  let toolRef = useRef(null)

  let [isVisible, onChange] = useAnimatedSlide('')
  const spring = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0.2
    },
    config: { mass:2, tension: 250, friction: 30 },
    delay: 200
  })

  const  { x } = useSpring({
    from: { x: 0 },
    to: { x: 1 },
    config: { mass: 1, tension: 500, friction: 7 },
    delay: 1500,
    loop: true
  })

  let toolElements = []
  if(tools) {
    toolElements = tools.map((tool, i) => {
      return(
        <ToolBubble key={i} content={tool} color={color} />
      )
    })
  }

  useEffect(() => {
    let bubble = skillRef.current
    if(bubble === null) {return}

    const expandSkillBubble = () => {
      if(windowWidth > 1200) {
        bubble.classList.add(stylesB.bubble5)
      }
      else {
        bubble.classList.add(stylesB.bubble6)
      }

      if(color === 'Red') {
        toolRef.current.classList.add(stylesS.slideToolBubbles) 
      }
      else {
        toolRef.current.classList.add(stylesH.slideToolBubbles) 
      }      
    }
    bubble.addEventListener('click', expandSkillBubble)

    return () => {bubble.removeEventListener('click', expandSkillBubble)}
  }, [skill, tools])

  return(
    <>
      {
        color === 'Red'
          ?
        <section id={id} className={stylesS.skillSection}>
          {
            skill 
              && 
              <VisibilitySensor onChange={onChange}>
                <animated.div
                  ref={skillRef}
                  style={{
                    ...spring, 
                    rotate: x
                      .to({
                        range: [0, 0.1, 0.3, 0.5, 0.7, 1],
                        output: [0, -5,  5, -5, 5, 0]
                      })
                      .to(x => `${x}deg`)
                  }}
                  className={`${stylesB.skillPageBubble} ${stylesB.skillBubble}`}
                >
                  <div className={stylesB.bubbleElipse}>
                    <div className={stylesB.bubbleShinny}></div>
                  </div>
                  <span className={stylesB.bubbleText}>
                    <h2>{ skill.title }</h2>
                    <p>{ skill.description }</p>
                  </span>
                  <img
                    src={dynamicUrl('data', skill.svg)}
                    alt={`${skill.title} logo`}
                    className={stylesB.bubbleSkillLogo}
                  />
                </animated.div>
              </VisibilitySensor>
          }
          {
            tools
              &&
            <div ref={toolRef}  className={stylesS.toolBubbles}>
              {toolElements}
            </div>
          }
        </section>
          :
        <div className={stylesH.skillsWrapper}>
          {
            skill 
              && 
              <VisibilitySensor onChange={onChange}>
                <animated.div
                  ref={skillRef}
                  style={{
                    ...spring,
                    rotate: x
                      .to({
                        range: [0, 0.1, 0.3, 0.5, 0.7, 1],
                        output: [0, -5,  5, -5, 5, 0]
                      })
                      .to(x => `${x}deg`)
                  }}
                  className={`${stylesB.homeSkillBubble} ${stylesB.skillBubble}`}
                >
                  <div className={stylesB.bubbleElipse}>
                    <div className={stylesB.bubbleShinny}></div>
                  </div>
                  <span className={stylesB.bubbleText}>
                  <h2>{ skill.title }</h2>
                    <p>{ skill.description }</p>
                  </span>
                  <img
                    src={dynamicUrl('data', skill.svg)}
                    alt={`${skill.title} logo`}
                    className={stylesB.bubbleSkillLogo}
                  />
                </animated.div>
              </VisibilitySensor>
          }
          {
            tools
              &&
            <div ref={toolRef}  className={stylesH.homeToolBubbles}>
              {toolElements}
            </div>
          }
    
        </div>
      }
      
    </>
  )
}

export default SkillSection