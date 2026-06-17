import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const Experience = ({ data }) => {
	const { image, company, position, type, startDate, endDate, descriptions } = data
	return (
		<div className='w-full flex flex-col gap-3'>
			<div className='flex justify-between items-center'>
				<h2 className="text-2xl flex items-center gap-4">
					<img src={image} alt="" className="h-14 w-22 rounded"/>
					<div className="flex flex-col justify-center">
						<span>{company}</span>
						<p className="text-lg">{position} - {type}</p>
					</div>
				</h2>
				<Badge className='bg-white/30 backdrop-blur-md'>
					<p className="text-[12px]">{startDate} - {endDate}</p>
				</Badge>
			</div>
			<p className="mt-3">{descriptions}</p>
			<Separator className='mt-8' />
		</div>
	)
}

export default Experience