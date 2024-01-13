import React from "react";

import { useTheme } from "../contexts/ThemeProvider";

const Input = (props) => {
  const {placeholder, gridArea, textArea=false, onchange, emailRef=null, value} = props
  const theme = useTheme()

  // DYNAMIC STYLES
  const gridStyle = {gridArea: gridArea}
  const inputStyle = {
    color: theme.darkTheme ? '#F5F5F5' : '#342E37',
    background: theme.darkTheme ? '#342E37' : '#F5F5F5',
    borderBottom: `5px solid ${theme.mainColor}`
  }
  const labelStyle = {color: theme.darkTheme ? '#F5F5F5' : '#342E37'}

  return ( 
    <div className="input-wrapper" style={gridStyle}>
      {
        textArea ?
          <textarea 
            required
            rows="5"
            cols="50"
            className="my-input my-textarea"
            id={`${placeholder.toLowerCase()}-input`} 
            name={placeholder}
            style={inputStyle}
            onChange={onchange}
            value={value}
          >
          </textarea>
          :
          <input 
            required
            className="my-input"
            type={`${placeholder === "Email" ? "email" : "text"}`} 
            id={`${placeholder.toLowerCase()}-input`} 
            name={placeholder} 
            style={inputStyle}
            onChange={onchange}
            ref={emailRef ? emailRef : null}
            value={value}
          />
      }
      <label 
        htmlFor={`${placeholder.toLowerCase()}-input`}
        className={`my-label ${textArea && "my-labelarea"} ${value && 'active-label'}`} 
        style={labelStyle} 
      >
        {placeholder}:
      </label>
    </div>
    
  )
}

export default Input