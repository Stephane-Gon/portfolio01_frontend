import React, { useState } from "react"
import { Link } from "react-router-dom"

import Title from "../../features/slides/Title"
import ProjectsSlogan from "./ProjectsSlogan"
import ProjectCard from "./ProjectCard"
import Button from "../../components/Button"

import s from '../../styles/pages/home.module.scss';
import bubStyle from '../../styles/components/bubbles.module.scss'
import sliderStyle from '../../styles/components/slider.module.scss'

import { useTheme } from "../../contexts/ThemeProvider"
import useWidth from "../../hooks/useWidth"
import { dynamicUrl } from "../../helpers";


const ProjectsSection = ({projects}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
      setCurrentIndex(index)
  }

  let theme = useTheme()
  let slideBackground = {background : theme.darkTheme ? '#F5F5F5' : '#342E37'}
  let textColor = {color : theme.darkTheme ? '#342E37' : '#F5F5F5'}

  let windowWidth = useWidth()

  return (
    <section id="sectionProjects" className={s.projectsSection}>
      <Title title="Projects" side="top" />
      <ProjectsSlogan />

      {
        windowWidth > 1000
          ?
        <div className={s.projectCards}>
          {projects && <ProjectCard projects={projects[0]}/>}
          {projects && <ProjectCard projects={projects[1]} isFlip={true}/>}
          {projects && <ProjectCard projects={projects[2]}/>}
        </div>
          :
        <div className={sliderStyle.slider}>
          
            {
              projects
                &&
              <div className={sliderStyle.projectSlide} style={slideBackground}>
                <img 
                  className={sliderStyle.proCardImg} 
                  src={dynamicUrl('data', projects[currentIndex]['mainImg'])} 
                  alt={`${projects['title']}`}
                />

                <div className={sliderStyle.proCardText}>
                  <h2 style={textColor}>{projects[currentIndex]['title']}</h2>
                  <p style={textColor}>{projects[currentIndex]['slogan']}</p>
                  <Link to={`/projects/${projects[currentIndex]['id']}`} onClick={() => theme.toggleMainColor("/projects")}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                  
                </div>

              </div>
            }

          <div className={sliderStyle.doots}>
            {
              projects
                &&
              projects.map((slide, i) => {
                return (
                  <div 
                    className={`${sliderStyle.blueDoot} ${bubStyle.bubble} ${currentIndex === i && sliderStyle.blueActiveDoot}`} 
                    key={i} 
                    onClick={() => goToSlide(i)}
                  >
                    <div className={`${sliderStyle.blueDootElipse} ${bubStyle.bubbleElipse}`}>
                      <div className={bubStyle.bubbleShinny}></div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      }
      
      <Link to="/projects/">
        <Button text="More Projects"/>
      </Link>
    </section>
  )
}


export default ProjectsSection