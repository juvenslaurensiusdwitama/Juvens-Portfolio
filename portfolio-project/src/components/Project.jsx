import {
    CarouselItem,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Project = ({ datas }) => {

    return (
        <>
            {datas.map((data, index) => (
                <CarouselItem key={index} className="basis-1/2 xl:basis-1/3 w-[200px]">
                    <div className="p-2  text-white">
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="w-full rounded-md"
                        />
                        <div className="py-4">
                            <div className="flex justify-between">
                                <span>{data.projectName}</span>
                                {data.status === true ?
                                    <Badge className="bg-green-50 text-green-700 bg-green-950 text-green-300">
                                        Active
                                    </Badge>
                                    : <Badge className="bg-red-50 text-red-700 bg-red-950 text-red-300">
                                        Inactive
                                    </Badge>
                                }
                            </div>
                            <span>{data.description}</span>
                        </div>
                        <div className="flex justify-center">
                            <Button className="w-full cursor-pointer bg-white/30 backdrop-blur-md border-0">
                                {data.status === true ?
                                    <span>{data.link}</span>
                                    : <span>Link Expired</span>
                                }
                            </Button>
                        </div>
                    </div>
                </CarouselItem>
            ))}

        </>
    )
}

export default Project