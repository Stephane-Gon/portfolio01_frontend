import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import useWidth from "../../hooks/useWidth"
import { useTheme } from "../../contexts/ThemeProvider";

import Title from "../../features/slides/Title";
import Slogan from "../../features/slides/Slogan";
import Markers from "../../layouts/Markers";
import HeroSection from './HeroSection'
import ResumeSection from './ResumeSection'
import DesignSection from './DesignSection'
import ToolsSection from './ToolsSection'
import NextProject from "./NextProject";

import s from '../../styles/pages/projects.module.scss'


let markerTitles = ['Nav', "Hero", "Resume", "Design", "Tools"]
const SingleProjectPage = ({errorRef}) => {
  const params = useParams()
  let [data, isLoading] = useFetch(`stefapi/projects/${params['id']}`, errorRef, "Single Project")
  
  console.log("🚀 ~ SingleProjectPage ~ data:", data)
  let theme = useTheme()

  useEffect(() => {
    document.title = 'Project'
    theme.toggleMainColor('/projects')
  }, [theme])

  let windowWidth = useWidth()

  return (
    <div className="page">
      {windowWidth > 1200 && <Markers titles={markerTitles}/>}
      {
        !isLoading 
          && 
        <HeroSection 
          title={data.project.title}
          slogan={data.project.slogan} 
          img={data.project.mainImg} 
          uiux={data.project.uiUx} 
          frontend={data.project.frontend} 
          backend={data.project.backend} 
        />
      }
      {!isLoading && <ResumeSection content={data.project} />}
      {!isLoading && data.project.uiUx && <DesignSection content={data}/>}
      
      <section id="sectionTools" className={s.toolsSection}>

        <span className="title-slogan-wrapper">
          <Title title="Tools I Used" side="right" />
          <Slogan text="These are the tools I used during the whole process."/>
        </span>
        {
          !isLoading
            &&
            data.project.uiUx
            &&
          <ToolsSection 
            tools={data.uiTools} 
            title="UI/UX"
            slogan="I used these tools for the design."  
          />
        }
        {
          !isLoading
            &&
            data.project.frontend
            &&
          <ToolsSection 
            tools={data.frontendTools} 
            title="Frontend"
            slogan="I used these tools to create the frontend."  
          />
        }
        {
          !isLoading
            &&
            data.project.backend
            &&
          <ToolsSection 
            tools={data.backendTools} 
            title="Backend"
            slogan="I used these tools to create the backend."  
          />
        }
      </section>

      <NextProject />
      

    </div>
  )
}


export default SingleProjectPage