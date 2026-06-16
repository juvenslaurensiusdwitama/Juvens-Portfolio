import { Separator } from "@/components/ui/separator"

const Experience = ({ data }) => {
	const {company, position, type, startDate, endDate, descriptions} = data
	return (
		<div className='w-full flex flex-col gap-4'>
			<div className='flex justify-between'>
				<h2>{company}</h2>
				<p>{startDate} - {endDate}</p>
			</div>
			<p>{position} - {type}</p>
			<p>{descriptions}</p>
			<Separator className='my-8'/>
		</div>
	)
}

export default Experience