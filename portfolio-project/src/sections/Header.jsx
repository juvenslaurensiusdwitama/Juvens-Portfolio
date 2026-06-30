import download from "../assets/download.png"

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <div className="flex justify-center fixed left-0 right-0 top-0 z-50">
        <div className='flex text-white justify-between items-center w-full xl:max-w-[1300px] xl:px-[50px] lg:max-w-[910px] md:max-w-[700px] sm:max-w-[580px] lg:mt-7 sm:mt-9'>
          <h1 className='lg:text-2xl md:text-xl sm:text-lg font-[600] cursor-pointer' onClick={() => scrollToSection('introduction')}>Juvens.dev</h1>
          <div className='flex text-white'>
            <ul className='flex lg:gap-0 md:gap-3 sm:gap-2 xl:text-lg lg:text-base font-[500] lg:bg-white/20 lg:backdrop-blur-md lg:rounded-4xl'>
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
            download="Juvens-Resume.pdf"
            className='bg-white/20 backdrop-blur-md rounded-md cursor-pointer lg:block hidden'
          >
            <div className="flex items-center justify-center gap-2 hover:bg-white/15 rounded-md py-2 px-6 transition duration-200">
              <p className='xl:text-lg lg:text-base font-[500] text-white'>Resume</p>
              <img src={download} alt="" className='h-[16px] font-[500]' />
            </div>
          </a>
          {/* <button className='bg-white/20 backdrop-blur-md rounded-md cursor-pointer lg:block hidden'>
            <div className="flex items-center justify-center gap-2 hover:bg-white/15 rounded-md py-2 px-6 transition duration-200">
              <p className='xl:text-lg lg:text-base font-[500] text-white'>Resume</p>
              <img src={download} alt="" className='h-[16px] font-[500]' />
            </div>
          </button> */}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-center fixed left-0 right-0 bottom-0 z-50">

      </div>
    </>
  )
}

export default Header