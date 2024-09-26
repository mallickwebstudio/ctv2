import Section from "@/components/ui/section";
import { formatNumber } from "@/lib/utils";
import { Users } from "lucide-react";

export default function Header() {
    return (
        <Section className="md:pt-8 lg:pt-8">
            <div className="text-base font-normal md:text-lg md:text-muted-foreground">
                Home / Professional / Accounting, Finance and Banking / Anti-Money Laundering (AML) / CGSS (Certified Global Sanctions Specialist)
            </div>
            <h1 className="my-base h2 leading-8 md:w-2/3">TOP 10 ACCOUNTING, FINANCE AND BANKING COURSES IN DUBAI, ABU DHABI, SHARJAH - UAE</h1>

            <p className="sub-heading flex items-center gap-1">
                <Users className="size-base shrink-0" strokeWidth={2} />
                {formatNumber(32189798)} users
            </p>
        </Section>
    )
}
