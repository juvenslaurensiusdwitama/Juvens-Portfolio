import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const Experience = ({ data }) => {
	const { image, company, position, type, startDate, endDate, descriptions } = data
	return (
		<div className="flex gap-6">
			<Separator orientation="vertical" className=''/>
			<div className='w-full flex flex-col gap-2'>
				<div className='flex justify-between items-center'>
					<h2 className="flex items-center gap-4">
						<img src={image} alt="" className="h-14 w-22 rounded"/>
						<div className="flex flex-col justify-center">
							<span className="font-medium text-2xl text-white/90">{company}</span>
							<p className="text-lg text-white/90">{position} - {type}</p>
						</div>
					</h2>
					<Badge className='bg-white/20 backdrop-blur-md'>
						<p className="text-[12px] text-white/90">{startDate} - {endDate}</p>
					</Badge>
				</div>
				<p className="mt-3 text-white/80">{descriptions}</p>
			</div>
		</div>
	)
}

export default Experience