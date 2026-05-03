import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa';
import './topbar.css';

const NAV_ITEMS = [
  { href: '#home',       icon: <AiOutlineHome />,           label: 'Home' },
  { href: '#experience', icon: <BiBook />,                  label: 'Skills' },
  { href: '#work',       icon: <FaBriefcase />,             label: 'Experience' },
  { href: '#portfolio',  icon: <RiServiceLine />,           label: 'Projects' },
  { href: '#contact',    icon: <BiMessageSquareDetail />,   label: 'Contact' },
];

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav aria-label="Site navigation">
      {NAV_ITEMS.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? 'active' : ''}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Topbar;
