import React from 'react'
import Experience from '../components/Experience'

const Experiences = () => {
  const datas = [
    {
      company: 'Ramu Studio',
      position: 'Front-End Web Developer',
      type: 'Freelance',
      startDate: 'Jan 2025',
      endDate: 'Feb 2025',
      description: 'blabla',
    },
    {
      company: 'PT. Hans Business (School Tech Indonesia)',
      position: 'IT Front-End Developer',
      type: 'Internship',
      startDate: 'Aug 2024',
      endDate: 'Dec 2024',
      description: 'blabla',
    },
    {
      company: 'PT. Marka Kreasi Persada (Alterra Academy)',
      position: 'Front-End Engineer With ReactJS',
      type: 'Apprenticeship',
      startDate: 'Feb 2024',
      endDate: 'Jun 2024',
      description: 'blabla',
    },
    {
      company: 'Course-Net',
      position: 'Full-Stack Web Developer',
      type: 'IT Bootcamp',
      startDate: 'Jul 2022',
      endDate: 'Sep 2022',
      description: 'blabla',
    },
  ]
  

  return (
    <div className='flex flex-col justify-center items-center h-dvh bg-amber-50'>
      <h1>Experiences</h1>
      {datas.map((data, i) =>(
        <Experience key={i} data={data} />
      ))}
    </div>
  )
}

export default Experiences