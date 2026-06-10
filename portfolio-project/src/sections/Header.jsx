import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-around items-center font-display'>
      <h1 className='text-[24px]'>Juvens.dev</h1>
      <ul className='flex gap-8 text-[18px]'>
        <li className=''>About</li>
        <li className=''>Experiences</li>
        <li className=''>Projects</li>
        <li className=''>Skills</li>
      </ul>
      <button className='flex gap-8 text-[18px]'>Resume</button>
    </div>
  )
}

export default Header