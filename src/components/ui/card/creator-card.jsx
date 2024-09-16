import Image from "next/image";
import { StarFull } from "@/components/ui/svgs";
import { formatNumber } from "@/lib/utils";

export default function CreatorCard({ data }) {
    const {
        imageUrl = "/images/common/person.jpg",
        name = "John Doe",
        profession = "Website Developer",
        qualification = "B.Tech, BCA",
        rating = 4.9,
        students = 3323429,
        courses = 14,
    } = data;

    return (
        <div className="p-xs flex gap-base min-w-[20] md:border rounded overflow-hidden">
            <div className="flex flex-col items-center shrink-0">
                <Image
                    className="size-16 object-cover object-center border rounded-full"
                    src={imageUrl}
                    width={64}
                    height={64}
                    alt={name + " Image"}
                />
                <div className="flex items-center gap-1">
                    <div className="font-semibold">{rating}</div>
                    <StarFull />
                </div>
            </div>

            <div className="flex-1">
                <div className="font-semibold text-lg leading-6 line-clamp-1">{name}</div>
                <p className="text-sm leading-5 line-clamp-1">{profession}</p>
                <p className="text-sm leading-5 line-clamp-1">{qualification}</p>
                <div className="">
                    <span className="text-sm font-semibold"> {formatNumber(students)} </span>
                    <span className="text-muted-foreground text-xs"> Students </span>
                </div>
                <div className="">
                    <span className="text-sm font-semibold"> {courses} </span>
                    <span className="text-muted-foreground text-xs"> Courses </span>
                </div>
            </div>
        </div>
    )
}
