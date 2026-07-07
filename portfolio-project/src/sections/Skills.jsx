import Skill from '@/components/Skill'
import { skillDatas } from './Data/SkillDatas'

const Skills = () => {
  return (
    <div
      className='flex flex-col items-center sm:gap-6 gap-4 min-h-screen bg-center bg-cover lg:pt-23 sm:pt-18 pt-4.5 pb-40 z-40' id='skills'
    >
      <h1 data-aos="fade-left" data-aos-duration={1000} className='text-center text-white xl:text-3xl lg:text-2xl sm:text-xl text-lg font-semibold'>My Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full xl:max-w-[1300px] xl:px-[50px] lg:max-w-[910px] md:max-w-[700px] sm:max-w-[580px] sm:px-0 px-3 justify-center'>
        {skillDatas.map((data, index) => (
          <Skill key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Skills