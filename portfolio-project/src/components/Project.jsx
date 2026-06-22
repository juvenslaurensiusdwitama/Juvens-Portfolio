import {
    CarouselItem,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import link from "../assets/external-link.png"

const Project = ({ data }) => {
    return (
        <div className=" text-white flex flex-col gap-4 p-2">
            {data.image ?
                <img
                    src={data.image}
                    className="w-full rounded-md h-[300px] object-cover object-center"
                />
                :
                <div className="rounded-md w-full h-[300px] flex justify-center items-center bg-white/30 backdrop-blur-md">
                    <span>Not Available</span>
                </div>
            }
            <div className="flex flex-col">
                <div className="flex flex-col gap-1 justify-center">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-white text-lg">{data.projectName}</span>
                        {data.status === true ?
                            <Badge className="bg-green-950 text-green-300 border-green-700">
                                Active
                            </Badge>
                            : <Badge className="bg-red-950 text-red-300 border-red-700">
                                Inactive
                            </Badge>
                        }
                    </div>
                    <p className="text-sm text-white/80 min-h-[120px]">{data.description}</p>
                </div>
                <div className="flex justify-center">
                    {data.status === true ?
                        <a
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <Button className="w-full cursor-pointer bg-white/15 backdrop-blur-md border-0 hover:bg-white/25 text-white/90 truncate flex gap-2">
                                <span>Go to Project</span>
                                <img src={link} alt="" className="h-[14px]"/>
                            </Button>
                        </a>
                        :
                        <Button className="w-full backdrop-blur-md border-0 truncate bg-black/40 hover:bg-black/40">
                            <span className="text-white/60">Not Available</span>
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Project