import { nanoid } from "nanoid"

// FUNCTION THAT CHANGES COLOR BY CREATING A DYNAMIC CLASS
export function changeColor(color, string) {
  let newClass
  if (color === '#A6F17E') {
    newClass = `${string}green`

  }
  else if (color === '#96C0ED') {
    newClass = `${string}blue`
  }
  else if (color === '#FCB55F') {
    newClass = `${string}orange`
  }
  else if (color === '#E06775') {
    newClass = `${string}pink`
  }
  else if (color === '#C237D2') {
    newClass = `${string}violet`
  }
  else {
    return
  }
  return newClass
}


// FUNCTION THACT CHANGES THE COLOR OF THE SUN AND MOON ICON
export async function sunMoonColor(color) {
  let svg = document.querySelector('#sun-moon-svg')
  let circle = document.querySelector('.animated-circle-2')
  let sunBeams = document.querySelector('.sun-beams')

  if (svg === null || circle === null || sunBeams === null) return

  svg.style.stroke = color
  circle.style.fill = color
  sunBeams.style.stroke = color
}

// FUNCTION THAT CHANGES THE BUBBLES COLORS
export function bubbleColor(color) {
  let styles = {
    bubble1: {},
    bubble2: {}
  }

  if(color === '#A6F17E') {
    styles.bubble1 = 'radial-gradient(50% 50% at 50% 50%, rgba(196, 196, 196, 0) 85.42%, rgba(166, 241, 126, 0.5) 100%)'
    styles.bubble2 = 'linear-gradient(180deg, rgba(166, 241, 126, 0.35) 0%, rgba(245, 245, 245, 0.1) 88.54%)'
  }
  else if(color === '#FCB55F') {
    styles.bubble1 = 'radial-gradient(50% 50% at 50% 50%, rgba(196, 196, 196, 0) 85.42%, rgba(252, 181, 95, 0.5) 100%)'
    styles.bubble2 = 'linear-gradient(180deg, rgba(252, 181, 95, 0.25) 0%, rgba(245, 245, 245, 0.1) 88.54%)'
  }
  else if(color === '#E06775') {
    styles.bubble1 = 'radial-gradient(50% 50% at 50% 50%, rgba(196, 196, 196, 0) 85.42%, rgba(224, 103, 117, 0.5) 100%)'
    styles.bubble2 = 'linear-gradient(180deg, rgba(224, 103, 117, 0.2) 0%, rgba(245, 245, 245, 0.1) 88.54%)'
  }
  else if(color === '#C237D2') {
    styles.bubble1 = 'radial-gradient(50% 50% at 50% 50%, rgba(196, 196, 196, 0) 85.42%, rgba(194, 55, 210, 0.4) 100%)'
    styles.bubble2 = 'linear-gradient(180deg, rgba(194, 55, 210, 0.25) 0%, rgba(245, 245, 245, 0.1) 88.54%)   '
  }
  else {
    styles.bubble1 = 'radial-gradient(50% 50% at 50% 50%, rgba(196, 196, 196, 0) 85.42%, rgba(150, 192, 237, 0.5) 100%)'
    styles.bubble2 = 'linear-gradient(180deg, rgba(150, 192, 237, 0.3) 0%, rgba(245, 245, 245, 0.1) 88.54%)'
  }
  return styles
}


// FUNCTION THAT RECEIVES A STRING AND RETURN AN ARRAY WITH EVERY CHAR OF THE STRING INCLUDING " "
export function stringToArray(string) {
  let textArray = Array.from(string)
  let objArray = textArray.map((item) => {
    return ({
      char : item,
      key: nanoid()
    })
  })
  return objArray
}


// FUNCTION THAT VALIDATES EMAIL
export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};



// THIS FUNCTION SEND THE FORM DATA TO THE BACKEND SERVER
export async function sendData(formData) {
  await fetch('/stefapi/contact/', {
    method : 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    },
    body: JSON.stringify(formData)
  })
}


function getCookie(name) {
  if (!document.cookie) {
    return null;
  }

  const xsrfCookies = document.cookie.split(';')
    .map(c => c.trim())
    .filter(c => c.startsWith(name + '='));

  if (xsrfCookies.length === 0) {
    return null;
  }
  return decodeURIComponent(xsrfCookies[0].split('=')[1]);
}


// DYNAMIC URL FUNCTION
export const dynamicUrl = (type, name) => {
  let url
  if (type === 'cv') {
    url = `../static/${name}`
  }
  else if (type === 'data') {
    url = `../static/images/${name}`
  }
  else {
    url = `../static/images/${name}`
  }

  return url
};