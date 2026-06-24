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
import github2 from '../assets/github2.png'
import vite from '../assets/vite.svg'
import vercel from '../assets/vercel.svg'
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
      icon: shadcn,
      name: 'Shadcn UI',
      type: 'Component Library',
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
      icon: git,
      name: 'GIT',
      type: 'Version Control System',
    },
    {
      icon: github2,
      name: 'GitHub',
      type: 'Version Control Platform',
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
      icon: figma,
      name: 'Figma',
      type: 'Design Tool',
    },
  ]

  return (
    <div className='flex flex-col justify-center items-center gap-10 h-dvh' id='skills'>
      <h1 className='text-center text-white text-4xl font-semibold'>My Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-[1200px] justify-center'>
        {datas.map((data, index) => (
          <Skill key={index} data={data} />
        ))}
      </div>
    </div>

  )
}

export default Skills