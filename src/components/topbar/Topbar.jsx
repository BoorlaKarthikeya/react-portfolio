import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { FaBriefcase } from 'react-icons/fa';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { RiMedalLine } from 'react-icons/ri';
import useScrollSpy from '../../hooks/useScrollSpy';
import './topbar.css';

const NAV_ITEMS = [
  { href: 'home',         icon: <AiOutlineHome />,          label: 'Hero' },
  { href: 'about',        icon: <AiOutlineUser />,          label: 'About Me' },
  { href: 'work',         icon: <FaBriefcase />,            label: 'Experience' },
  { href: 'portfolio',    icon: <RiServiceLine />,          label: 'Projects' },
  { href: 'education',    icon: <HiOutlineAcademicCap />,   label: 'Education' },
  { href: 'contact',      icon: <BiMessageSquareDetail />,  label: 'Contact' },
];

const Topbar = () => {
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.href));

  return (
    <nav aria-label="Site navigation">
      {NAV_ITEMS.map(({ href, icon, label }) => (
        <a
          key={href}
          href={`#${href}`}
          aria-label={label}
          className={activeId === href ? 'active' : ''}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Topbar;
