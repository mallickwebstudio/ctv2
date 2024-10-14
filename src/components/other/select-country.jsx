import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSiteState } from "@/hooks/site-state-provider";
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";

export default function SelectCountry({ className, triggerClassName, contentClassName }) {
    const { countries, selectedCountry, setSelectedCountry } = useSiteState();

    return (
        <Select className={className} onValueChange={(value)=>setSelectedCountry(value)}>
            <SelectTrigger className={cn("w-fit", triggerClassName)}>
                <SelectValue placeholder={selectedCountry || "Loading..."} />
            </SelectTrigger>
            <SelectContent className={contentClassName}>
                {countries.length > 0 && countries.map(item => (
                    <SelectItem value={item.label} key={item.label + "DesktopNavbar"}>{item.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
