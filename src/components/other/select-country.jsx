import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";

export default function SelectCountry({ className, triggerClassName, contentClassName }) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('/api/get-country'); // Fetch from Next.js API route
                const data = await response.json();
                setCountries(data.data); // Set fetched data to state
            } catch (error) {
                console.error('Error fetching Countries data:', error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <Select className={className}>
            <SelectTrigger className={cn("w-fit", triggerClassName)}>
                <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent className={contentClassName}>
                <SelectItem value="online">Online</SelectItem>
                {countries.length > 0 && countries.map(item => (
                    <SelectItem value={item} key={item + "DesktopNavbar"}>{item}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
