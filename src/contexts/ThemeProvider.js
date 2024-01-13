import React, {useState, useEffect, useContext, createContext} from "react";

export const colors = {
  blue: '#96C0ED',
  green: '#A6F17E',
  orange: '#FCB55F',
  pink: '#E06775',
  violet: '#C237D2'
}

export const ThemeContext = createContext({
  darkTheme: false,
  mainColor: '#96C0ED',
  toggleTheme: () => {}
})


export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({children}) {

  // STATE AND FUNCTION TO HANDLE THE DARK THEME
  const [darkTheme, setDarkTheme] = useState(ThemeContext.darkTheme)
  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme)
  }

  // STATE AND FUNCTION TO HANDLE THE MAIN COLOR
  const [mainColor, setMainColor] = useState(ThemeContext.mainColor)
  function toggleMainColor(path) {
    if(path === '/') {
      localStorage.setItem('mainColorTheme' , colors.blue)
      setMainColor(colors.blue)
    }
    else if(path === '/about') {
      localStorage.setItem('mainColorTheme' , colors.green)
      setMainColor(colors.green)
    }
    else if(path === '/skills&tools') {
      localStorage.setItem('mainColorTheme' , colors.pink)
      setMainColor(colors.pink)
    }
    else if(path === '/projects') {
      // AQUI ADICIONAR A LOCATION DO PROJECTO EXPECIFICO
      localStorage.setItem('mainColorTheme' , colors.orange)
      setMainColor(colors.orange)
    }
    else if(path === '/contact') {
      localStorage.setItem('mainColorTheme' , colors.violet)
      setMainColor(colors.violet)
    }
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('prefersDarkTheme');
    const storedMainColor = localStorage.getItem('mainColorTheme')

    if(storedMainColor) {
      setMainColor(storedMainColor)
    }

    if (storedTheme) {
      setDarkTheme(JSON.parse(storedTheme));
    }
    else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkTheme(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    let body = document.querySelector('body')
    
    if(darkTheme) {
      localStorage.setItem('prefersDarkTheme' , 'true')
      body.classList.add('body-dark')
    }
    else {
      localStorage.setItem('prefersDarkTheme' , 'false')
      body.classList.remove('body-dark')
    }
  }, [darkTheme])

  return(
    <ThemeContext.Provider value={{
        darkTheme: darkTheme || false, 
        mainColor: mainColor || colors.blue,
        toggleTheme: toggleTheme,
        toggleMainColor: toggleMainColor
    }}>
        {children}
    </ThemeContext.Provider>
  )
}
