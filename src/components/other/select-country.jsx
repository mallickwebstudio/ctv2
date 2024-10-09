import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";

export default function SelectCountry({ className, triggerClassName, contentClassName }) {
    const [defaultValue, setDefaultValue] = useState({ label: "" });
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('/api/get-country'); // Fetch from Next.js API route
                const data = await response.json();
                setCountries(data.data); // Set fetched data to state
                setDefaultValue(data.data[0]);
            } catch (error) {
                console.error('Error fetching Countries data:', error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <Select className={className}>
            <SelectTrigger className={cn("w-fit", triggerClassName)}>
                <SelectValue placeholder={(defaultValue && defaultValue.label) || "Loading..."} />
            </SelectTrigger>
            <SelectContent className={contentClassName}>
                {countries.length > 0 && countries.map(item => (
                    <SelectItem value={item.label} key={item.label + "DesktopNavbar"}>{item.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
