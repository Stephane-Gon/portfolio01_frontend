import React from "react"
import { useTheme } from '../contexts/ThemeProvider'


function Logo(props) {
  // UPDATES LAST NAME FROM LOGO ACCORDING TO THE DARK MODE
  const theme = useTheme()
  const stylesLast = {
    color : theme.darkTheme ? '#F5F5F5' : '#342E37'
  }
  if(props.footer) stylesLast.color = '#F5F5F5'

  // UPDATES FIRST NAME FROM LOGO ACCORDING TO THE PAGE WE ARE IN
  const stylesFirst = {
    color : theme.mainColor
  }
  
  return(
    <div className="logo-box" onClick={() => theme.toggleMainColor('/')}>
      <h1 style={stylesFirst} className="logo-first">STEF</h1>
      <h4 style={stylesLast} className="logo-last"> RIBEIRO </h4>
    </div>
  )
}

export default Logo