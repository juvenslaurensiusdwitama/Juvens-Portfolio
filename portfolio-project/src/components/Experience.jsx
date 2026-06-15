import React from 'react'

const Experience = ({ data }) => {
	const {company, position, type, startDate, endDate, description} = data
	return (
		<div className='w-[1000px]'>
			<div className='flex justify-between'>
				<h2>{company}</h2>
				<p>{startDate} - {endDate}</p>
			</div>
			<p>{position} - {type}</p>
			<p>{description}</p>
			<hr />
		</div>
	)
}

export default Experience