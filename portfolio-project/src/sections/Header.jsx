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
        <div className='flex text-white justify-between items-center w-full max-w-[1200px] mt-6'>
          <h1 className='text-2xl font-[600] cursor-pointer' onClick={() => scrollToSection('introduction')}>Juvens.dev</h1>
          <div className='flex text-white justify-center w-full max-w-[1200px]'>
            <ul className='flex text-lg font-[500] bg-white/30 backdrop-blur-md rounded-4xl'>
              <li className='cursor-pointer rounded-l-full hover:bg-white/15 py-2 px-5 transition duration-200' onClick={() => scrollToSection('introduction')}>About</li>
              <li className='border border-white/25'></li>
              <li className='cursor-pointer hover:bg-white/15 py-2 px-5 transition duration-200' onClick={() => scrollToSection('experiences')}>Experiences</li>
              <li className='border border-white/25'></li>
              <li className='cursor-pointer hover:bg-white/15 py-2 px-5 transition duration-200' onClick={() => scrollToSection('projects')}>Projects</li>
              <li className='border border-white/25'></li>
              <li className='cursor-pointer rounded-r-full hover:bg-white/15 py-2 px-5 transition duration-200' onClick={() => scrollToSection('skills')}>Skills</li>
            </ul>
          </div>
          <button className='bg-white/30 backdrop-blur-md rounded-md cursor-pointer'>
            <div className="flex items-center justify-center gap-2 hover:bg-white/15 rounded-md py-2 px-6 transition duration-200">
              <p className='text-lg font-[500] text-white'>Resume</p>
              <img src={download} alt="" className='h-[16px] font-[500]' />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-center fixed left-0 right-0 bottom-0 z-50">

      </div>
    </>
  )
}

export default Header