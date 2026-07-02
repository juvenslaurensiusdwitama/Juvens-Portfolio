import Project from '../components/Project'
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
      link: 'https://movieverse97.vercel.app/',
      delay: 700,
    },
    {
      image: greeve,
      projectName: 'Greeve',
      description: 'An e-commerce platform for eco-friendly products that support a greener environment. It focuses on a seamless product browsing experience and facilitates smooth buy/sell interactions.',
      status: false,
      link: null,
      delay: 600,
    },
    {
      image: schooltechh,
      projectName: 'Intern Pro',
      description: 'Collaborated with PMs, backend engineers, and UI/UX designers to deliver a responsive school management platform. Implemented core features, including role, partner, mentor, and activity management.',
      status: false,
      link: null,
      delay: 500,
    },
    {
      image: bmusic,
      projectName: 'B Music Studio',
      description: 'Developed a custom booking system and company profile for BMusicStudio, streamlining studio reservations and improving overall customer experience using modern technologies.',
      status: false,
      link: null,
      delay: 400,
    },
    {
      image: giat,
      projectName: 'GIAT AI',
      description: "A professional company profile website for PT Global Intelligence Artificial Technology. Developed to establish a clear brand identity and deliver engaging presentations for clients and stakeholders.",
      status: true,
      link: 'https://www.giat-ai.com/',
      delay: 300,
    },
    {
      image: reactrealm,
      projectName: 'React Realm',
      description: 'A gamified learning platform designed to make mastering React.js interactive and fun. Features include lessons, quizzes, a progression-based leveling system, and a shop for unlockable characters.',
      status: true,
      link: 'https://react-realm.vercel.app/',
      delay: 200,
    },
  ]

  return (
    <div 
      className='flex flex-col items-center gap-4 lg:pt-23 sm:pt-18 pt-4.5' 
      id='projects'
    >
      <h1 data-aos="fade-right" data-aos-duration={1000} className='xl:text-3xl lg:text-2xl sm:text-xl text-lg text-white font-semibold'>Past Projects</h1>
      <div className='w-full xl:max-w-[1300px] xl:px-[50px] lg:max-w-[910px] md:max-w-[700px] sm:max-w-[580px] max-w-[302px] grid grid-cols-1 lg:grid-cols-2 sm:gap-0 gap-4'>
        {datas.toReversed().map((data, index) => (
          <Project key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Projects