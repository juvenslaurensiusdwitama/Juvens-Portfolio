import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const Experience = ({ data }) => {
	const { image, company, position, type, startDate, endDate, descriptions } = data
	return (
		<div className="flex gap-6">
			<Separator orientation="vertical" className='bg-white/20' />
			<div className='w-full flex flex-col gap-2'>
				<div className='flex justify-between items-start'>
					<h2 className="flex items-center gap-4">
						<img
							src={image}
							alt={company}
							className="h-14 w-22 rounded-md object-cover object-center"
						/>
						<div className="flex flex-col justify-center gap-1">
							<span className="font-semibold text-xl">{company}</span>
							<p className="text-base text-white/70">
								{position}
								<span className="mx-2">•</span>
								{type}
							</p>
						</div>
					</h2>
					<Badge className="border border-white/10 bg-white/10 px-3 py-1 backdrop-blur-md">
						<span className="text-xs font-medium text-white/80">
							{startDate} - {endDate}
						</span>
					</Badge>
				</div>
				<p className="mt-2 text-white/70 leading-7">{descriptions}</p>
			</div>
		</div>
	)
}

export default Experience