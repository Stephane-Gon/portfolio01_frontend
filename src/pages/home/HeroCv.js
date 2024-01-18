import React from "react";
import { Link } from "react-router-dom"
import { useTheme } from "../../contexts/ThemeProvider"
import { dynamicUrl } from "../../helpers";

import s from '../../styles/pages/home.module.scss'


const HeroCv = () => {
  let theme = useTheme()
  let url = dynamicUrl('cv', 'stephane-cv.pdf')

  let shadow = {
    boxShadow : theme.darkTheme ?
                'rgba(255, 255, 255, 0.286) 0px 0px 2px 3px'
                  :
                'rgba(0, 0, 0, 0.2) 0px 0px 2px 3px'
  }

  return (
    <span className={s.heroCvBox}>
      <a className={s.center} rel="noreferrer" href={url} target="_blank" download="stephane-cv.pdf" >
        <button className={s.btn} style={shadow}>
          <svg width="300px" height="60px" viewBox="0 0 300 60" className={s.border}>
            <polyline points="299,1 299,59 1,59 1,1 299,1" className={s.bgLine} />
            <polyline points="299,1 299,59 1,59 1,1 299,1" className={s.hlLine} />
          </svg>
          <span className={s.heroCvLink}>
            DOWNLOAD CV
            <i className={`fa-solid fa-download ${s.heroCvIcon}`}></i>
          </span>
        </button>
      
      </a>
    </span>
  )
}

export default HeroCv