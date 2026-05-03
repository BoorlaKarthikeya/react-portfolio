import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/karthikeyaHeroImage.png";
import { BorderBeam } from "../../componentsUi/magicui/border-beam";
import Typewriter from "typewriter-effect";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        {/* ── Left: text ── */}
        <div className="header__text">
          <p className="header__greeting">Hello, I'm</p>
          <h1>Karthikeya Boorla</h1>
          <span className="header__typewriter-label">I'm a </span>
          <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString('<span class="profession">Software Engineer.</span>')
                .pauseFor(300)
                .deleteChars(18)
                .typeString('<span class="profession">AI Generalist.</span>')
                .pauseFor(300)
                .deleteChars(14)
                .typeString('<span class="profession">Full Stack Developer.</span>')
                .pauseFor(300)
                .deleteChars(21)
                .typeString('<span class="profession">LLM Agent Builder.</span>')
                .pauseFor(1000)
                .start();
            }}
          />
          <p className="header__mono-tag">&lt; building AI systems that scale /&gt;</p>
          <CTA />
          <HeaderSocials />
        </div>

        {/* ── Right: photo ── */}
        <div className="header__photo-wrapper">
          <div className="header__photo-ring">
            <img src={ME} alt="Karthikeya Boorla" loading="lazy" />
            <BorderBeam size={260} duration={10} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
