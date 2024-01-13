import React from "react";

import Title from "../slides/Title";
import Form from "../../components/Form";
import Slogan from "../slides/Slogan";


const ContactSection = ({paddingTop}) => {

  const text = "Want to build something together? Want to hire me for your company? Or did you just fall in love? Anyway just leave a message and I will try to contact you as soon as possible."

  return (
    <section id="sectionContact" className={paddingTop && 'contact-section'}>
      <span className="title-slogan-wrapper">
        <Title side="top" title="Contact Me"/> 
        <Slogan text={text} className="contact-text" />
      </span>   
      <Form />
    </section>
  )
}

export default ContactSection