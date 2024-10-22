"use client";
import Image from "next/image";
import RenderStars from "@/components/ui/render-stars";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import PopOverCard from "./pop-over-card";

export default function FilterCourseCard({ data = {} }) {
    const {
        courseHref = "/",
        imageUrl = "/images/common/1.jpg",
        title = "The Complete Python boot camp from zero to hero in just a few months.",
        description = "The Complete Python boot camp from zero to hero in just a few months. The Complete Python boot camp from zero to hero in just a few months.",
        instructor = "Dr. Angela Yu, Developer and Leader of the community",
        rating = 4.6,
        totalRatings = 42329,
        price = 99.99,
        originalPrice = 199.99,
        bestseller = true,
    } = data;

    return (
        <HoverCard className="z-[9999]" openDelay={0} closeDelay={0} >
            <HoverCardTrigger asChild>
                
                <div className="relative py-sm border-b flex group transition-all">
                    {/* Card Image */}
                    <div className="relative w-20 md:h-full md:w-auto aspect-[1/.5625] overflow-hidden shrink-0">
                        <Image
                            className="object-cover object-center w-full select-none transition-all group-hover:brightness-75"
                            src={imageUrl}
                            width={320}
                            height={180}
                            alt="Course Image"
                        />
                    </div>

                    {/* Card Details */}
                    <div className="px-base lg:flex gap-base bg-background">
                        <div className="relative space-y-1 md:space-y-2">
                            <div className="text-lg font-semibold line-clamp-2 leading-5 hover:cursor-pointer group-hover:underline">
                                {title}
                            </div>

                            <div>
                                <div className="hidden md:block leading-5 line-clamp-1">{description}</div>
                            </div>

                            <p className='text-sm line-clamp-1 text-muted-foreground'>{instructor}</p>

                            <div className="flex gap-1 items-center">
                                <div className="font-sm font-bold">{rating.toFixed(1)}</div>
                                <div className="flex items-center gap-px">
                                    {<RenderStars className="size-3 lg:size-4" rating={rating} />}
                                </div>
                                <div className='font-xs text-muted-foreground'>({totalRatings})</div>
                            </div>
                        </div>

                        <div className="my-1">
                            <span className="text-2xl font-bold">${price}</span>
                            <s className="text-lg ml-1 font-semibold text-muted-foreground">${originalPrice}</s>
                        </div>

                    </div>
                </div>

            </HoverCardTrigger>

            <HoverCardContent
                className="hidden lg:block w-fit"
                avoidCollisions={false}
                side={"top"}
                // sideOffset={-600}
                direction="bottom"
            >
                <PopOverCard className=" lg:w-80" />
            </HoverCardContent>
        </HoverCard>
    )
}
