import React from "react";
import { Button } from "../../componentsUi/ui/button";
import { CoolMode } from "../../componentsUi/magicui/cool-mode";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1vWB_4uAHiju78O25XUDvf4HOU04MolRh/view?usp=sharing"
        download
        className="btn"
      >
        <Button className="text-lg">My Resume</Button>
      </a>
      <a href="#contact" className=" btn btn-primary">
        <CoolMode>
          <Button className="text-lg">Let's Talk!!</Button>
        </CoolMode>
      </a>
    </div>
  );
};

export default CTA;
