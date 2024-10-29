import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSiteState } from "@/hooks/site-state-provider";
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation";

export default function SelectCountry({ className, triggerClassName, contentClassName, redirect }) {
    const { countries, selectedCountry, setSelectedCountry } = useSiteState();
    const router = useRouter();

    return (
        <Select className={className} onValueChange={(value) => { setSelectedCountry(value); (redirect && router.replace(value)) }}>
            <SelectTrigger className={cn("w-fit", triggerClassName)}>
                <SelectValue placeholder={selectedCountry || "Loading..."} />
            </SelectTrigger>
            <SelectContent className={contentClassName}>
                {countries.length > 0 && countries.map(item => (
                    <SelectItem className="cursor-pointer" value={item.href} key={item.label + "DesktopNavbar"}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
