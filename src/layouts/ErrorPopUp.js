import React from "react";

import { useTheme } from "../contexts/ThemeProvider";

const ErrorPopUp = React.forwardRef((props, ref) => {
  let theme = useTheme()
  let popUpStyle = {background : theme.darkTheme ? '#F5F5F5' : '#342E37'}
  let backgroundStyle = {background : theme.darkTheme ? '#f5f5f57c' : '#342e37a6'}
  let textStyle = {color : theme.darkTheme ? '#342E37' : '#F5F5F5'}

  function handleClick() {
    ref.current.style.display = 'none'
  }

  return (
    <div ref={ref} style={backgroundStyle} className="error-background" data-error="false" >
      <div style={popUpStyle}  className="error-popUp">

        <h3 style={textStyle}>We have a little problem.</h3>
        <h5 style={textStyle}></h5>

        <hr style={{background : theme.mainColor}} className="error-ruller"></hr>
        <p style={{color : theme.mainColor}} onClick={handleClick}>Close</p>

        <i style={{color : theme.mainColor}} className="fa-sharp fa-solid fa-circle-exclamation error-icon"></i>

      </div>
    </div>
    
  )
})

export default ErrorPopUp