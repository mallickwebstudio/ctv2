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
            <nav className="flex items-center gap-xs lg:gap-base px-2xl py-3 size-full">

                {/* Logo */}
                <Link className='block -mt-base h-14' href="/">
                    <Image
                        className='w-fit min-w-20 h-14 object-contain'
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
                    <div className="flex items-center gap-2 border-foreground px-sm py-xs border rounded-xl h-full overflow-hidden">
                        <Search className="mr-xs text-muted-foreground shrink-0 size-6" />
                        <input
                            className="w-full min-w-12 focus:outline-offset-0 focus:outline-none bg-transparent"
                            placeholder="Type A Course Name"
                        />
                    </div>
                </SearchInput>

                {/* Teach On Coursetakers */}
                <div className="text-nowrap hover:text-active-hover hover:underline cursor-pointer peer">Teach On Coursetakers</div>

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
            <div className='group-hover/categorybox:text-active block relative px-xs py-base transition-all cursor-pointer peer/button'>
                Categories
            </div>

            <div className="hover:block peer-hover/button:block top-full right-0 left-0 absolute hidden peer-hover/button:scale-100 z-[9999] transition-all">

                <div className="bg-transparent w-28 h-base" />

                {/* Category */}
                <div className="relative bg-background shadow-md border w-64 h-[40rem]">
                    <div className="h-full overflow-y-scroll">
                        {categories.length < 0
                            ? <div>
                                Loading...
                            </div>
                            : categories.map(item => (
                                <div className="hover:bg-secondary px-base py-xs cursor-pointer group/category" key={item.category_name + "DesketopCategory"}>
                                    {/* Category List */}
                                    <Link className="group-hover/category:text-active flex justify-between items-center gap-base" href={`/${item.href}`}>
                                        <span>{item.category_name}</span>
                                        {item.subCategories.length > 0 &&
                                            <ArrowRight className='shrink-0 size-4' />
                                        }
                                    </Link>

                                    {/* Sub Category */}
                                    {item.subCategories.length > 0 && (
                                        <div className="group-hover/category:block left-full absolute -inset-px hidden bg-background shadow-md border size-[calc(100%_+_2px)]">
                                            <div className="h-full overflow-y-scroll">
                                                {item.subCategories.map((item, i) => (
                                                    <div className="hover:bg-secondary px-base py-xs hover:text-active cursor-pointer group/subcategory" key={item.category_name + "DesketopSubCategory" + i}>
                                                        {/* Sub Category List */}
                                                        <Link className="group-hover/subcategory:text-active flex justify-between items-center gap-base" href={`/${item.href}`}>
                                                            <span>{item.category_name}</span>
                                                            {item.subSubCategories.length > 0 &&
                                                                <ArrowRight className='shrink-0 size-4' />
                                                            }
                                                        </Link>

                                                        {/* Item */}
                                                        {item.subSubCategories.length > 0 && (<div className="group-hover/subcategory:block left-full absolute -inset-px hidden bg-background shadow-md border size-[calc(100%_+_2px)]">
                                                            {/* List */}
                                                            <div className="bg-secondary px-base py-xs h-12 font-bold text-muted-foreground">Popular Topics</div>
                                                            <div className="h-[calc(100%_-_3rem)] overflow-y-scroll">
                                                                {item.subSubCategories.map(item => (
                                                                    <Link className="block hover:bg-secondary px-base py-xs text-foreground hover:text-active cursor-pointer" key={item.category_name + "DesketopSubSubCategory"} href={`/${item.href}`}>
                                                                        <div className="flex justify-between items-center gap-base">
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