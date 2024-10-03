"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { useSiteState } from "@/components/providers/site-state-provider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { useEffect, useState } from "react"

export default function AskUs({ children }) {
    // const { countries, cities } = useSiteState();
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    const fetchCountries = async () => {
        try {
            const response = await fetch('/api/get-country'); // Fetch from Next.js API route
            const data = await response.json();
            setCountries(data.data); // Set fetched data to state
        } catch (error) {
            console.error('Error fetching Countries data:', error);
        }
    };

    const fetchCities = async (country) => {
        try {
            const response = await fetch(`/api/get-cities/${country || "India"}`); // Fetch from Next.js API route
            const data = await response.json();
            setCities(Object.values(data.data)); // Set fetched data to state
        } catch (error) {
            console.error('Error fetching Cities data:', error);
        }
    };

    useEffect(() => {
        fetchCountries();
        fetchCities();
    }, []);


    const [formData, setFormData] = useState({
        firstname: "",
        contactNumber: "",
        country: "",
        city: "",
        courseName: "",
        email: "",
        message: "",
        content: false
    });

    const handleInputChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }))
    }

    const handleSelectChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
        fetchCities(value);
    }

    const handleSubmit = () => {
        toast({
            title: "🎉 You're on the Waitlist!",
            description: <>
                <div>
                    Thank you for applying. We&apos;ll be in touch soon!,
                    In the meantime, check out <Link className="underline underline-offset-2 hover:text-primary" href="/"> how it works </Link> for more info.
                </div>
                <div>
                    <pre className="mt-2">
                        <code>{JSON.stringify(formData, null, 2)}</code>
                    </pre>
                </div>
            </>,
            duration: 15000
        });
    }

    return (
        <Dialog>
            <DialogTrigger>
                {children}
            </DialogTrigger>

            <DialogContent className="overflow-y-scroll">
                <DialogHeader className="h-fit">
                    <DialogTitle className="h-fit">
                        Coursetakers Support Centre
                    </DialogTitle>
                </DialogHeader>

                <div className="pb-12 md:pb-base">
                    <form className="space-y-base">
                        <Input
                            placeholder="Your Full Name*"
                            value={formData.firstname}
                            onChange={(e) => handleInputChange('firstname', e.target.value)}
                        />
                        <Input
                            placeholder="Your Contact Number*"
                            value={formData.contactNumber}
                            onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                        />

                        <Select
                            defaultValue={formData.country}
                            onValueChange={(value) => handleSelectChange('country', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a Country" />
                            </SelectTrigger>
                            <SelectContent>
                                {countries.length < 1
                                    ? <SelectItem value="Searching">Searching...</SelectItem>

                                    : countries.map(item => (
                                        <SelectItem value={item} key={item + "AskUs"}>{item}</SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>

                        <Select
                            defaultValue={formData.city}
                            onValueChange={(value) => handleInputChange('city', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a City" />
                            </SelectTrigger>
                            <SelectContent>
                                {cities.length < 1
                                    ? <SelectItem value="Searching">Searching...</SelectItem>
                                    : cities.map(item => (
                                        <SelectItem value={item} key={item + "AskUs"}>{item}</SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>

                        <Input
                            placeholder="Type a course Name"
                            value={formData.courseName}
                            onChange={(e) => handleInputChange('courseName', e.target.value)}
                        />

                        <Input
                            type="email"
                            placeholder="Email Address*"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                        />

                        <Textarea
                            placeholder="Type your message here."
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                        />

                        <div className="p-sm w-full border">Captcha</div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="AskUsCheckBox"
                                checked={formData.content}
                                onCheckedChange={(value) => handleInputChange('content', value)}
                            />
                            <label
                                htmlFor="AskUsCheckBox"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I consent to be contacted by the institutes.
                            </label>
                        </div>

                        <div className="flex-center">
                            <div className={buttonVariants({ variant: "tertiary" })} onClick={handleSubmit}>
                                <DialogClose>
                                    Send
                                </DialogClose>
                            </div>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
