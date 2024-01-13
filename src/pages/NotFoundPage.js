import React, { useEffect } from "react"
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";

import useAnimatedSlide from "../hooks/useAnimatedSlide";
import { useTheme } from "../contexts/ThemeProvider";

import Char from "../components/Char";
import Slogan from "../features/slides/Slogan";
import Button from "../components/Button";

import s from '../styles/pages/notFound.module.scss'

const NotFoundPage = () => {
  let theme = useTheme()
  let style = {color : theme.mainColor}

  useEffect(() => {
    document.title = 'Stephane not found'
  }, [])

  let textString = "404 Page not found"
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
  let scdElements = elements.slice(4, 18)

  return (
    <div className="page">
        <section className={s.notFoundSection}>

          <VisibilitySensor onChange={onChange}>
            <div className={`${s.textBox} bouncing-letters`}>

              <h1 style={style} className={"notFound-heading divided-heading"}>
                {firstElements}
              </h1>
              
              <h1 className={`notFound-heading divided-heading`}>
                {scdElements}
              </h1>

            </div>
          </VisibilitySensor>

          <Slogan text="The link you clicked may be broken or the page may have been removed." />

          <Link to="/" onClick={() => theme.toggleMainColor("/projects")}>
            <Button text="Return Home?"/>
          </Link>

        </section>
    </div>
  )
}


export default NotFoundPage