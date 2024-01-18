import React, {useEffect} from "react";

import Markers from "../layouts/Markers";
import TextSection from "../features/sections/TextSection";

import useFetch from "../hooks/useFetch";
import useWidth from "../hooks/useWidth"
import { useTheme } from "../contexts/ThemeProvider";
import { dynamicUrl } from "../helpers";


function AboutPage({errorRef}) {
  let windowWidth = useWidth()

  let [aboutData, isLoading] = useFetch('stefapi/about/', errorRef, "About me")

  const theme = useTheme()

  useEffect(() => {
    document.title = 'About Stephane'
    theme.toggleMainColor('/about')
  }, [])

  let markerTitles = ['Nav', 'Hero', 'Origins', 'Development', 'Hobby']
  return (
    <div className="page">

      {windowWidth > 1200 && <Markers titles={markerTitles}/>}
      
      { 
        !isLoading 
          && 
        <TextSection 
          sectionId="sectionHero"
          textContent={aboutData['heroSection']}
          imgUrl={dynamicUrl('static', theme.darkTheme ? "dark-about-1.svg" : "light-about-1.svg")}
          title="About Me" 
          fromSide="right" 
          hasTitle={true}
          margin="50px"
        />
      }

      { 
        !isLoading 
          && 
        <TextSection 
          sectionId="sectionOrigins"
          textContent={aboutData['originsSection']}
          imgUrl={dynamicUrl('static', theme.darkTheme ? "dark-about-2.svg" : "light-about-2.svg")}
          isFlip={windowWidth > 1000 ? true : false}
          delay={650}
        />
      }
      
      { 
        !isLoading 
          && 
        <TextSection  
          sectionId="sectionDevelopment" 
          textContent={aboutData['devSection']}
          imgUrl={dynamicUrl('static',theme.darkTheme ? "dark-about-3.svg" : "light-about-3.svg")}
          delay={650}
        />
      }

      { 
        !isLoading 
          && 
        <TextSection 
          sectionId="sectionHobby"
          textContent={aboutData['hobySection']}
          imgUrl={dynamicUrl('static', theme.darkTheme ? "dark-about-4.svg" : "light-about-4.svg")}
          isFlip={windowWidth > 1000 ? true : false}
          delay={650}
        />
      }
    </div>
  )
}

export default AboutPage