import { useSiteState } from "@/components/providers/site-state-provider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function SelectCountry({ className, triggerClassName, contentClassName }) {
    const { countries } = useSiteState();

    return (
        <Select className={className}>
            <SelectTrigger className={cn("w-fit", triggerClassName)}>
                <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent className={contentClassName}>
                {countries.map(item => (
                    <SelectItem value={item} key={item + "DesktopNavbar"}>{item}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
