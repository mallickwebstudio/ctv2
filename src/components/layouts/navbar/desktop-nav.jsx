"use client"
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import AskUs from "@/components/other/ask-us"
import LanguageSelect from "@/components/other/language-select"
import SelectCountry from '@/components/other/select-country';
import DesktopSearchbar from '@/components/layouts/navbar/desktop-searchbar';
import CartButton from './cart-button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import SearchInput from '@/components/other/search-input';

export default function DesktopNav() {
    return (
        <div className={cn("hidden lg:block p-0 w-full bg-background md:border-0 shadow-md")}>
            <nav className="px-2xl py-3 size-full flex gap-xs lg:gap-base items-center">

                {/* Logo */}
                <Link className='-mt-base block h-14' href="/">
                    <Image
                        className='h-14 min-w-20 w-fit object-contain'
                        src="/logo-horizontal.png"
                        width={200}
                        height={100}
                        alt='Logo'
                        priority
                    />
                    <span className="sr-only">Brand Logo</span>
                </Link>

                {/* Select Country */}
                <SelectCountry redirect="true" />

                {/* Select Category */}
                <DesktopCategory />


                {/* Search Bar */}
                {/* <DesktopSearchbar /> */}
                <SearchInput className="flex-1 h-14">
                    <div className="h-full px-sm py-xs flex items-center gap-2 border border-foreground rounded-xl overflow-hidden">
                        <Search className="mr-xs size-6 text-muted-foreground shrink-0" />
                        <input
                            className="min-w-12 w-full focus:outline-offset-0 focus:outline-none bg-transparent"
                            placeholder="Type A Course Name"
                        />
                    </div>
                </SearchInput>

                {/* Teach On Coursetakers */}
                <div className="hover:text-active-hover hover:underline cursor-pointer peer text-nowrap">Teach On Coursetakers</div>

                {/* Cart */}
                <CartButton />


                <AskUs>
                    <div className={buttonVariants({ variant: "outline" })}>Ask Us?</div>
                </AskUs>

                <Link className={buttonVariants({ variant: "outline" })} href="/">Login</Link>

                <Link className={buttonVariants({ variant: "tertiary" })} href="/">Sign Up</Link>

                <LanguageSelect />
            </nav>
        </div>
    )
}

const DesktopCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/api/get-categories');
                const data = await response.json();
                setCategories(data.data);
            } catch (error) {
                console.error('Error fetching Categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="relative group/categorybox">
            <div className='block px-xs py-base relative group-hover/categorybox:text-active cursor-pointer peer/button transition-all'>
                Categories
            </div>

            <div className="absolute right-0 left-0 top-full hidden peer-hover/button:scale-100  hover:block peer-hover/button:block transition-all z-[9999]">

                <div className="bg-transparent h-base w-28" />

                {/* Category */}
                <div className="relative w-64 h-[40rem] bg-background border shadow-md">
                    <div className="h-full overflow-y-scroll">

                        {categories.length < 0
                            ? <div className="px-base py-xs cursor-pointer hover:bg-secondary group/category">
                                Loading...
                            </div>
                            : categories.map(item => (
                                <div className="px-base py-xs cursor-pointer hover:bg-secondary group/category" key={item.category_name + "DesketopCategory"}>
                                    {/* Category List */}
                                    <Link className="flex items-center gap-base justify-between group-hover/category:text-active" href={`/${item.href}`}>
                                        <span>{item.category_name}</span>
                                        {item.subCategories.length > 0 &&
                                            <ArrowRight className='size-4 shrink-0' />
                                        }
                                    </Link>

                                    {/* Sub Category */}
                                    {item.subCategories.length > 0 && (
                                        <div className="absolute -inset-px left-full size-[calc(100%_+_2px)] bg-background hidden group-hover/category:block border shadow-md">
                                            <div className="h-full overflow-y-scroll">
                                                {item.subCategories.map((item, i) => (
                                                    <div className="px-base py-xs hover:text-active hover:bg-secondary cursor-pointer group/subcategory" key={item.category_name + "DesketopSubCategory" + i}>
                                                        {/* Sub Category List */}
                                                        <Link className="flex items-center gap-base justify-between group-hover/subcategory:text-active" href={`/${item.href}`}>
                                                            <span>{item.category_name}</span>
                                                            {item.subSubCategories.length > 0 &&
                                                                <ArrowRight className='size-4 shrink-0' />
                                                            }
                                                        </Link>

                                                        {/* Item */}
                                                        {item.subSubCategories.length > 0 && (<div className="absolute -inset-px left-full size-[calc(100%_+_2px)] bg-background hidden group-hover/subcategory:block border shadow-md">
                                                            {/* List */}
                                                            <div className="px-base py-xs h-12 bg-secondary text-muted-foreground font-bold">Popular Topics</div>
                                                            <div className="h-[calc(100%_-_3rem)] overflow-y-scroll">
                                                                {item.subSubCategories.map(item => (
                                                                    <Link className="px-base py-xs block text-foreground  hover:text-active hover:bg-secondary cursor-pointer" key={item.category_name + "DesketopSubSubCategory"} href={`/${item.href}`}>
                                                                        <div className="flex items-center gap-base justify-between">
                                                                            <span>{item.category_name}</span>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>

                                                        </div>)}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}