import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1 className="text-5xl">Karthikeya Boorla</h1>
        <span>I'm a </span>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString(
                `<span className = "profession" >Full Stack Developer.</span>`
              )
              .pauseFor(300)
              .deleteChars(21)
              .typeString(
                `<span className = "profession">AIML Enthusiast.</span>`
              )
              .pauseFor(300)
              .deleteChars(21)
              .typeString(`<span className = "profession">Data Analyst.</span>`)
              .pauseFor(300)
              .deleteChars(21)
              .typeString(
                `<span className = "profession">Life Long Learner.</span>`
              )
              .pauseFor(1000)
              .start();
          }}
        />
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
