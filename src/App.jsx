import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Education from './components/Education/education';
import Testimonials from './components/testimonials/Testimonials';
import Courses from './components/courses/Courses';
import Topbar from './components/topbar/Topbar';
import Achievements from './components/achievements/Achievements';
import Work from './components/work/Work';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Education/>
      <Courses/>
      <Achievements/>
      <Work/>
      <Portfolio/>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
