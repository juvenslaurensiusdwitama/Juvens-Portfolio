// CHANGED: removed Separator and Badge imports — no longer used
import { Badge } from "@/components/ui/badge"

const Experience = ({ data }) => {
	const { image, company, position, type, startDate, endDate, descriptions } = data

	return (
		// CHANGED: replaced outer flex+Separator layout with a self-contained card
		// Added: dark fill, border, left accent line, rounded corners, hover effect
		<div className="w-full rounded-[14px] border border-white/10 border-l-2 border-l-white/25 bg-white/[0.04] px-6 py-5.5 transition duration-300 hover:border-l-white/35 hover:border-white/15 hover:bg-white/[0.08]">
			<div className="flex items-center justify-between mb-3">
				<div className="flex items-center gap-3">
					<img
						src={image}
						alt={company}
						className="h-12 w-20 rounded-[10px] object-cover object-center border border-white/10 bg-white/8"
					/>
					<div className="flex flex-col gap-0.5">
						<span className="lg:font-semibold md:font-medium md:text-lg sm:text-base">{company}</span>
						<p className="md:text-sm text-xs lg:font-medium text-white/60 flex items-center gap-1.5">
							{position}
							<span className="inline-block w-1 h-1 rounded-full bg-white/25" />
							{type}
						</p>
					</div>
				</div>
				<span className="md:text-xs sm:text-[10px] font-medium text-white/60 bg-white/[0.06] border border-white/10 md:px-3 md:py-1 px-2 py-0.5 rounded-full whitespace-nowrap">
					{startDate} – {endDate}
				</span>
			</div>

			<div className="h-px bg-white/[0.08] mb-2" />

			<p className="md:text-sm text-xs text-white/60 xl:leading-6.5 md:leading-6 sm:leading-5.5">{descriptions}</p>
		</div>
	)
}

export default Experience