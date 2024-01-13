import React, { useEffect } from "react";

import Markers from "../layouts/Markers";
import ContactSection from "../features/sections/ContactSection";

import useWidth from "../hooks/useWidth"
import { useTheme } from "../contexts/ThemeProvider";

function HomePage() {
  let windowWidth = useWidth()

  let markerTitles = ['Nav', 'Contact']

  const theme = useTheme()
  
  useEffect(() => {
    document.title = 'Contact Stephane'
    theme.toggleMainColor('/contact')
  }, [])

  return (
    <div className="page">
      {windowWidth > 1200 && <Markers titles={markerTitles}/>}
      
      <ContactSection paddingTop={true}/>
    </div>
  )
}

export default HomePage