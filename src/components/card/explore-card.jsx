import Link from "next/link";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { baseUrl } from "@/lib/datas/api";

export default function ExploreCard({ data }) {
    const {
        icon = "/images/svg/icon/plane.svg",
        category_name = "Aviation and Management",
        href = "/",
        subTitle = "Pilot Training",
        subTitleHref = "/",
        links = [
            {
                label: "Link 1",
                href: "/"
            },
            {
                label: "Link 2",
                href: "/"
            },
            {
                label: "Link 3",
                href: "/"
            },
            {
                label: "Link 4",
                href: "/"
            },
            {
                label: "Link 5",
                href: "/"
            },
            {
                label: "Link 6",
                href: "/"
            },
            {
                label: "Link 7",
                href: "/"
            },
            {
                label: "Link 8",
                href: "/"
            },
            {
                label: "Link 9",
                href: "/"
            },
            {
                label: "Link 10",
                href: "/"
            },
            {
                label: "Link 11",
                href: "/"
            },
            {
                label: "Link 12",
                href: "/"
            },
            {
                label: "Link 13",
                href: "/"
            },
            {
                label: "Link 14",
                href: "/"
            },
        ],
        subSubCategories = []
    } = data;

    return (
        <div className="p-xs md:p-base flex items-center gap-sm bg-background rounded-md hover:shadow-md w-full overflow-hidden">
            <div className="size-8 md:size-20 shrink-0">
                {icon
                    ?
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        className="size-full object-contain object-center"
                        src={icon && baseUrl + icon}
                        alt={" icon"}
                    />
                    :
                    <div className="">No Icon </div>
                }
            </div>

            <div className="flex flex-col">
                <div className="hidden md:block flex-1" />
                <Link className="font-semibold text-lg leading-5 line-clamp-2" href={href}>
                    {category_name}
                </Link>

                <div className="line-clamp-2 w-full overflow-hidden">
                    {subSubCategories.length > 0 && subSubCategories.map(item => (
                        <Link className="mt-sm hidden md:inline text-sm hover:underline text-nowrap" href={`/courses/${item.slug}`} key={item.slug + "ExploreCategoryCard"}>
                            {item.slug},{" "}
                        </Link>
                    ))}
                </div>

                {subSubCategories.length > 0 && (
                    <Dialog>
                        <DialogTrigger>
                            <span className="hidden md:block w-12 text-nowrap text-link hover:underline cursor-pointer">
                                View All
                            </span>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{category_name}</DialogTitle>
                                <DialogDescription>
                                    <div className="flex gap-sm flex-wrap overflow-y-scroll">
                                        {subSubCategories.map(item => (
                                            <Link className={cn(buttonVariants({ variant: "outline", size: "sm" }))} href={`/courses/${item.slug}`} key={item.slug + "CategoryLinks"}>
                                                {item.slug}
                                            </Link>
                                        ))}
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </div>
    )
}
