import Skill from '@/components/Skill'
import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import shadcn from '../assets/shadcn.png'
import ts from '../assets/typescript.png'
import nextjs from '../assets/next.png'
import firebase from '../assets/firebase.png'
import postman from '../assets/postman.png'
import git from '../assets/git.png'
import github3 from '../assets/github3.png'
import vite from '../assets/vite.png'
import vercel from '../assets/vercel.png'
import figma from '../assets/figma.png'

const Skills = () => {

  const datas = [
    {
      icon: html,
      name: 'HTML',
      type: 'Markup Language',
    },
    {
      icon: css,
      name: 'CSS',
      type: 'Style Sheet Language',
    },
    {
      icon: js,
      name: 'JavaScript',
      type: 'Programming Language',
    },
    {
      icon: react,
      name: 'React JS',
      type: 'Library',
    },
    {
      icon: tailwind,
      name: 'Tailwind CSS',
      type: 'Framework',
    },
    {
      icon: ts,
      name: 'TypeScript',
      type: 'Programming Language',
    },
    {
      icon: nextjs,
      name: 'Next JS',
      type: 'Framework',
    },
    {
      icon: git,
      name: 'GIT',
      type: 'Version Control System',
    },
    {
      icon: github3,
      name: 'GitHub',
      type: 'Version Control Platform',
    },
    {
      icon: firebase,
      name: 'Firebase',
      type: 'Backend Service',
    },
    {
      icon: postman,
      name: 'Postman API',
      type: 'Testing Tool',
    },
    {
      icon: vite,
      name: 'Vite',
      type: 'Build Tool',
    },
    {
      icon: vercel,
      name: 'Vercel',
      type: 'Deployment Platform',
    },
    {
      icon: shadcn,
      name: 'Shadcn UI',
      type: 'Component Library',
    },
    {
      icon: figma,
      name: 'Figma',
      type: 'Design Tool',
    },
  ]

  return (
    <div 
      className='flex flex-col items-center xl:gap-10 lg:gap-8 sm:gap-9 min-h-screen bg-center bg-cover pt-25 pb-10' id='skills'
    >
      <h1 className='text-center text-white xl:text-3xl lg:text-2xl sm:text-xl font-semibold'>My Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full xl:max-w-[1300px] xl:px-[50px] lg:max-w-[910px] md:max-w-[700px] sm:max-w-[580px] justify-center'>
        {datas.map((data, index) => (
          <Skill key={index} data={data} />
        ))}
      </div>
    </div>

  )
}

export default Skills