import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import xbeatImg from '@/../public/images/xbeat.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import pizzatimeImg from '@/../public/images/pizzatime.png';
import ranacartImg from '@/../public/images/ranacart.png';
import campusexpressImg from '@/../public/images/campusexpress.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Frontend Developer Intern',
    location: 'Besant Technologies, Bengaluru',
    description:
      'Front-end Developer. Completed Frontend Development Internship From Besant Technologies.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Sept 2024 - October 2024',
  },
] as const;

export const images = {
  pizzatimeImg,
  carcatalogImg,
  xbeatImg,
  ranacartImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Pizza Time',
    description: `Designed & developed an e-commerce food delivery app platform for a pizza restaurant, utilizing technologies like React icons, React Router DOM, React Alice Carousel, Leaflet Maps, React Paginate, UUID, React Lazy Load, Framer Motion & Turso.`,
    tags: ['Reactjs', 'Leaflet Maps', 'React Alice Carousel', 'Framer Motion', 'Turso'],
    imageUrl: pizzatimeImg,
    link: 'https://pizza-time-with-react-rana.vercel.app/',
  },
  {
    title: 'Rana Cart',
    description:
      'Designed & developed an interactive shopping E-commerce app platform having wide range of products & services using Typescript, React, React-Redux, Redux-Toolkit, Redux-Thunk, Axios, React Router, Framer Motion & Swiperjs.',
    tags: ['TypeScript', 'React', 'Axios', 'Framer Motion'],
    imageUrl: ranacartImg,
    link: 'https://rana-ecom-react.vercel.app/',
  },
  {
    title: 'Xbeat App',
    description:
      `Developed an audio E-store website using Reactjs & state management done using Context API.It has various features such as custom hooks, local storage, fully responsive, dark theme, multi-pages & much more .`,
    tags: [
      'Reactjs',
      'ReactRouter',
      'React Swiper',
      'SASS',
    ],
    imageUrl: xbeatImg,
    link: 'https://xbeat-rana.vercel.app/',
  },
  {
    title: 'Campusexpress',
    description: `Developed a full-time functional website for my current company "Campusexpress", where users can unlock seamless logistics solutions, book parcels securely for efficient transportation and delivery.`,
    tags: [
      'React',
      'JavaScript',
      'Framer Motion',
      'Cloudinary',
      'React Email',
    ],
    imageUrl: campusexpressImg,
    link: 'https://campus-express-rho.vercel.app/',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://portfolio-ts-rana.vercel.app/',
  },
  
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  // ['Node.js', '/svgs/node-js.svg'],
  // ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  // ['Prisma', '/svgs/file-type-light-prisma.svg'],
  // ['MongoDB', '/svgs/mongodb-original.svg'],
  // ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  // ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  // ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  // ['Cloudinary', '/svgs/cloudinary.svg'],
  // ['Golang', '/svgs/golang.svg'],
  // ['Docker', '/svgs/Docker.svg'],
  // ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
