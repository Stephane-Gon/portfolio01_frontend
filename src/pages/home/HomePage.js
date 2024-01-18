import React, { useEffect } from "react";

import Markers from "../../layouts/Markers";
import HeroSection from "./HeroSection";
import TextSection from "../../features/sections/TextSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "../../features/sections/ContactSection";

import useFetch from "../../hooks/useFetch";
import useWidth from "../../hooks/useWidth"
import { useTheme } from "../../contexts/ThemeProvider";
import { dynamicUrl } from "../../helpers";

function HomePage({errorRef}) {
  let [homeData] = useFetch('stefapi/home', errorRef, "Home")
  let windowWidth = useWidth()

  const theme = useTheme()

  let name = `${theme.darkTheme ? "dark-home-1.svg" : "light-home-1.svg"}`
  let url = dynamicUrl('static', name)

  useEffect(() => {
    document.title = 'Stephane Ribeiro'
    theme.toggleMainColor('/')
  }, [])

  let markerTitles = ['Nav', 'Hero', 'About', 'Skills&Tools', 'Projects', 'Contact']

  return (
    <div className="page">
      {windowWidth > 1200 && <Markers titles={markerTitles}/>}
      
      <HeroSection />
      <TextSection 
        sectionId="sectionAbout" 
        textContent={homeData['aboutSection']}
        imgUrl={url}
        hasTitle={true}
        title="About Me" 
        fromSide="top"
        delay={700} 
        />

      <SkillsSection skillsContent={homeData['skillsSection']} />
      <ProjectsSection projects={homeData['projects']}/>
      <ContactSection />
    </div>
  )
}

export default HomePage