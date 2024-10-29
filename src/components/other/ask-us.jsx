"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { useSiteState } from "@/hooks/site-state-provider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { useEffect, useState } from "react"


export default function AskUs({ children, inquiryType, isAskus }) {
    const initialFormState = {
        firstname: "",
        contactNumber: "",
        country: "",
        city: "",
        courseName: "",
        email: "",
        message: "",
        content: false,
        inquiryType: inquiryType ? inquiryType : "",
        isAskus: isAskus ? isAskus : "",
    }
    const [formData, setFormData] = useState(initialFormState);

    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(false);
    const [cities, setCities] = useState([]);
    const [courseSuggestionLists, setCourseSuggestionLists] = useState([]);

    const fetchCountries = async () => {
        try {
            const response = await fetch('/api/get-country'); // Fetch from Next.js API route
            const data = await response.json();
            setCountries(data.data); // Set fetched data to state
            setFormData(prev => ({ ...prev, country: data.data[0].label }))
        } catch (error) {
            console.error('Error fetching Countries data:', error);
        }
    };

    const fetchCountriesCategories = async (countryName) => {
        try {
            const response = await fetch(`/api/get-search-list/${countryName}`); // Fetch from Next.js API route
            const data = await response.json();
            setCourseSuggestionLists(data.data); // Set fetched data to state
            setFormData(prev => ({ ...prev, courseName: data.data[0].title }))
        } catch (error) {
            console.error('Error fetching Countries data:', error);
        }
    };

    const fetchCities = async (country) => {
        try {
            const response = await fetch(`/api/get-cities/${country || "India"}`); // Fetch from Next.js API route
            const data = await response.json();
            setCities(Object.values(data.data)); // Set fetched data to state
            setFormData(prev => ({ ...prev, city: data.data[0].label }))
        } catch (error) {
            console.error('Error fetching Cities data:', error);
        }
    };

    useEffect(() => {
        fetchCountries();
        fetchCountriesCategories("online");
    }, []);

    useEffect(() => {
        fetchCities();
    }, [countries]);




    const handleInputChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }))
    }

    const handleSelectChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    }

    const handleCountrySelectChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
        fetchCities(value);
        fetchCountriesCategories(value);
    }

    const handleSubmit = async () => {
        try {
            if (error) {
                return
            }
            const response = await fetch('/save-inquiryrequest', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data)
            toast({
                description: (
                    <div>Askus Form Submitted Successfully</div>
                ),
                duration: 15000
            });
        } catch (error) {
            console.error('Error Submitting Askus Form:', error);
        }
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
                            onValueChange={(value) => handleCountrySelectChange('country', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder={(formData.country) || "Select Country"} />
                            </SelectTrigger>
                            <SelectContent>
                                {countries.length < 1
                                    ? <SelectItem value="Searching">Searching...</SelectItem>

                                    : countries.map(item => (
                                        <SelectItem value={item.label} key={item.label + "AskUsCountry"}>
                                            {item.label}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>

                        {formData.country !== "Online" && (
                            <Select
                                defaultValue={formData.city}
                                onValueChange={(value) => handleInputChange('city', value)}
                            >
                                <SelectTrigger>
                                    <div className="">{formData.city}</div>
                                </SelectTrigger>
                                <SelectContent>
                                    {cities.length < 1
                                        ? <SelectItem value="Searching">Searching...</SelectItem>
                                        : cities.map(item => (
                                            <SelectItem value={item.label} key={item.label + "AskUsCity"}>{item.label}</SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>
                        )}

                        {/* <Select
                            defaultValue={formData.courseName}
                            onValueChange={(value) => handleSelectChange('courseName', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder={(formData.courseName) || "Select Course Name"} />
                            </SelectTrigger>
                            <SelectContent>
                                {courseSuggestionLists.length < 1
                                    ? <SelectItem value="Searching">Searching...</SelectItem>

                                    : courseSuggestionLists.map((item, i) => (
                                        <SelectItem value={item.title} key={item.title + i + "AskUsCourseName" + i}>
                                            {item.title}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select> */}

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

                        {/* <div className="p-sm w-full border">Captcha</div> */}

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

                        {error && <div className="text-center text-red-500">Please fill all the fields</div>}

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
