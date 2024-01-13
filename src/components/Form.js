import React, { useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeProvider";
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

import Input from "./Input";
import { validateEmail, sendData } from "../helpers";
import useAnimatedSlide from "../hooks/useAnimatedSlide";

const Form = () => {

  // STATE, REF'S AND SPRINGS
  const [submited, setSubmited] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const emailRef = useRef(null)
  const popUpRef = useRef(null)
  const formRef = useRef(null)

  const popUpSpring = useSpring({
    from: {
      opacity: 0.9,
      translateX: '15%',
      display: 'none'
    },
    to: {
      opacity: submited ? 0.9 : 0,
      translateX: submited ? '0px' : '15%',
      display: submited ? 'block' : 'none'
    },
    config: {mass:4, tension: 250, friction: 35},
    delay: 100
  })

  const [isVisible, onChange] = useAnimatedSlide('')
  const formSpring = useSpring({
    to: {
      opacity: isVisible ? 0.9 : 0,
    },
    config: {mass:4, tension: 250, friction: 35},
    delay: 250
  })


  // FUNCTIONS THAT GET THE VALUES FROM THE INPUTS AND UPDATES THE STATE
  const handleNameChange = (e) => {
    setFormData(prevState => {
      let newName = {name : e.target.value}
      return {...prevState, ...newName}
    })
  }
  const handleEmailChange = (e) => {
    if (!validateEmail(formData['email'])) {
      emailRef.current.style.borderBottom = '5px solid red'
    }
    else {
      emailRef.current.style.borderBottom = `5px solid ${theme.mainColor}`
    }
    setFormData(prevState => {
      let newEmail = {email : e.target.value}
      return {...prevState, ...newEmail}
    })
  }
  const handleSubjectChange = (e) => {
    setFormData(prevState => {
      let newSubject = {subject : e.target.value}
      return {...prevState, ...newSubject}
    })
  }
  const handleMessageChange = (e) => {
    setFormData(prevState => {
      let newMessage = {message : e.target.value}
      return {...prevState, ...newMessage}
    })
  }

  // FUNCTION THAT HANDLES THE SUBMIT AND SEND THE DATA TO THE BACKEND SERVER
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateEmail(formData['email'])) {
      emailRef.current.style.borderBottom = '5px solid red'
      return
    }
    sendData(formData)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setSubmited(true)
  
    window.scrollTo({top: formRef.current.offsetTop - 200, left: 0, behavior: 'smooth'});
    
    setTimeout(() => {
      setSubmited(false)
    }, 5000)
  }


  const theme = useTheme()
  const styleSubmit = {
    color: theme.darkTheme ? '#F5F5F5' : '#342E37',
    border: `5px solid ${theme.mainColor}`
  }

  return ( 
    <VisibilitySensor onChange={onChange} partialVisibility={true}>
      <animated.form ref={formRef} className="my-form" onSubmit={handleSubmit} style={formSpring}>
        <Input 
        placeholder="Name" 
        gridArea="input1" 
        onchange={handleNameChange}
        value={formData['name']}
        />
        <Input 
        placeholder="Email" 
        gridArea="input2" 
        onchange={handleEmailChange}
        value={formData['email']}
        emailRef={emailRef}
        />
        <Input 
        placeholder="Subject" 
        gridArea="input3" 
        onchange={handleSubjectChange}
        value={formData['subject']}
        />
        <Input 
        placeholder="Message" 
        gridArea="input4" 
        onchange={handleMessageChange}
        value={formData['message']}
        textArea={true} 
        />

        {/* POP UP */}
        <animated.div
          className="form-popup"
          style={{background: theme.mainColor, ...popUpSpring}} 
          ref={popUpRef}
          onClick={() => setSubmited(false)}
        >
          <h2>Thanks for contacting me! Your email was sent!</h2>
        </animated.div>

        
          <input 
            type="submit" 
            className="input-submit" 
            style={styleSubmit}
          />
        
      </animated.form>
    </VisibilitySensor>
    
  )
}

export default Form