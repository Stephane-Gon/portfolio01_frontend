import React from "react";

import { useTheme } from "../../contexts/ThemeProvider";
import { dynamicUrl } from "../../helpers";

import Slogan from "../../features/slides/Slogan";
import Illustration from "../../features/slides/Illustration";
import s from '../../styles/pages/home.module.scss';

const ProjectsSlogan = () => {
  let theme = useTheme()

  let text = "Here you can find some of the projects I gave life to."
  let url = dynamicUrl('static', theme.darkTheme ? "dark-home-2.svg" : "light-home-2.svg")

  return (
      <div className={s.projectSlogan}>
        <Slogan text={text} />
        <Illustration 
          imgUrl={url} 
          delay={300}
        />
      </div>
  )
}

export default ProjectsSlogan