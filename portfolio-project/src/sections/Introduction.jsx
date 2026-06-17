import pp from '../assets/pp.jpeg'
import wavybg3 from '../assets/wavybg3.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'

const Introduction = () => {
  return (
    <div className={`flex justify-between items-center h-dvh gap-10 bg-center bg-cover px-[350px] border-b-[5px] border-solid border-white text-white`}
      style={{ backgroundImage: `url(${wavybg3})` }}
    >
      <div className='flex flex-col gap-8 max-w-[530px]'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl'>Hello, I'm Juvens.</h1>
          <h2 className='text-2xl'>The Full-Stack Developer who built this website.</h2>
        </div>
        <p className='text-lg'>I transform complex backend systems into seamless frontend interactions, from optimizing database queries to crafting pixel perfect user interfaces.</p>
        <ul className='flex gap-4'>
          <img src={github} alt=""  className='h-[48px] w-[48px] cursor-pointer hover:opacity-50 transition duration-200'/>
          <img src={linkedin} alt="" className='h-[48px] w-[48px] cursor-pointer hover:opacity-50 transition duration-200'/>
          <img src={gmail} alt="" className='h-[48px] w-[48px] cursor-pointer hover:opacity-50 transition duration-200'/>
        </ul>
      </div>
      <img src={pp} alt="" className='h-[700px]'/>
    </div>
  )
}

export default Introduction