import React from "react";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import styles from '../styles/components/footer.module.scss';

import { useTheme } from "../contexts/ThemeProvider";

function Footer() {
  let theme = useTheme()
  let iconColor = {
    color: theme.mainColor
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Link to="/">
          <Logo footer={true}/>
        </Link>
        
        <p className={styles.footerRights}>@ Copyright 2022. All rights reserved to Stéphane Ribeiro.</p>
        
        <span className={styles.socialLinks}>  
          <a href="https://www.linkedin.com/in/stephane-ribeiro-3293b624b/" target="_blank" rel="noreferrer">
            <i style={iconColor} className="fa-brands fa-linkedin linkdin-icon"></i>
          </a>
          <a href="https://github.com/Stephane-Gon" target="_blank" rel="noreferrer">
            <i style={iconColor} className="fa-brands fa-github git-hub-icon"></i>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer