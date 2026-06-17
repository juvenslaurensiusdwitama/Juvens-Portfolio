import {
    CarouselItem,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Project = ({ datas }) => {

    return (
        <>
            {datas.map((data, index) => (
                <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                    <Card className="relative mx-auto w-full max-w-sm pt-0">
                        <div className="absolute aspect-video bg-black/35" />
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="relative aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                            <CardAction>
                                <Badge variant="secondary">
                                    {data.status === true ?
                                        <span>Active</span>
                                        : <span>Expired</span>
                                    }
                                </Badge>
                            </CardAction>
                            <CardTitle>{data.projectName}</CardTitle>
                            <CardDescription>{data.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full">
                                {data.status === true ?
                                    <span>{data.link}</span>
                                    : <span>Link Expired</span>
                                }
                            </Button>
                        </CardFooter>
                    </Card>
                </CarouselItem>
            ))}

        </>
    )
}

export default Project