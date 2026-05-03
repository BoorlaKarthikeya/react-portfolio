import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Education from './components/Education/education';
import Courses from './components/courses/Courses';
import Topbar from './components/topbar/Topbar';
import Achievements from './components/achievements/Achievements';
import Work from './components/work/Work';
import FadeIn from './components/shared/FadeIn';

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <FadeIn><Intro /></FadeIn>
      <FadeIn delay={0.05}><Experience /></FadeIn>
      <FadeIn delay={0.05}><Work /></FadeIn>
      <FadeIn delay={0.05}><Portfolio /></FadeIn>
      <FadeIn delay={0.05}><Education /></FadeIn>
      <FadeIn delay={0.05}><Courses /></FadeIn>
      <FadeIn delay={0.05}><Achievements /></FadeIn>
      <FadeIn delay={0.05}><Contact /></FadeIn>
      <Footer />
    </>
  );
};

export default App;
