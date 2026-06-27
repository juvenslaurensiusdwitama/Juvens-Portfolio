import React from 'react'
import Experience from '../components/Experience'
import ramu from '../assets/ramu.png'
import alterra from '../assets/alterra.jpeg'
import schooltech from '../assets/schooltech.png'

const Experiences = () => {
  const datas = [
    {
      image: ramu,
      company: 'Ramu Studio',
      position: 'Front-End Web Developer',
      type: 'Freelance',
      startDate: 'Jan 2025',
      endDate: 'Feb 2025',
      descriptions: 'Developed a custom booking system for BMusicStudio that streamlined studio reservations, improved customer experience, and boosted operational efficiency. I also developed and designed a professional company profile for PT GIAT (Global Intelligence Artificial Technology) that established a clear brand identity and delivered an engaging presentation to clients and stakeholders.'
    },
    {
      image: schooltech,
      company: 'SchoolTech Indonesia',
      position: 'IT Front-End Developer',
      type: 'Internship',
      startDate: 'Aug 2024',
      endDate: 'Dec 2024',
      descriptions: 'Collaborated with product managers and backend developers to implement core features such as role, partner, mentor, and activity management, while integrating RESTful APIs to deliver real-time data across student, teacher, and admin dashboards. I also worked with the UI/UX division to ensure a user-friendly interface, and built responsive web features for a school management platform using modern front-end tools. In an Agile/Scrum environment, I took part in code reviews, QA testing, and sprint planning, and consistently addressed bug fixes and feature improvements based on supervisor feedback.'
    },
    {
      image: alterra,
      company: 'Alterra Academy',
      position: 'Front-End Engineer With ReactJS',
      type: 'SIB Kampus Merdeka',
      startDate: 'Feb 2024',
      endDate: 'Jun 2024',
      descriptions: 'As the lead of the Front-end/React division for the capstone project, I developed the admin dashboard along with the manage products and product measurement data features, while collaborating closely with other divisions. In my personal projects, I built user authentication and authorization, implemented RESTful API for comments, and developed search, save, and AI chatbot features.',
    },
  ]
  

  return (
    <div 
      className='relative flex flex-col items-center justify-center gap-10 min-h-screen text-white' id='experiences'
    >
      <h1 className='text-4xl font-semibold'>My Experiences</h1>
      <div className='flex flex-col gap-14 justify-center items-center max-w-[1200px]'>
        {datas.map((data, i) =>(
          <Experience key={i} data={data}/>
        ))}
      </div>
    </div>
  )
}

export default Experiences