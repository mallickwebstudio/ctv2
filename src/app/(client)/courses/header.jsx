import Section from "@/components/ui/section";
import { cn, formatNumber } from "@/lib/utils";
import { ChevronRight, UserRound, Users, UsersRound } from "lucide-react";
import Link from "next/link";

export default function Header({ sectionClassName }) {
    return (
        <section className={sectionClassName}>
            <div className="p-base bg-background text-base font-normal md:text-lg md:text-muted-foreground border-t shadow-md flex gap-base items-center">
                <Link className="hover:underline" href="#"> <b>Home</b> </Link>
                <ChevronRight className="inline size-base shrink-0" />
                <span className="flex gap-base items-center overflow-x-scroll">
                    <Link className="hover:underline hover:text-link text-nowrap" href="#"> Professional </Link>
                    | <Link className="hover:underline hover:text-link text-nowrap" href="#"> Accounting, Finance and Banking </Link>
                    | <Link className="hover:underline hover:text-link text-nowrap" href="#"> Anti-Money Laundering (AML) </Link>
                    | <Link className="hover:underline hover:text-link text-nowrap" href="#"> CGSS (Certified Global Sanctions Specialist) </Link>
                </span>
            </div>
            <div className={cn(
                "mx-auto container p-6 md:px-12",
            )}>
                <h1 className="my-base h2 leading-8 md:w-2/3 capitalize">Top - 10 Accounting, Finance and Banking courses in dubai, Abu dhabi, Sharjha - UAE</h1>

                <p className=" sub-heading flex items-center gap-1">
                    <Users className="size-base shrink-0" strokeWidth={2} />
                    <UsersRound className="size-base shrink-0" strokeWidth={2} />
                    <UsersRound className="size-base shrink-0 fill-foreground" strokeWidth={2} />
                    {formatNumber(32189798)} students enrolled
                </p>
            </div>
        </section>
    )
}
