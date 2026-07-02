const Experience = ({ data }) => {
	const { image, company, position, type, startDate, endDate, descriptions, delay } = data
	return (
		<div data-aos="fade-up" data-aos-duration={1000} data-aos-delay={data.delay} className="w-full rounded-[14px] border border-white/10 border-l-2 border-l-white/25 bg-white/[0.04] px-6 py-5.5 transition duration-300 hover:border-l-white/35 hover:border-white/15 hover:bg-white/[0.08]">
			<div className="flex sm:flex-row sm:items-center sm:justify-between items-start mb-3">
				<div className="flex items-center gap-3">
					<img
						src={image}
						alt={company}
						className="h-12 w-20 rounded-[10px] object-cover object-center border border-white/10 bg-white/8"
					/>
					<div className="flex flex-col gap-0.5">
						<span className="lg:font-semibold md:font-medium md:text-lg sm:text-base text-sm">{company}</span>
						<p className="md:text-sm text-xs lg:font-medium text-white/60 flex items-center gap-1.5">
							<span>{position}</span>
							<span className="sm:block hidden w-1 h-1 rounded-full bg-white/25" />
							<span className="sm:block hidden">{type}</span>
						</p>
					</div>
				</div>
				<span className="sm:block hidden md:text-xs text-[10px] font-medium text-white/60 bg-white/[0.06] border border-white/10 md:px-3 md:py-1 px-2 py-0.5 rounded-full whitespace-nowrap">
					{startDate} – {endDate}
				</span>
			</div>
			<div className="h-px bg-white/[0.08] mb-2" />
			<div className="sm:hidden flex items-center justify-between">
				<span className="text-xs text-white/60">
					<span className="text-white/40">Type:</span> <span className="text-white/70">{type}</span>
				</span>
				<span className="text-[10px] font-medium text-white/60 bg-white/[0.06] border border-white/10 px-2 py-0.5 rounded-full whitespace-nowrap">
					{startDate} – {endDate}
				</span>
			</div>
			<div className="h-px bg-white/[0.08] my-2 sm:hidden" />
			<p className="md:text-sm text-xs text-white/60 xl:leading-6.5 md:leading-6 sm:leading-5.5">{descriptions}</p>
		</div>
	)
}

export default Experience