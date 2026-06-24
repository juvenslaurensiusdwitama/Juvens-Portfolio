import pp2 from '../assets/pp2.png'
import download from "../assets/download.png"
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'

const Introduction = () => {
  return (
    <div className='flex justify-center h-dvh' id='introduction'>
      <div className={`flex justify-between items-center text-white w-full max-w-[1200px]`}>
        <div className='flex flex-col gap-4 max-w-[610px]'>
          <h1 className='text-7xl font-bold'>Hello, I'm Juvens!</h1>
          <h2 className='text-2xl text-white/90 font-semibold'>A Full-Stack Web Developer.</h2>
          <p className='text-lg text-white/80'>Architecting scalable backend systems and crafting intuitive, pixel-perfect interfaces. I build full-stack web applications where high-performance engineering meets exceptional user experience.</p>
          <button className='bg-white/30 backdrop-blur-md rounded-md cursor-pointer w-fit'>
            <div className="flex items-center gap-2 hover:bg-white/15 rounded-md py-2 px-5 transition duration-200">
              <p className='text-lg font-[500] text-white'>Resume</p>
              <img src={download} alt="" className='h-[16px] font-[500]' />
            </div>
          </button>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <img
            src={pp2}
            alt="Juvens"
            className='h-[500px] w-[450px] object-cover rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] border border-white/10 shadow-xl hover:rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] transition-all duration-1000 ease-in-out'
          />
          <ul className='flex flex-col gap-4 '>
            <a href="https://www.linkedin.com/in/juvens-laurensius-dwitama/" target="_blank">
              <img src={linkedin} alt="" className='h-[48px] cursor-pointer hover:opacity-50 transition duration-200' />
            </a>
            <a href="https://github.com/juvenslaurensiusdwitama" target="_blank">
              <img src={github} alt="" className='h-[48px] cursor-pointer hover:opacity-50 transition duration-200' />
            </a>
            <a>
              <img src={gmail} alt="" className='h-[48px] cursor-pointer hover:opacity-50 transition duration-200' />
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Introduction