"use client";
import { ArrowLeft, ChevronRightIcon, XIcon } from 'lucide-react';
import LanguageSelect from '@/components/ui/other/language-select';
import AskUs from '@/components/ui/other/ask-us';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';

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
    const [subNavItems, setSubNavItems] = useState(categories[0].items);

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
                                onClick={() => handleCategoryClick(item.items)}
                                key={item.title + "SidebarNavCategory"}
                            >
                                <div>{item.title}</div>
                                <ChevronRightIcon className="size-4 text-muted-foreground group-hover:text-foreground" />
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
                    <div key={item.label + "SidebarSubNav"} className="">
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
}
