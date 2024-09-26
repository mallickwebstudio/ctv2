import Image from "next/image";
import { StarFull } from "@/components/ui/svgs";
import { formatNumber } from "@/lib/utils";
import { GraduationCap, Users } from "lucide-react";
import { Badge } from "../badge";
import Link from "next/link";

export default function InstructorCard({ data }) {
    const {
        href = "#",
        imageUrl = "/images/common/person.jpg",
        name = "John Doe",
        profession = "Website Developer",
        rating = 4.9,
        students = 3323429,
        courses = 14,
    } = data;

    return (
        <Link className="relative block aspect-square overflow-hidden rounded-md border group transition-all" href={href}>
            <div className="absolute inset-0 size-full z-0">
                <Image
                    className="size-full object-cover object-center border"
                    src={imageUrl}
                    width={250}
                    height={250}
                    alt={name + " Image"}
                />
            </div>

            <div className="absolute z-10 size-full inset-0 bg-gradient-to-t from-dark/80 group-hover:from-dark transition-all " />

            <div className="relative size-full text-white flex flex-col justify-end p-xs overflow-hidden z-20">
                <div className="flex justify-between gap-base">
                    <div className="font-bold text-lg leading-6 line-clamp-1">{name}</div>
                    <div className="flex items-center gap-1">
                        <div className="font-bold text-lg">{rating}</div>
                        <StarFull className="size-4" />
                    </div>
                </div>

                <p className="-my-1 text-white/90 font-medium">{profession}</p>

                <div className="mt-1 flex gap-base">
                    <div className="flex gap-1 items-center">
                        <Users className="size-base shrink-0 text-white/70" strokeWidth={2} />
                        <span className="text-sm font-medium"> {formatNumber(students)} </span>
                        {/* <span className="text-muted-foreground text-xs"> Students </span> */}
                    </div>
                    <div className="flex gap-1 items-center">
                        <GraduationCap className="size-base shrink-0 text-white/70" strokeWidth={2} />
                        <span className="text-sm font-medium"> {courses} </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
