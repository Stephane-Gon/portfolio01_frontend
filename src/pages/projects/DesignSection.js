import React from "react";

import Title from "../../features/slides/Title";
import Slogan from "../../features/slides/Slogan";
import Slider from "../../features/slides/Slider";

import s from '../../styles/pages/projects.module.scss'
import { dynamicUrl } from "../../helpers";


const DesignSection = ({content}) => {
  let project = content.project
  let allImgs = content.allImgs

  return (
    <section id="sectionDesign" className={s.designSection}>
      <span className="title-slogan-wrapper">
        <Title title="UI/UX Design" side="right" />
        <Slogan text="For the UI/UX Design, I decided to use Adobe XD and Figma to create a style board. I explored different fonts and individual components so the client would get a feel for how the website design would look."/>
      </span>

      {
        project.colorsPanel
          &&
        <div className={s.designInnerSection}>
          <h4>Colors</h4>
          {project.colorsText && <p>{project.colorsText}</p>}

          <img 
            className={s.panel} 
            src={dynamicUrl('data', project.colorsPanel)}  
            alt={`${project.title}`}
          />
        </div>
      }

      {
        project.fontsPanel
          &&
        <div className={s.designInnerSection}>
          <h4>Fonts</h4>
          {project.fontsText && <p>{project.fontsText}</p>}

          <img 
              className={s.panel} 
              src={dynamicUrl('data', project.fontsPanel)}  
              alt={`${project.title}`}
            />
        </div>
      }
      {
        allImgs
         &&
        <Slider images={allImgs}/>
      }
    </section>
  )
}

export default DesignSection