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
  let [data, isLoading] = useFetch(`/stefapi/projects/${params['id']}`, errorRef, "Single Project")
  
  let theme = useTheme()

  useEffect(() => {
    document.title = 'Project'
    theme.toggleMainColor('/projects')
  }, [])

  let windowWidth = useWidth()

  return (
    <div className="page">
      {windowWidth > 1200 && <Markers titles={markerTitles}/>}
      {
        !isLoading 
          && 
        <HeroSection 
          title={data['project'][0]['title']}
          slogan={data['project'][0]['slogan']} 
          img={data['project'][0]['mainImg']} 
          uiux={data['project'][0]['uiUx']} 
          frontend={data['project'][0]['frontend']} 
          backend={data['project'][0]['backend']} 
        />
      }
      {!isLoading && <ResumeSection content={data['project'][0]} />}
      {!isLoading && data['project'][0]['uiUx'] && <DesignSection content={data}/>}
      
      <section id="sectionTools" className={s.toolsSection}>

        <span className="title-slogan-wrapper">
          <Title title="Tools I Used" side="right" />
          <Slogan text="These are the tools I used during the whole process."/>
        </span>
        {
          !isLoading
            &&
          data['project'][0]['uiUx']
            &&
          <ToolsSection 
            tools={JSON.parse(data['uiUxTools'])} 
            title="UI/UX"
            slogan="I used these tools for the design."  
          />
        }
        {
          !isLoading
            &&
          data['project'][0]['frontend']
            &&
          <ToolsSection 
            tools={JSON.parse(data['frontendTools'])} 
            title="Frontend"
            slogan="I used these tools to create the frontend."  
          />
        }
        {
          !isLoading
            &&
          data['project'][0]['backend']
            &&
          <ToolsSection 
            tools={JSON.parse(data['backendTools'])} 
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