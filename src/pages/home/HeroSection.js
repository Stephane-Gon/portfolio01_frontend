import React from "react";

import s from '../../styles/pages/home.module.scss'
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";
import HeroCv from "./HeroCv";

const HeroSection = () =>  {

  return (
    <section className={s.heroSection} id="sectionHero">
      <HeroText />
      <HeroCv />

      <HeroImg />
    </section>
  )
}

export default HeroSection