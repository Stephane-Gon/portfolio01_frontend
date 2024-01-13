import React, { useEffect } from "react";

import Markers from "../layouts/Markers";
import Title from "../features/slides/Title";
import Slogan from "../features/slides/Slogan";
import SkillSection from "../features/sections/SkillSection";

import useFetch from "../hooks/useFetch";
import useWidth from "../hooks/useWidth"
import { useTheme } from "../contexts/ThemeProvider";

const SkillsToolsPage = ({errorRef}) => {
  let windowWidth = useWidth()
  
  let [data, isLoading] = useFetch('/stefapi/skills&tools/', errorRef, "Skills&Tools")

  let markerTitles = ['Nav', 'Uiux', 'Frontend', 'Backend']

  const theme = useTheme()
  
  useEffect(() => {
    document.title = 'Stephane skills & tools'
    theme.toggleMainColor('/skills&tools')
  }, [])

  return (
    <div className="page">
      {windowWidth > 1200 && <Markers titles={markerTitles}/>}

      <div className="off-section-title-box title-slogan-wrapper" >
        <Title title="Skills" side="top" />
        <Slogan text="These are the skills I know."/>
      </div>
      { !isLoading 
          && 
        <SkillSection 
          id="sectionUiux" 
          skill={data['uiuxSkill']} 
          tools={data['uiTools']}
          color="Red"
        /> 
      }
      { !isLoading 
          && 
        <SkillSection 
          id="sectionFrontend" 
          skill={data['frontendSkill']} 
          tools={data['frontendTools']}
          color="Red"
        /> 
      }
      { !isLoading 
          && 
        <SkillSection 
          id="sectionBackend" 
          skill={data['backendSkill']} 
          tools={data['backendTools']}
          color="Red"
        /> 
      }

    </div>
  )
}

export default SkillsToolsPage