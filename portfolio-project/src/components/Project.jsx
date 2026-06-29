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
            <div className={`flex items-center gap-4 text-white p-4 rounded-xl border border-transparent p-5 transition-all duration-300 ${data.link ? select : null}`}>
                <div className="rounded-lg overflow-hidden border border-white/10">
                    {data.image ? (
                        <img
                            src={data.image}
                            alt={data.projectName}
                            className="w-[200px] h-[150px] object-cover object-center"
                        />
                    ) : (
                        <div className="w-[200px] h-[150px] flex justify-center items-center bg-black/40 text-white/30 text-xs font-medium">
                            N/A
                        </div>
                    )}
                </div>
                <div className="flex flex-col justify-center gap-1 flex-1">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-lg text-white tracking-tight flex items-center">
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
                    <p className="text-white/60 pr-1 text-sm leading-6 ">
                        {data.description}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default Project