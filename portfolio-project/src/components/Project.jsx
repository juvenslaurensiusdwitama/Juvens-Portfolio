import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import link from "../assets/external-link.png"

const Project = ({ data }) => {
    return (
        <div className="flex items-center gap-5 text-white border-b border-white/15 pb-5">
            <div className="w-[250px] h-full rounded-lg overflow-hidden border border-white/10">
                {data.image ? (
                    <img
                        src={data.image}
                        alt={data.projectName}
                        className="w-full h-full object-cover object-center"
                    />
                ) : (
                    <div className="w-full h-full flex justify-center items-center text-white/30 text-xs font-medium">
                        N/A
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 justify-between">
                    <h2 className="font-semibold text-white tracking-tight text-xl">
                        {data.projectName}
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
                <p className="text-white/70 pr-1 text-sm leading-6">
                    {data.description}
                </p>
                <div className="pt-1">
                    {data.status === true ? (
                        <a
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <Button className="h-7 cursor-pointer bg-white/10 backdrop-blur-md border-0 hover:bg-white/25 text-white/90 text-sm flex gap-2 px-3 py-1 rounded-md">
                                <span>Go to Project</span>
                                <img src={link} alt="" className="h-[10px] w-[10px]" />
                            </Button>
                        </a>
                    ) : (
                        <Button className="h-7 backdrop-blur-md border-0 bg-black/80 hover:bg-black/80 text-white/70 text-sm px-3 py-1 rounded-md" disabled>
                            <span>Not Available</span>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project