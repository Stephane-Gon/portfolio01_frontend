import React from "react";
import { Link } from 'react-scroll';
import ReactTooltip from 'react-tooltip';

import { changeColor } from "../helpers";
import { useTheme } from "../contexts/ThemeProvider";
import styles from '../styles/components/marker.module.scss'



const Markers = ({ titles }) => {
  let theme = useTheme()
  let color = theme.darkTheme ? '#F5F5F5' : '#342E37'

  let activeClass = changeColor(theme.mainColor, 'link-marker-')

  // HERE I PUSH THE MARKERS WE NEED TO AN ARRAY
  let elements = titles.map(title => {

    return (
      <span data-tip={`${title} section`} key={`marker-id-${title}`}>
        <ReactTooltip 
            className="tollTip"
            arrowColor={theme.mainColor}
            textColor='#342E37'
            backgroundColor={theme.mainColor}
          />
        <Link
          activeClass={activeClass}
          to={`section${title}`}
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={-20}
          duration={500}
          isDynamic={true}
        >
          <svg
          className={styles.marker}
          width="17"
          height="27"
          viewBox="0 0 19 29"
          fill="none"
          stroke={ color }
          xmlns="http://www.w3.org/2000/svg"
          >
            <path className="markerPath1" d="M9.45652 0L18.913 10.087H0L9.45652 0Z" fill={ color }/>
            <path className="markerPath2" d="M9.45656 29L4.28435e-05 18.913L18.9131 18.913L9.45656 29Z" fill={ color }/>
            <rect className="markerRect" y="10.0869" width="18.913" height="8.82609" fill={ color }/>
          </svg>
        </Link>

      </span>
    )
  })

  return (
    <div className={styles.markers}>
      { elements }
    </div>
  )
}

export default Markers