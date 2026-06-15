import programmingGIF from '../assets/programming.gif'

const Introduction = () => {
  return (
    <div className='h-dvh flex justify-center items-center'>
      <div className='flex flex-col gap-8 max-w-[530px]'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl'>Hello, I'm Juvens.</h1>
          <h2 className='text-2xl'>The Full-Stack Developer who built this website.</h2>
        </div>
        <p className='text-lg'>I transform complex backend systems into seamless frontend interactions, from optimizing database queries to crafting pixel perfect user interfaces.</p>
        <ul className='flex gap-2'>
          <li>LinkedIn</li>
          <li>Gmail</li>
          <li>Github</li>
        </ul>
      </div>
      <img src={programmingGIF} alt="" className='h-[700px]'/>
    </div>
  )
}

export default Introduction