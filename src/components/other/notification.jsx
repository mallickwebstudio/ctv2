"use client"
import { useState } from "react"
import { cn } from "@/lib/utils";
import { HandCoins, X } from "lucide-react";

export default function Notification() {
    const [notifyOpen, setNotifyOpen] = useState(true);
    const [notifyTwoOpen, setTwoNotifyOpen] = useState(true);
    const [align, setAlign] = useState(true);


    return (
        <div className="relative w-full bg-info overflow-hidden">
            <div className={cn(
                "relative flex transition-all",
                (notifyOpen
                    ? "w-[200%]"
                    : notifyTwoOpen
                        ? "w-full"
                        : "w-[200%]"
                ),
                (align ? "right-0" : "right-full")
            )}>
                <div className={cn("relative py-xl md:py-base p-base text-center text-foreground font-semibold flex-1", notifyOpen ? "block" : "hidden")}>
                    <X className="absolute size-4 md:size-6 top-xs md:top-base right-base cursor-pointer" onClick={() => setNotifyOpen(false)} />
                    <div className="">
                        &quot;Special Offer: 20% off for the first 100 course takers! Enroll now!&quot;
                    </div>
                </div>

                <div className={cn("relative py-xl md:py-base p-base text-center text-foreground font-semibold flex-1", notifyTwoOpen ? "block" : "hidden")}>
                    <X className="absolute size-4 md:size-6 top-xs md:top-base right-base cursor-pointer" onClick={() => setTwoNotifyOpen(false)} />
                    <div className="mx-auto w-fit flex items-center gap-xs rounded-md">
                        <HandCoins className='shrink-0 size-6' />
                        <div className="font-semibold">Not sure? All courses have a 30-day money-back guarantee</div>
                    </div>
                </div>
            </div>

            {notifyOpen && notifyOpen &&(
                <div className="py-2 w-full flex-center">
                    <div className="flex gap-xs cursor-pointer" onClick={() => setAlign(!align)}>
                        <div
                            className={cn("size-2 block rounded-full outline outline-neutral-500 outline-1",
                                align === true && "bg-neutral-500")} />
                        <div
                            className={cn("size-2 block rounded-full outline outline-neutral-500 outline-1",
                                align === false && "bg-neutral-500")} />
                    </div>
                </div>
            )}
        </div >
    )
}
