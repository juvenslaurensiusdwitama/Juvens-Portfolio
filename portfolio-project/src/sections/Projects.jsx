import Project from '../components/Project'
import { projectDatas } from './Data/projectDatas'

const Projects = () => {
  return (
    <div 
      className='flex flex-col items-center gap-4 lg:pt-23 sm:pt-18 pt-4.5' 
      id='projects'
    >
      <h1 data-aos="fade-right" data-aos-duration={1000} className='xl:text-3xl lg:text-2xl sm:text-xl text-lg text-white font-semibold'>Past Projects</h1>
      <div className='w-full xl:max-w-[1300px] xl:px-[50px] lg:max-w-[910px] md:max-w-[700px] sm:max-w-[580px] max-w-[302px] grid grid-cols-1 lg:grid-cols-2 sm:gap-0 gap-4'>
        {projectDatas.toReversed().map((data, index) => (
          <Project key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Projects