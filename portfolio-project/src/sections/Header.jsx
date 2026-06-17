import download from "../assets/download.png"

const Header = () => {
  return (
    <div className='flex text-white justify-between items-center py-5 fixed top-0 left-0 right-0 px-[350px] z-50'>
      <h1 className='text-2xl font-[600] cursor-pointer'>Juvens.dev</h1>
      <ul className='flex text-lg font-[500] bg-white/30 backdrop-blur-md rounded-4xl'>
        <li className='cursor-pointer rounded-l-full hover:bg-white/15 py-2 px-5 transition duration-200'>About</li>
        <li className='border border-white/25'></li>
        <li className='cursor-pointer hover:bg-white/15 py-2 px-5 transition duration-200'>Experiences</li>
        <li className='border border-white/25'></li>
        <li className='cursor-pointer hover:bg-white/15 py-2 px-5 transition duration-200'>Projects</li>
        <li className='border border-white/25'></li>
        <li className='cursor-pointer rounded-r-full hover:bg-white/15 py-2 px-5 transition duration-200'>Skills</li>
      </ul>
      <button className='bg-white/30 backdrop-blur-md rounded-md cursor-pointer'>
        <div className="flex items-center gap-2 hover:bg-white/15 rounded-md py-2 px-5 transition duration-200">
          <p className='text-lg font-[500] text-white'>Resume</p>
          <img src={download} alt="" className='h-[16px] font-[500]'/>
        </div>
      </button>
    </div>
  )
}

export default Header