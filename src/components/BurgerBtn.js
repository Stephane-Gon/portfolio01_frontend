import React, {useRef} from "react";
import { useTheme } from "../contexts/ThemeProvider";

import styles from '../styles/components/header.module.scss';


const BurgerBtn = ({setFunc, menuOn}) => {

  // Here I get the main color and the theme preference
  let theme = useTheme()

  // Here I give a reference to each of the burger lines and the nav bar
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)

  let lineBackground = {background : theme.mainColor}

  const burgerClick = () => {
    if(menuOn === false) {
      line1.current.style.transform = 'rotate(45deg)'
      line2.current.style.transform = 'scaleY(0)'
      line3.current.style.transform = 'rotate(-45deg)'
      setFunc(true)
    }
    else {
      line1.current.style.transform = 'rotate(0deg)'
      line2.current.style.transform = 'scaleY(1)'
      line3.current.style.transform = 'rotate(0deg)'
      setFunc(false)
    }
  }

  return(
    <div onClick={burgerClick} className={styles.burgerLines}>
        <span ref={line1} style={lineBackground} className={`${styles.line} ${styles.line1}`}></span>
        <span ref={line2} style={lineBackground} className={`${styles.line} ${styles.line2}`}></span>
        <span ref={line3} style={lineBackground} className={`${styles.line} ${styles.line3}`}></span>
    </div>
  )
}

export default BurgerBtn