import React from "react";
import { Link } from "react-router-dom";

import { useTheme } from "../contexts/ThemeProvider";
import Logo from "../components/Logo";


function SideLogo() {
  let theme = useTheme()
  let rullerColor = {
    borderBottom : `${theme.mainColor} 3px solid`
  }

  return (
    <Link className="side-logo" to="/">
      <Logo />
      <span style={rullerColor} className="logo-ruller"></span>
    </Link>
  )
}

export default SideLogo