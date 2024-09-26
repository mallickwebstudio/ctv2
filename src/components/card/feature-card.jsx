import Link from 'next/link'
import React from 'react'
import RenderStars from '../ui/render-stars'
import Image from 'next/image'

export default function FeatureCard({ i, data = {} }) {
    const {
        courseHref = "#",
        imageUrl = "/images/common/1.jpg",
        instituteImageUrl = "/images/common/person.jpg",
        title = "The Complete Python boot camp from zero to hero in just a few months.",
        instructor = "Dr. Angela Yu, Developer and Leader of the community",
        rating = 4.7,
        totalRatings = 42329,
        enrolled = 50000,
        price = 99.99,
        originalPrice = 99.99,
        bestseller = true,
    } = data;

    return (
        <div className="p-base border border-border-light bg-background rounded-md">
            <Link className="absolute inset-0 " href="#">
                <span className="sr-only">Visit</span>
            </Link>
            <div className="relative py-sm flex flex-col md:flex-row group transition-all">
                {/* Card Image */}
                <div className="relative w-full md:w-[25rem] lg:w-[30rem] aspect-[1/.5625] overflow-hidden shrink-0">
                    <Image
                        className="object-cover object-center w-full select-none transition-all group-hover:brightness-75 rounded-md"
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
                            The Complete Python boot camp from zero to hero in just a few months.
                        </div>

                        <div>
                            <div className="hidden md:block leading-5 line-clamp-1">The Complete Python boot camp from zero to hero in just a few months. The Complete Python boot camp from zero to hero in just a few months.</div>
                        </div>

                        <div className="my-2 flex gap-xs items-center">
                            <Image
                                className="rounded-full size-5 aspect-square object-cover"
                                src={instituteImageUrl}
                                width={32}
                                height={32}
                                alt="Course Image"
                            />
                            <p className='text-sm line-clamp-1 text-muted-foreground'>
                                {instructor}
                            </p>
                        </div>

                        <div className="flex gap-1 items-center">
                            <div className="font-bold">{rating}</div>
                            <div className="flex items-center gap-px">
                                {<RenderStars className="size-3 lg:size-4" rating={rating} />}
                            </div>
                            <div className='font-xs text-muted-foreground'>({631})</div>
                        </div>

                        <div className="font-xs text-muted-foreground">
                            {enrolled}  Enrolled
                        </div>
                    </div>

                    <div className="flex-1" />

                    <div className="my-1">
                        <span className="text-2xl font-bold">$99.99</span>
                        <s className="text-lg ml-1 font-semibold text-muted-foreground">$999.99</s>
                    </div>

                </div>
            </div>
        </div>
    )
}
