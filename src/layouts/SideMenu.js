import React from "react";
import { useSpring, animated } from "react-spring"
import { NavLink } from 'react-router-dom'
import { useTheme } from "../contexts/ThemeProvider";
import useWidth from "../hooks/useWidth"

import MoonSun from "../components/MoonSun";
import SideLogo from "../layouts/SideLogo"
import Logo from "../components/Logo";
import HeaderLink from "../components/HeaderLink";
import Button from "../components/Button";


import s from '../styles/components/header.module.scss';

const SideMenu = ({menuOn}) => {
  let windowWidth = useWidth()

  let theme = useTheme()
  let menuBackground = {background: theme.darkTheme ? '#342E37' : '#F5F5F5'}
  let iconColor = {
    color: theme.mainColor
  }

  let spring = useSpring({
    to: {
      translateX: menuOn ? '0' : '-100%'
    },
    config: {mass:3, tension: 300, friction: 35},
    delay: 100
  })

  return (
    <animated.div className={s.sideMenu} style={{...menuBackground, ...spring}}>
      {
        windowWidth < 768
          ?
        <span className={s.logoPhone}><Logo /></span>
          :
        <SideLogo />
      }

      <div className={s.logoWrapper}>
        <MoonSun />
      </div>

      <div className={s.links}>
        <HeaderLink path="/" text="HOME" side={true}/>
        <HeaderLink path="/about" text="ABOUT" side={true}/>
        <HeaderLink path="/skills&tools" text="SKILLS & TOOLS" side={true}/>
        <HeaderLink path="/projects" text="PROJECTS" side={true}/>

        <NavLink className={s.btnLink} to={'/contact'} reloadDocument={true} onClick={() => theme.toggleMainColor("/contact")}>
          <Button margin={s.marginRight} text="Contact" />
        </NavLink>
      </div>

      <span className={s.socialLinks}>
        <a href="https://www.linkedin.com/in/stephane-ribeiro-3293b624b/" target="_blank" rel="noreferrer">
          <i style={iconColor} className="fa-brands fa-linkedin linkdin-icon"></i>
        </a>

        <a href="https://github.com/Stephane-Gon" target="_blank" rel="noreferrer">
          <i style={iconColor} className="fa-brands fa-github git-hub-icon"></i>
        </a>
      </span>
      
    </animated.div>
  )
}

export default SideMenu