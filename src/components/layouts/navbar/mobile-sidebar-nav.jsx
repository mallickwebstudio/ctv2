"use client";
import { ArrowLeft, ChevronRightIcon, XIcon } from 'lucide-react';
import LanguageSelect from '@/components/other/language-select';
import AskUs from '@/components/other/ask-us';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const categories = [
    {
        title: "Web Development",
        items: [
            { label: "Item 1", href: '/' },
            { label: "Item 2", href: '/' },
            { label: "Item 3", href: '/' },
        ]
    },
    {
        title: "Game Development",
        items: [
            { label: "Item 4", href: '/' },
            { label: "Item 5", href: '/' },
            { label: "Item 6", href: '/' },
        ]
    },
    {
        title: "Entrepreneurship",
        items: [
            { label: "Item 7", href: '/' },
            { label: "Item 8", href: '/' },
            { label: "Item 9", href: '/' },
        ]
    },
];

export default function MobileSidebarNav({ setIsNavbarOpen }) {
    const [subNavOpen, setSubNavOpen] = useState(false);
    const [subNavItems, setSubNavItems] = useState([]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/api/get-categories'); // Fetch data from API
                const data = await response.json();
                setCategories(data.data); // Set fetched data to state
            } catch (error) {
                console.error('Error fetching Categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (items) => {
        setSubNavItems(items);
        setSubNavOpen(true);
    };

    return (
        <div className="fixed inset-0 lg:hidden bg-foreground/50 z-20">
            <div className="flex h-full overflow-y-scroll">
                <div className="relative max-h-screen w-4/6 bg-background overflow-y-scroll">
                    <SidebarSubNav subNavItems={subNavItems} subNavOpen={subNavOpen} setSubNavOpen={setSubNavOpen} />

                    <div className="absolute top-base right-base">
                        <XIcon className="size-5 text-secondary-foreground cursor-pointer shrink-0" onClick={() => setIsNavbarOpen(false)} />
                    </div>

                    {/* Login Links */}
                    <div className="p-sm space-y-xs">
                        <Link className="block text-primary hover:text-primary-dark" href="/">
                            Login
                        </Link>
                        <Link className="block text-primary hover:text-primary-dark" href="/">
                            Signup
                        </Link>
                        <AskUs>
                            <div className="block text-primary hover:text-primary-dark">
                                Ask Us
                            </div>
                        </AskUs>
                    </div>

                    <hr />

                    {/* Categories */}
                    <div className="p-sm space-y-xs">
                        <div className="text-sm font-bold text-muted-foreground">Most Popular</div>
                        {categories.map(item => (
                            <div
                                className="flex-between cursor-pointer group"
                                onClick={() => {item.subCategories.length > 0 &&handleCategoryClick(item.subCategories)}}
                                key={item.category_name + "SidebarNavCategory"}
                            >
                                <div>{item.category_name}</div>
                                {item.subCategories.length > 0 &&
                                    <ChevronRightIcon className="size-4 text-muted-foreground group-hover:text-foreground" />
                                }
                            </div>
                        ))}
                    </div>

                    <hr />

                    {/* More Links */}
                    <div className="p-sm space-y-xs">
                        <div className="text-sm font-bold text-muted-foreground">More from CourseTakers</div>
                        <Link className="block text-primary hover:text-primary-dark" href="/">
                            Become an instructor
                        </Link>
                        <LanguageSelect />
                    </div>
                </div>

                <div className="flex-1" onClick={() => setIsNavbarOpen(false)}></div>
            </div>
        </div>
    );
}

function SidebarSubNav({ subNavItems, subNavOpen, setSubNavOpen }) {
    return (
        <div className={cn("absolute inset-0 bg-background transition-all", subNavOpen ? "left-0" : "left-full")}>
            <div className="p-base flex gap-xs items-center bg-secondary cursor-pointer" onClick={() => setSubNavOpen(false)}>
                <ArrowLeft className="mr-2 size-base" /> Go Back
            </div>
            <div className="p-base space-y-2">
                {subNavItems.map((item, index) => (
                    <Link key={item.category_name + "SidebarSubNav"} className="block" href={item.href}>
                        {item.category_name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
