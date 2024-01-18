import React from "react";
import { Link } from "react-router-dom";

import s from '../../styles/pages/projects.module.scss'
import { useTheme } from "../../contexts/ThemeProvider";
import useWidth from "../../hooks/useWidth"
import { dynamicUrl } from "../../helpers";

import Button from "../../components/Button";

const ProjectSection = ({id, content}) => {
  let windowWidth = useWidth()

  let theme = useTheme()
  
  let backStyle = {background: theme.darkTheme ? '#F5F5F5' : '#342E37'}
  let colorStyle = {color : theme.darkTheme ?  '#342E37' : '#F5F5F5'}
  let blurStyle = {background: theme.darkTheme ? '#f5f5f5c5' : '#342e37e8'}

  const truncate = (str, max, suffix) => {
    return str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`
  }

  let description = truncate(content['description'], 250, '...')

  let url = dynamicUrl('data', content['mainImg'])

  return (
    <section id={id} className={s.projectSection}>
      <div className={s.card}>
        <div className={s.cardBackground} style={blurStyle}></div>
        <div className={`${s.cardUrl} ${s.cardInnerBox}`} style={backStyle}>
          {
            content['link'] 
              ? 
            <a href={content['link']} target="_blank" rel="noreferrer" style={colorStyle}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>{content['link']}
            </a> 
              : 
            <h4 style={colorStyle}>No Link available</h4>
          }
        </div>
        <div className={`${s.cardImgBox} ${s.cardInnerBox}`} style={backStyle}>
          <div className={`${s.cardImgWrapper} card-img-wrapper`}>
            <img 
              className={s.cardImg} 
              src={url}  
              alt={`${content['title']}`}
            />
            <div className={`${s.cardImgCover} card-img-cover`}>
              <h2>{content['title']}</h2>
              <p>{content['slogan']}</p>
              <Link to={`/projects/${content['id']}`}>
                <Button text={windowWidth < 500 ? 'More' : 'Case Study'}/>  
              </Link>
            </div>
          </div>
          
        </div>
        <div className={`${s.cardDescription} ${s.cardInnerBox}`} style={backStyle}>
          <h4 style={colorStyle}>{ content['title'] } Project</h4>
          <p style={colorStyle}>{ description }</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection