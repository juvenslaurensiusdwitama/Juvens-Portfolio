import pp2 from '../assets/pp2.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'

const Introduction = () => {
  return (
    <div className='flex justify-center h-dvh' id='introduction'>
      <div className={`flex justify-between items-center text-white w-full max-w-[1200px]`}>
        <div className='flex flex-col gap-4 max-w-[650px]'>
          <h1 className='text-7xl font-bold'>Hello, I'm Juvens!</h1>
          <h2 className='text-2xl text-white/90 font-semibold'>A Full-Stack Web Developer.</h2>
          <p className='text-lg text-white/80'>Architecting scalable backend systems and crafting intuitive, pixel-perfect interfaces. I build full-stack web applications where high-performance engineering meets exceptional user experience.</p>
          <ul className='flex gap-4 mt-2'>
            <img src={github} alt="" className='h-[48px] cursor-pointer hover:opacity-50 transition duration-200' />
            <img src={linkedin} alt="" className='h-[48px] cursor-pointer hover:opacity-50 transition duration-200' />
            <img src={gmail} alt="" className='h-[48px] cursor-pointer hover:opacity-50 transition duration-200' />
          </ul>
        </div>
        <img
          src={pp2}
          alt="Juvens"
          className='h-[500px] w-[450px] object-cover rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border border-white/10 shadow-xl hover:rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] transition-all duration-1000 ease-in-out'
        />
      </div>
    </div>
  )
}

export default Introduction