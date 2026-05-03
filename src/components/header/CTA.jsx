import React from "react";
import { CoolMode } from "../../componentsUi/magicui/cool-mode";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1vWB_4uAHiju78O25XUDvf4HOU04MolRh/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        My Resume
      </a>
      <CoolMode>
        <a href="#contact" className="btn btn-primary">
          Let's Talk!!
        </a>
      </CoolMode>
    </div>
  );
};

export default CTA;
