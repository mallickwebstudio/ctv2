"use client"
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import AskUs from "@/components/ui/other/ask-us"
import LanguageSelect from "@/components/ui/other/language-select"
import SelectCountry from '@/components/ui/other/select-country';
import DesktopSearchbar from '@/components/ui/other/desktop-searchbar';
import CartButton from './cart-button';
import { useSiteState } from '@/components/providers/site-state-provider';
import { cn } from '@/lib/utils';

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
                <SelectCountry />

                {/* Select Category */}
                <DesktopCategory />


                {/* Search Bar */}
                <DesktopSearchbar />

                {/* Teach On Coursetakers */}
                <div className='relative'>
                    <div className="hover:text-primary-dark cursor-pointer peer text-nowrap">Teach On Coursetakers</div>
                    <div className="hidden peer-hover:block hover:block absolute top-[100%] right-0 w-72">
                        <div className="h-2xl" />

                        <div className="p-base bg-background shadow-md">
                            <div className="text-xl leading-6 font-bold text-center">
                                Turn what you know into an opportunity and reach millions around the world.
                            </div>
                            <Link className={cn(buttonVariants({ variant: "tertiary" }), "mt-xs text-xl w-full")} href="/">
                                Learn More
                            </Link>
                        </div>

                    </div>
                </div>

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
    const { categoryList } = useSiteState();
    return (
        <div className="relative group/categorybox">
            <div className='px-xs py-base relative group-hover/categorybox:text-active cursor-pointer peer/button transition-all'>
                Categories
            </div>

            <div className="absolute right-0 left-0 top-full hidden peer-hover/button:scale-100  hover:block peer-hover/button:block transition-all z-[9999]">

                <div className="bg-transparent h-base w-28" />

                {/* Category */}
                <div className="relative w-64 h-[40rem] bg-background shadow-md border">
                    {categoryList.map(item => (
                        <div className="px-base py-xs cursor-pointer hover:bg-secondary group/category" key={item.name + "DesketopCategory"}>
                            {/* Category List */}
                            <div className="flex items-center gap-base justify-between group-hover/category:text-active">
                                <span>{item.name}</span>
                                <ChevronRightIcon className='size-4 shrink-0' />
                            </div>

                            {/* Sub Category */}
                            <div className="absolute -inset-px left-full size-full bg-background hidden group-hover/category:block border">
                                {item.subList.map(item => (
                                    <div className="px-base py-xs hover:text-active hover:bg-secondary cursor-pointer group/subcategory" key={item.name + "DesketopCategory"}>
                                        {/* Sub Category List */}
                                        <div className="flex items-center gap-base justify-between group-hover/subcategory:text-active">
                                            <span>{item.name}</span>
                                            <ChevronRightIcon className='size-4 shrink-0' />
                                        </div>

                                        {/* Item */}
                                        <div className="absolute -inset-px left-full size-full bg-background hidden group-hover/subcategory:block border">
                                            {/* List */}
                                            <div className="px-base py-xs bg-secondary text-muted-foreground font-bold">Popular Topics</div>

                                            {item.topics.map(item => (
                                                <div className="px-base py-xs text-foreground  hover:text-active hover:bg-secondary cursor-pointer" key={item.title + "DesketopCategory"}>
                                                    <div className="flex items-center gap-base justify-between">
                                                        <span>{item.title}</span>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}