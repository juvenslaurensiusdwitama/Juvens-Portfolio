import Skill from '@/components/Skill'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
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
      delay: 200,
    },
    {
      icon: css,
      name: 'CSS',
      type: 'Style Sheet Language',
      delay: 300,
    },
    {
      icon: js,
      name: 'JavaScript',
      type: 'Programming Language',
      delay: 400,
    },
    {
      icon: react,
      name: 'React JS',
      type: 'Library',
      delay: 500,
    },
    {
      icon: tailwind,
      name: 'Tailwind CSS',
      type: 'Framework',
      delay: 600,
    },
    {
      icon: ts,
      name: 'TypeScript',
      type: 'Programming Language',
      delay: 700,
    },
    {
      icon: nextjs,
      name: 'Next JS',
      type: 'Framework',
      delay: 800,
    },
    {
      icon: git,
      name: 'GIT',
      type: 'Version Control System',
      delay: 900,
    },
    {
      icon: github3,
      name: 'GitHub',
      type: 'Version Control Platform',
      delay: 1000,
    },
    {
      icon: firebase,
      name: 'Firebase',
      type: 'Backend Service',
      delay: 1100,
    },
    {
      icon: postman,
      name: 'Postman API',
      type: 'Testing Tool',
      delay: 1200,
    },
    {
      icon: vite,
      name: 'Vite',
      type: 'Build Tool',
      delay: 1300,
    },
    {
      icon: vercel,
      name: 'Vercel',
      type: 'Deployment Platform',
      delay: 1400,
    },
    {
      icon: figma,
      name: 'Figma',
      type: 'Design Tool',
      delay: 1500,
    },
  ]

  return (
    <div
      className='flex flex-col items-center sm:gap-6 gap-4 min-h-screen bg-center bg-cover lg:pt-23 sm:pt-18 pt-4.5 pb-10' id='skills'
    >
      <h1 data-aos="fade-left" data-aos-duration={1000} className='text-center text-white xl:text-3xl lg:text-2xl sm:text-xl text-lg font-semibold'>My Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full xl:max-w-[1300px] xl:px-[50px] lg:max-w-[910px] md:max-w-[700px] sm:max-w-[580px] max-w-[302px] justify-center'>
        {datas.map((data, index) => (
          <Skill key={index} data={data} />
        ))}
      </div>
    </div>

  )
}

export default Skills