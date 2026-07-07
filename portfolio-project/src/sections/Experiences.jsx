import Experience from '../components/Experience'
import { experienceDatas } from './Data/experienceDatas'

const Experiences = () => {
  return (
    <div
      className='relative flex flex-col items-center sm:gap-6 gap-4 text-white lg:pt-23 sm:pt-18 pt-4.5 z-40'
      id='experiences'
    >
      <h1 className='xl:text-3xl lg:text-2xl sm:text-xl text-lg font-semibold' data-aos="fade-left" data-aos-duration={800}>Experiences</h1>
      <div className='flex flex-col xl:gap-5 md:gap-4.5 gap-4 justify-center items-center w-full xl:max-w-[1300px] xl:px-[50px] lg:max-w-[910px] md:max-w-[700px] sm:max-w-[580px] sm:px-0 px-3'>
        {experienceDatas.map((data, i) => (
          <Experience key={i} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Experiences