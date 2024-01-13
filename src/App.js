import React, {useRef} from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import { ThemeProvider} from './contexts/ThemeProvider'
import useWidth from './hooks/useWidth';

import HomePage from './pages/home/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SkillsToolsPage from './pages/Skills&ToolsPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import SingleProjectPage from './pages/projects/SingleProjectPage';
import NotFoundPage from './pages/NotFoundPage';

import SideLogo from './layouts/SideLogo';
import BubbleBg from './features/bubbles/BubbleBg';
import Footer from './layouts/Footer'
import Header from './layouts/Header';
import ErrorPopUp from './layouts/ErrorPopUp';
import ScrollToTop from './components/ScrollToTop';


import './styles/global.scss';




function App() {
  const windowWidth = useWidth()
  const errorRef = useRef(null)

  return (
    <ThemeProvider>
        <Router>
            <div className="app">
              <Header />
              <BubbleBg />
              <ErrorPopUp ref={errorRef} />
              <ScrollToTop>
                <Routes>
                  <Route path="/" exact element={<HomePage errorRef={errorRef} />} />
                  <Route path="/about" element={<AboutPage errorRef={errorRef} />} />
                  <Route path="/skills&tools" element={<SkillsToolsPage errorRef={errorRef} />} />
                  <Route path="/projects" element={<ProjectsPage errorRef={errorRef} />} />
                  <Route path="/projects/:id" element={<SingleProjectPage errorRef={errorRef} />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </ScrollToTop>

              {windowWidth > 1200 && <SideLogo />}
              
              <Footer />
            </div>
        </Router>
    </ThemeProvider>
    
  )
}

export default App;
