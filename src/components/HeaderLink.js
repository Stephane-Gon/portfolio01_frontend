import React from "react";
import { NavLink } from 'react-router-dom'

import { changeColor } from "../helpers";
import { useTheme} from "../contexts/ThemeProvider";
import styles from '../styles/components/header.module.scss';

function HeaderLink({path, text, side=false}) {

  // HERE I CHANGE THE COLOR OF THE LINK
  let theme = useTheme()
  let color = {
    color: theme.darkTheme ? '#F5F5F5' : '#342E37'
  }

  // HERE I CHANGE THE BACKGROUND COLOR WHEN HOVERED
  let dynamicClass
  if (!side) {
    dynamicClass = changeColor(theme.mainColor, 'header-a-')
  }
  else {
    dynamicClass = changeColor(theme.mainColor, 'sideMenu-a-')
  }

  return (
    <>
      {
        !side 
          ?
        <NavLink
          reloadDocument={true}
          style={color}
          to={path}
          className={
            ({isActive}) => 
              isActive 
              ? 
              `${styles.activeLink} ${styles.marginRight} ${dynamicClass}` 
              : 
              `${styles.navbarLink} ${styles.marginRight} ${dynamicClass}`
          }
        >
          {text}
        </NavLink>
          :
        <NavLink
          reloadDocument={true}
          style={color}
          to={path}
          className={
            ({isActive}) => 
              isActive 
              ? 
              `${styles.activeLink} ${dynamicClass} ` 
              : 
              `${styles.navbarLink}`
          }
        >
          {text}
        </NavLink>
      }
    </>
  )
}

export default HeaderLink