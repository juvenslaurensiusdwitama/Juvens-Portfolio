import React from 'react'

const Skill = ({ data }) => {
  return (
    <div className='flex items-center bg-white/20 backdrop-blur-md gap-4 p-3 rounded-md'>
      <img src={data.icon} alt={data.name} className='w-16 h-16' />
      <div className='flex flex-col'>
        <p className='text-white'>{data.name}</p>
        <p className='text-white text-sm'>{data.type}</p>
      </div>
    </div>
  )
}

export default Skill