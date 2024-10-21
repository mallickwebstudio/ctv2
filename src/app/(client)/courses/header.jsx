import Section from "@/components/ui/section";
import { cn, formatNumber } from "@/lib/utils";
import { UserRound, Users, UsersRound } from "lucide-react";

export default function Header({sectionClassName}) {
    return (
        <Section className={cn("md:pt-8 lg:pt-8",sectionClassName)}>
            <div className="text-base font-normal md:text-lg md:text-muted-foreground">
                Home / Professional / Accounting, Finance and Banking / Anti-Money Laundering (AML) / CGSS (Certified Global Sanctions Specialist)
            </div>
            <h1 className="my-base h2 leading-8 md:w-2/3 capitalize">Top - 10 Accounting, Finance and Banking courses in dubai, Abu dhabi, Sharjha - UAE</h1>

            <p className="md:-mb-block sub-heading flex items-center gap-1">
                <Users className="size-base shrink-0" strokeWidth={2} />
                <UsersRound className="size-base shrink-0" strokeWidth={2} />
                <UsersRound className="size-base shrink-0 fill-foreground" strokeWidth={2} />
                {formatNumber(32189798)} students enrolled
            </p>
        </Section>
    )
}
