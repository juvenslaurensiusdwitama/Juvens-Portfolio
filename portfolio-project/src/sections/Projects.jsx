import Project from '../components/Project'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Projects = () => {
  const datas = [
    {
      image: '',
      projectName: 'Movie Verse',
      description: 'blabla',
      status: true,
      link: 'https://movieverse97.vercel.app/'
    },
    {
      image: '',
      projectName: 'Greeve',
      description: 'blabla',
      status: false,
      link: null
    },
    {
      image: '',
      projectName: 'Intern Pro',
      description: 'blabla',
      status: false,
      link: null
    },
    {
      image: '',
      projectName: 'B Music Studio',
      description: 'blabla',
      status: false,
      link: null
    },
    {
      image: '',
      projectName: 'GIAT AI',
      description: 'blabla',
      status: true,
      link: 'https://www.giat-ai.com/'
    },
    {
      image: '',
      projectName: 'React Realm',
      description: 'blabla',
      status: true,
      link: 'https://react-realm.vercel.app/'
    },
  ]

  return (
    <div className='flex flex-col gap-10 justify-center items-center h-dvh bg-center bg-cover'>
      <h1 className='text-4xl text-white'>Past Projects</h1>
      <Carousel>
        <CarouselContent>
          <Project datas={datas.reverse()}/>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Projects