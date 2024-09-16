"use client";
import Image from "next/image";
import RenderStars from "@/components/ui/render-stars";
import Link from "next/link";

export default function CourseCard({ data }) {
    const {
        courseHref = "#",
        imageUrl = "/images/common/1.jpg",
        instituteImageUrl="/images/common/person.jpg",
        title = "The Complete Python boot camp from zero to hero in just a few months.",
        instructor = "Dr. Angela Yu, Developer and Leader of the community",
        rating = 4.6,
        totalRatings = 42329,
        price = 99.99,
        originalPrice = 99.99,
        bestseller = true,
    } = data;

    return (
        <Link className="relative block rounded group transition-all" href={courseHref}>
            {/* Card Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-md">
                <Image
                    className="object-cover object-center w-full select-none transition-all group-hover:brightness-75"
                    src={imageUrl}
                    width={320}
                    height={180}
                    alt="Course Image"
                />
            </div>

            {/* Card Details */}
            <div className="relative mt-1 space-y-1 md:space-y-2 bg-background">
                <div className="text-lg font-semibold line-clamp-2 leading-5 hover:cursor-pointer group-hover:underline">
                    {title}
                </div>
                <div className="flex gap-xs items-center">
                    <Image
                        className="rounded-full size-5 aspect-square object-cover"
                        src={instituteImageUrl}
                        width={32}
                        height={32}
                        alt="Course Image"
                    />
                    <p className='text-sm line-clamp-1 text-muted-foreground'>{instructor}</p>
                </div>

                <div className="flex gap-1 items-center">
                    <div className="font-sm font-bold">{rating.toFixed(1)}</div>
                    <div className="flex items-center gap-px">
                        {<RenderStars className="size-3 md:size-4" rating={rating} />}
                    </div>
                    <div className='font-xs text-muted-foreground'>({totalRatings})</div>
                </div>

                <div className="my-1">
                    <span className="text-2xl font-bold">${price}</span>
                    <s className="text-lg ml-1 font-semibold text-muted-foreground">${originalPrice}</s>
                </div>

                {bestseller && <div className="py-[2px] px-2 size-fit flex-center bg-info font-semibold rounded-md">Bestseller</div>}
            </div>
        </Link>
    );
}
