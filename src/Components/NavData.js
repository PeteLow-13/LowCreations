import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';
import * as GrIcons from 'react-icons/gr';
import * as HiIcons from 'react-icons/hi';

export const NavData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'About us',
    path: '/about',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <ImIcons.ImMail2 />,
    cName: 'nav-text',
  },
  {
    title: 'FAQ',
    path: '/faq',
    icon: <HiIcons.HiOutlineQuestionMarkCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Our Work',
    path: '/work',
    icon: <GrIcons.GrGallery />,
    cName: 'nav-text',
  },
];
