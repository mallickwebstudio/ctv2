"use client";
import Image from "next/image";
import RenderStars from "@/components/ui/render-stars";
import { cn, formatNumber } from '@/lib/utils';

export default function CourseChunkCard({ data }) {
    const {
        courseHref = "/",
        imageUrl = "/images/common/1.jpg",
        title = "The Complete Python boot camp from zero to hero in just a few months.",
        instructor = "Dr. Angela Yu, Developer and Leader of the community",
        rating = 4.6,
        totalRatings = 42329,
        price = 99.99,
        originalPrice = 99.99,
        bestseller = true,
    } = data;

    return (
        <div className={cn(
            "relative group md:hover:shadow-md rounded transition-all",
            "flex md:block gap-xs md:gap-0"
        )}>

            {/* Card Image */}
            <div className="relative w-20 md:w-full aspect-square md:aspect-video overflow-hidden md:border shrink-0">
                <Image
                    className="object-cover object-center w-full select-none group-hover:brightness-75"
                    src={imageUrl}
                    width={160}
                    height={90}
                    alt="volkswagen Logo"
                />
            </div>

            {/* Card Details */}
            <div className="relative mt-1 md:space-y-2">
                <div className="text-lg font-semibold line-clamp-2 leading-5 hover:cursor-pointer hover:underline">
                    {title}
                </div>
                <p className='text-sm line-clamp-1'>{instructor}</p>

                <div className="flex gap-1 items-center">
                    <div className="font-xs text-muted-foreground font-bold">{rating.toFixed(1)}</div>
                    <div className="flex items-center gap-px">
                        {<RenderStars rating={rating} />}
                    </div>
                    <div className='text-xs md:text-sm text-muted-foreground'>({formatNumber(totalRatings)})</div>
                </div>

                <div className="my-1">
                    <span className="text-xl md:text-2xl font-bold">${price}</span>
                    <s className="ml-1 font-semibold text-muted-foreground">${originalPrice}</s>
                </div>

                {bestseller && <div className="my-1 py-[2px] px-2 size-fit text-sm md:text-base flex-center bg-info font-semibold">Bestseller</div>}
            </div>
        </div>
    );
}