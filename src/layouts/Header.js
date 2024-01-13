import React, {useState} from "react"
import { NavLink } from 'react-router-dom'

import { useTheme } from "../contexts/ThemeProvider";
import useWidth from '../hooks/useWidth'

import HeaderLink from "../components/HeaderLink";
import MoonSun from "../components/MoonSun";
import Button from "../components/Button";
import Logo from "../components/Logo";
import SideMenu from "./SideMenu";
import BurgerBtn from "../components/BurgerBtn";

import styles from '../styles/components/header.module.scss';


function Header() {
  // Here I set a state to know if the side menu is on or off
  const [sideMenu, setSideMenu] = useState(false)
  
  // Here I get the user Theme
  let windowWidth = useWidth()
  
  // Here I get the main color and the theme preference
  let theme = useTheme()
  
  return(
    <>
      <nav className={styles.navbar} id="sectionNav">
        <NavLink to={'/'} onClick={() => theme.toggleMainColor("/")}>
          <Logo />
        </NavLink>
        
        {
          windowWidth > 1200
            ?
          <div className={styles.navbarLinks}>
          
            <HeaderLink path="/about" text="ABOUT"/>
            <HeaderLink path="/skills&tools" text="SKILLS & TOOLS"/>
            <HeaderLink path="/projects" text="PROJECTS"/>

            <NavLink to={'/contact'}>
              <Button margin={styles.marginRight} text="Contact" />
            </NavLink>
            
            <MoonSun />
          </div>
            :
          <BurgerBtn setFunc={setSideMenu} menuOn={sideMenu} /> 
        }

      </nav>
      {windowWidth <= 1200 && <SideMenu menuOn={sideMenu} />}
    </>
  )
}

export default Header