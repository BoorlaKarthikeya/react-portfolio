import React from 'react';
import CV from '../../assets/cv_meri_gogichashvili.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href="https://drive.google.com/file/d/1n87rq0FmkrvsvSUhqa4daPSaNubeKzxp/view?usp=sharing" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
