import pp from '../assets/pp.jpeg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'

const Introduction = () => {
  return (
    <div className={`flex justify-between items-center h-dvh gap-10 bg-center bg-cover text-white`}>
      <div className='flex flex-col gap-4 max-w-[700px]'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-7xl'>Hello, I'm Juvens!</h1>
          <h2 className='text-3xl'>The Full-Stack Developer who built this website.</h2>
        </div>
        <p className='text-xl'>I transform complex backend systems into seamless frontend interactions, from optimizing database queries to crafting pixel perfect user interfaces.</p>
        <ul className='flex gap-4 mt-6'>
          <img src={github} alt=""  className='h-[64px] cursor-pointer hover:opacity-50 transition duration-200'/>
          <img src={linkedin} alt="" className='h-[64px] cursor-pointer hover:opacity-50 transition duration-200'/>
          <img src={gmail} alt="" className='h-[64px] cursor-pointer hover:opacity-50 transition duration-200'/>
        </ul>
      </div>
      <img src={pp} alt="" className='h-[500px]'/>
    </div>
  )
}

export default Introduction