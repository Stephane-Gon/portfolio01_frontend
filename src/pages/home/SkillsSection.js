import React from "react";

import Title from "../../features/slides/Title";
import SkillsText from "./SkillsText";
import SkillSection from "../../features/sections/SkillSection";

import s from '../../styles/pages/home.module.scss';


const SkillsSection = ({skillsContent}) => {

  return (
    <section id="sectionSkills&Tools" className={s.skillsSection}>
      <Title title="Skills & Tools" side="top" />
      <SkillsText />
    
      { 
        skillsContent 
          && 
        <SkillSection 
          skill={skillsContent['uiuxSkill']} 
          tools={skillsContent['uiTools']}
          color="Blue"        
        /> 
      }
      { 
        skillsContent 
          && 
        <SkillSection 
          skill={skillsContent['frontendSkill']} 
          tools={skillsContent['frontendTools']}
          color="Blue"        
        /> 
      }
      { 
        skillsContent 
          && 
        <SkillSection 
          skill={skillsContent['backendSkill']} 
          tools={skillsContent['backendTools']}
          color="Blue"        
        /> 
      }
    </section>
  )
}

export default SkillsSection