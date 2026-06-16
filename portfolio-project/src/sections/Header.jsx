import download from "../assets/download.png"

const Header = () => {
  return (
    <div className='flex justify-between items-center py-4 fixed top-0 left-0 right-0 px-[300px]'>
      <h1 className='text-2xl font-[600]'>Juvens.dev</h1>
      <ul className='flex gap-8 text-xl font-[500]'>
        <li className=''>About</li>
        <li className=''>Experiences</li>
        <li className=''>Projects</li>
        <li className=''>Skills</li>
      </ul>
      <button className='flex items-center gap-2 bg-black px-4 py-2 rounded-md'>
        <p className='text-lg font-[500] text-white'>Resume</p>
        <img src={download} alt="" className='h-[14px] font-[500]'/>
      </button>
    </div>
  )
}

export default Header