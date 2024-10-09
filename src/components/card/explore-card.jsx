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
        ]

    } = data;

    return (
        <div className="p-xs md:p-base flex items-center gap-sm bg-background rounded-md hover:shadow-md">
            <div className="h-8 md:h-20 shrink-0">
                <Image
                    className="size-full object-contain object-center"
                    src={icon&&baseUrl + icon}
                    width={40}
                    height={40}
                    alt={category_name + " icon"}
                />
            </div>

            <div className="flex flex-col">
                <div className="hidden md:block flex-1" />
                <Link className="font-semibold text-lg leading-5 line-clamp-2" href={href}>
                    {category_name}
                </Link>

                <Link className="mt-sm hidden md:block text-sm hover:underline w-fit" href={subTitleHref}>
                    {subTitle}
                </Link>

                {/* <Dialog>
                    <DialogTrigger className="w-fit">
                        <div className="hidden w-fit md:block text-link hover:underline cursor-pointer">
                            View All
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{category_name}</DialogTitle>
                            <DialogDescription>
                                <div className="flex gap-sm flex-wrap overflow-y-scroll">
                                    {links.map(item => (
                                        <Link className={cn(buttonVariants({ variant: "outline", size: "sm" }))} href={item.href} key={item.label + "CategoryLinks"}>
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog> */}
            </div>
        </div>
    )
}
