import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import link from "../assets/external-link.png"
import block from "../assets/block.png"

const Project = ({ data }) => {
    const select = 'hover:-translate-y-1 hover:border-white/15 hover:bg-white/15 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]'

    return (
        <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
        >
            <div className={`flex xl:flex-row lg:flex-col gap-4 text-white rounded-xl border border-transparent xl:p-5 lg:p-3 md:p-2 sm:p-1 transition-all duration-300 ${data.link ? select : null}`}>
                <div className="overflow-hidden ">
                    {data.image ? (
                        <img
                            src={data.image}
                            alt={data.projectName}
                            className="rounded-lg border border-white/10 xl:w-[200px] xl:h-[150px] lg:w-full lg:h-[300px] sm:w-[150px] sm:h-[100px] object-cover object-center"
                        />
                    ) : (
                        <div className="rounded-lg border border-white/10 xl:w-[200px] xl:h-[150px] lg:w-full lg:h-[300px] sm:w-[150px] sm:h-[100px] flex justify-center items-center bg-black/40 text-white/30 text-xs font-medium">
                            N/A
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-1 flex-1">
                    <div className="flex items-center justify-between">
                        <h2 className="lg:font-semibold md:text-lg sm:text-base sm:font-medium text-white tracking-tight flex items-center">
                            {data.projectName}
                            {data.status === true ? (
                                <img src={link} alt="" className="h-[12px] w-[12px] ml-2 inline" />
                            ) : null}
                        </h2>
                        {data.status === true ? (
                            <Badge className="bg-green-950 text-green-300 border-green-700 text-[10px] px-1.5 ">
                                Active
                            </Badge>
                        ) : (
                            <Badge className="bg-red-950 text-red-300 border-red-700 text-[10px] px-1.5 ">
                                Inactive
                            </Badge>
                        )}
                    </div>
                    <p className="text-white/60 pr-1 md:text-sm text-xs sm:leading-5 xl:leading-6 md:leading-5">
                        {data.description}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default Project