import pp2 from '../assets/pp2.png'
import download from "../assets/download.png"
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'

const Introduction = () => {
  return (
    <div
      className='relative flex justify-center' id='introduction'
    >
      <div className={`min-h-screen flex justify-between items-center text-white w-full xl:max-w-[1300px] xl:px-[50px] lg:max-w-[1010px] lg:px-[50px] md:max-w-[700px] sm:max-w-[580px] pt-5`}>
        <div className='flex flex-col xl:gap-3 lg:gap-2 md:gap-2 sm:gap-1 xl:max-w-[610px] lg:max-w-[510px] md:max-w-[410px] sm:max-w-[350px]'>
          <h1 className='xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-bold'>Hello, I'm Juvens!</h1>
          <h2 className='xl:text-2xl md:text-xl sm:text-lg text-white font-semibold mt-2 text-white/90'>A Full-Stack Web Developer.</h2>
          <p className='xl:text-lg md:text-base text-sm lg:leading-7 md:leading-6 sm:leading-5 text-white/70 lg:mb-3 md:mb-1 sm:mb-2'>Architecting scalable backend systems and crafting intuitive, pixel-perfect interfaces. I build full-stack web applications where high-performance engineering meets exceptional user experience.</p>
          <a href={encodeURI("/CV - Juvens Laurensius Dwitama.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            // download="Juvens Laurensius Dwitama - Resume.pdf"
            className='bg-white/20 backdrop-blur-md rounded-md cursor-pointer w-fit'>
            <div className="flex justify-center items-center gap-2 hover:bg-white/15 rounded-md md:py-2 lg:px-5 sm:py-2 sm:px-4 transition duration-200">
              <p className='xl:text-lg md:text-base text-sm font-[500] text-white'>Resume</p>
              <img src={download} alt="" className='h-[16px] font-[500]' />
            </div>
          </a>

          {/* <button className='bg-white/20 backdrop-blur-md rounded-md cursor-pointer w-fit'>
            <div className="flex justify-center items-center gap-2 hover:bg-white/15 rounded-md md:py-2 lg:px-5 sm:py-2 sm:px-4 transition duration-200">
              <p className='xl:text-lg md:text-base text-sm font-[500] text-white'>Resume</p>
              <img src={download} alt="" className='h-[16px] font-[500]' />
            </div>
          </button> */}
        </div>
        <div className='flex lg:flex-row sm:flex-col justify-center items-center md:gap-6 sm:gap-4'>
          <img
            src={pp2}
            alt="Juvens"
            className='xl:h-[500px] xl:w-[450px] lg:h-[350px] lg:w-[300px] md:h-[300px] md:w-[250px] sm:h-[250px] sm:w-[200px] object-cover rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] border border-white/10 shadow-xl hover:rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] transition-all duration-1000 ease-in-out'
          />
          <ul className='flex lg:flex-col md:flex-row lg:gap-4 sm:gap-3 '>
            <a href="https://www.linkedin.com/in/juvens-laurensius-dwitama/" target="_blank">
              <img src={linkedin} alt="" className='xl:h-[48px] md:h-[40px] sm:h-[36px] cursor-pointer hover:opacity-70 transition duration-200' />
            </a>
            <a href="https://github.com/juvenslaurensiusdwitama" target="_blank">
              <img src={github} alt="" className='xl:h-[48px] md:h-[40px] sm:h-[36px] cursor-pointer hover:opacity-70 transition duration-200' />
            </a>
            <a>
              <img src={gmail} alt="" className='xl:h-[48px] md:h-[40px] sm:h-[36px] cursor-pointer hover:opacity-70 transition duration-200' />
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Introduction