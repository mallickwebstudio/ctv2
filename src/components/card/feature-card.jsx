import Link from 'next/link'
import React from 'react'
import RenderStars from '../ui/render-stars'
import Image from 'next/image'
import { Clock, LocateIcon, MapPin } from 'lucide-react';
import { Button } from '../ui/button';

export default function FeatureCard({ i, data = {} }) {
    const {
        courseHref = "#",
        thumbnailUrl = "/images/common/1.jpg",
        courseName = "Certified UAE VAT Compliance Course",
        courseDescription = "The United Arab Emirates (UAE) implemented a Value Added Tax (VAT) on January 1, 2018, in a bid to diversify its revenue sources.",
        instructorImageUrl = "/images/common/person.jpg",
        instructorName = "Dr. Angela Yu, Developer and Leader of the community",
        rating = 4.7,
        totalRatings = 42329,
        enrolled = 50000,
        price = 99.99,
        originalPrice = 99.99,
        bestseller = true,
        location = ["Delhi", "Mumbai"],
        localCourse = false,
        duration = "10"
    } = data;

    return (
        <div className="p-base border border-border-light bg-background rounded-md">
            {/* <Link className="absolute block inset-0 " href="#">
                <span className="sr-only">Visit</span>
            </Link> */}
            <div className="relative flex flex-col md:flex-row group transition-all">
                {/* Card Image */}
                <div className="relative w-full md:w-[25rem] lg:w-[30rem] aspect-[1/.5625] rounded-md overflow-hidden shrink-0">
                    <Image
                        className="object-cover object-center size-full select-none transition-all group-hover:brightness-75"
                        src={`/images/common/${i}.jpg`}
                        width={320}
                        height={180}
                        alt="Course Image"
                        />
                </div>

                {/* Card Details */}
                <div className="pt-base md:pt-0 md:px-base flex flex-col gap-base">
                    <div className="relative space-y-1 md:space-y-2">
                        <div className="text-lg font-semibold line-clamp-2 leading-5 hover:cursor-pointer group-hover:underline">
                            {courseName}
                        </div>

                        <div>
                            <div className="hidden md:block leading-5 line-clamp-1">{courseDescription}</div>
                        </div>

                        <div className="my-2 flex gap-xs items-center">
                            <Image
                                className="rounded-full size-5 aspect-square object-cover"
                                src={`/images/common/${i}.jpg`}
                                width={32}
                                height={32}
                                alt="Course Image"
                            />
                            <p className='text-sm line-clamp-1 text-muted-foreground'>
                                {instructorName}
                            </p>
                        </div>

                        <div className="flex gap-1 items-center">
                            <div className="font-bold">{rating}</div>
                            <div className="flex items-center gap-px">
                                {<RenderStars className="size-3 lg:size-4" rating={rating} />}
                            </div>
                            <div className='font-xs text-muted-foreground'>({totalRatings})</div>
                        </div>

                        <div className="font-xs">
                            {enrolled}  <span className='text-muted-foreground'>Enrolled</span>
                        </div>

                        <div className="flex gap-1 items-center">
                            <MapPin className='size-base shrink-0  text-muted-foreground' />
                            <div className="flex font-xs gap-[2px] line-clamp-1">
                                {location.map(item => (
                                    <span className="after:content-[','] last:after:content-['']" key={item + "FeatureCardLocarion"}>{item}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-1 items-center">
                            <Clock className='size-base shrink-0  text-muted-foreground' />
                            <div className="flex font-xs gap-[2px] line-clamp-1">
                                {duration} hours
                            </div>
                        </div>
                    </div>

                    <div className="flex-1" />

                    <div className="mt-1">
                        <span className="text-2xl font-bold">${price}</span>
                        <s className="text-lg ml-1 font-semibold text-muted-foreground">${originalPrice}</s>
                    </div>

                </div>
            </div>
        </div>
    )
}
