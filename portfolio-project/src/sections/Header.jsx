import { useState } from "react"
import download from "../assets/download.png"
import burger from "../assets/burger.png"
import cross from "../assets/cross.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuIcon = burger
  const closeIcon = cross

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="flex justify-center fixed left-0 right-0 top-0 z-50">
        <div className='flex text-white justify-between items-center w-full xl:max-w-[1300px] xl:px-[50px] lg:max-w-[910px] md:max-w-[700px] sm:max-w-[580px] sm:px-0 px-3 sm:mt-7 mt-3'>
          <h1 className='xl:text-2xl md:text-xl sm:text-lg text-base font-[600] cursor-pointer' onClick={() => scrollToSection('introduction')}>
            Juvens.dev
          </h1>
          <div className='hidden sm:flex text-white'>
            <ul className='flex lg:gap-0 md:gap-4 sm:gap-3 gap-2 xl:text-lg md:text-base sm:text-sm text-xs font-[500] lg:bg-white/20 lg:backdrop-blur-md lg:rounded-4xl'>
              <li className='cursor-pointer lg:rounded-l-full lg:hover:bg-white/10 lg:py-2 lg:px-5 transition duration-200' onClick={() => scrollToSection('introduction')}>About</li>
              <li className='lg:border lg:border-white/15'></li>
              <li className='cursor-pointer lg:hover:bg-white/10 lg:py-2 lg:px-5 transition duration-200' onClick={() => scrollToSection('experiences')}>Experiences</li>
              <li className='lg:border lg:border-white/15'></li>
              <li className='cursor-pointer lg:hover:bg-white/10 lg:py-2 lg:px-5 transition duration-200' onClick={() => scrollToSection('projects')}>Projects</li>
              <li className='lg:border lg:border-white/15'></li>
              <li className='cursor-pointer lg:rounded-r-full lg:hover:bg-white/10 lg:py-2 lg:px-5 transition duration-200' onClick={() => scrollToSection('skills')}>Skills</li>
            </ul>
          </div>
          <a href={encodeURI("/CV - Juvens Laurensius Dwitama.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-white/20 backdrop-blur-md rounded-md cursor-pointer lg:block hidden'
          >
            <div className="flex items-center justify-center gap-2 hover:bg-white/15 rounded-md py-2 px-5 transition duration-200">
              <p className='xl:text-lg lg:text-base font-[500] text-white'>Resume</p>
              <img src={download} alt="" className='sm:h-[14px] h-[10px] font-[500]' />
            </div>
          </a>
          <button
            className='sm:hidden flex items-center justify-center cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <img src={isMenuOpen ? closeIcon : menuIcon} alt={isMenuOpen ? "Close menu" : "Open menu"} className='h-[20px]' />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='sm:hidden fixed top-[45px] right-3 z-50 flex justify-center'>
          <ul className='flex flex-col items-center w-full bg-black/20 backdrop-blur-sm rounded-lg text-white font-[500] text-sm overflow-hidden'>
            <li className='cursor-pointer hover:bg-white/10 py-3 px-5 transition duration-200' onClick={() => scrollToSection('introduction')}>About</li>
            <li className='border-t border-white/15 w-[150px]'></li>
            <li className='cursor-pointer hover:bg-white/10 py-3 px-5 transition duration-200' onClick={() => scrollToSection('experiences')}>Experiences</li>
            <li className='border-t border-white/15 w-[150px]'></li>
            <li className='cursor-pointer hover:bg-white/10 py-3 px-5 transition duration-200' onClick={() => scrollToSection('projects')}>Projects</li>
            <li className='border-t border-white/15 w-[150px]'></li>
            <li className='cursor-pointer hover:bg-white/10 py-3 px-5 transition duration-200' onClick={() => scrollToSection('skills')}>Skills</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Header