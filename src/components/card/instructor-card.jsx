import Image from "next/image";
import { StarFull } from "@/components/ui/svgs";
import { formatNumber } from "@/lib/utils";
import { GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { baseUrl } from "@/lib/datas/api";

export default function InstructorCard({ data, i }) {
    const {
        href = "#",
        imageUrl = "/images/common/person.jpg",
        name = "John Doe",
        profession = "Website Developer",
        rating = 4.9,
        students = 3323429,
        courses = 14,       
        location = ["Delhi", "Mumbai"],
        localCourse = false,
    } = data;

    return (
        <Link className="relative block aspect-square overflow-hidden rounded-md group transition-all" href={href}>
            <div className="absolute inset-0 size-full z-0">
                <img
                    className="size-full object-cover object-center"
                    src={imageUrl ? (baseUrl + imageUrl) : `/images/common/person.jpg`}
                    alt={name + " Image"}
                />
            </div>

            <div className="absolute z-10 size-full inset-0 bg-gradient-to-t from-dark/80 to-transparent group-hover:from-dark transition-all " />

            <div className="absolute top-xs left-xs px-1 bg-white border rounded-full flex items-center gap-1">
                <div className="font-bold">{rating}</div>
                <StarFull className="size-4" />
            </div>

            <div className="relative size-full text-white flex flex-col justify-end p-xs overflow-hidden z-20">
                <div className="flex justify-between gap-base">
                    <div className="font-bold text-md leading-5 line-clamp-2">{name}</div>
                </div>

                <p className="text-white/90 text-sm line-clamp-2">{localCourse
                    ? <span className="flex font-xs gap-[2px] line-clamp-1">
                        {location.map(item => (
                            <span className="after:content-[','] last:after:content-['']" key={item + "FeatureCardLocarion"}>{item}</span>
                        ))}
                    </span>
                    : profession
                }</p>

                <div className="mt-1 text-sm flex">
                    <div className="pr-2 border-r">
                        <span className="font-medium"> {formatNumber(students)} </span>
                        <span className="text-white/75 text-xs">Enrolled</span>
                    </div>
                    <div className="pl-2">
                        <span className="font-medium"> {courses} </span>
                        <span className="text-white/75 text-xs">Courses</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
