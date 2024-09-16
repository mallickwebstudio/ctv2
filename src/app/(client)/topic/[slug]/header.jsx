import Section from "@/components/ui/section";
import { formatNumber } from "@/lib/utils";
import { Users } from "lucide-react";

export default function Header() {
    return (
        <Section>
            <h1 className="h2 md:w-2/3">TOP 10 ACCOUNTING, FINANCE AND BANKING COURSES IN DUBAI, ABU DHABI, SHARJAH - UAE</h1>
            <h2 className="text-base font-normal md:text-lg md:text-muted-foreground">
                Home / Professional / Accounting, Finance and Banking / Anti-Money Laundering (AML) / CGSS (Certified Global Sanctions Specialist)
            </h2>

            <p className="-mt-sm sub-heading flex items-center gap-2">
                <Users className="size-base shrink-0" strokeWidth={3} />
                {formatNumber(32189798)} users
            </p>
        </Section>
    )
}
