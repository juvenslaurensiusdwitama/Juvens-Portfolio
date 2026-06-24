import Project from '../components/Project'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import movieverse from "../assets/movieverse.png"
import reactrealm from "../assets/reactrealm.png"
import giat from "../assets/giat.png"
import greeve from "../assets/greeve.png"
import bmusic from "../assets/bmusic.png"
import schooltechh from "../assets/schooltechh.png"

const Projects = () => {
  const datas = [
    {
      image: movieverse,
      projectName: 'Movie Verse',
      description: 'An IMDb-style movie discovery platform for searching films, saving favorites, joining community discussions, and engaging with AI-powered chatbots for personalized recommendations.',
      status: true,
      link: 'https://movieverse97.vercel.app/'
    },
    {
      image: greeve,
      projectName: 'Greeve',
      description: 'An e-commerce platform for eco-friendly products that support a greener environment. It focuses on a seamless product browsing experience and facilitates smooth buy/sell interactions.',
      status: false,
      link: null
    },
    {
      image: schooltechh,
      projectName: 'Intern Pro',
      description: 'Collaborated with PMs, backend engineers, and UI/UX designers to deliver a responsive school management platform.  Implemented core management features, including role, partner, mentor, and activity management.',
      status: false,
      link: null
    },
    {
      image: bmusic,
      projectName: 'B Music Studio',
      description: 'Developed a custom booking system and company profile for BMusicStudio, streamlining studio reservations and improving customer experience.',
      status: false,
      link: null
    },
    {
      image: giat,
      projectName: 'GIAT AI',
      description: "A professional company profile website for PT Global Intelligence Artificial Technology. Developed to establish a clear brand identity and deliver engaging presentations for clients and stakeholders.",
      status: true,
      link: 'https://www.giat-ai.com/'
    },
    {
      image: reactrealm,
      projectName: 'React Realm',
      description: 'A gamified learning platform designed to make mastering React.js interactive and fun. Features include lessons, quizzes, a progression-based leveling system, and a shop for unlockable characters.',
      status: true,
      link: 'https://react-realm.vercel.app/'
    },
  ]

  return (
    <div className='flex flex-col gap-10 justify-center items-center h-dvh bg-center bg-cover' id='projects'>
      <h1 className='text-4xl text-white font-semibold'>Past Projects</h1>
      <div className='w-[1200px]'>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {datas.reverse().map((data, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Project data={data} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer bg-white/25 backdrop-blur-md border-0 hover:bg-white/35 text-white/70 hover:text-white/70" />
          <CarouselNext className="cursor-pointer bg-white/25 backdrop-blur-md border-0 hover:bg-white/35 text-white/70 hover:text-white/70" />
        </Carousel>
      </div>
    </div>
  )
}

export default Projects