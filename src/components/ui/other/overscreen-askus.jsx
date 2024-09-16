"use client"
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import AskUs from "@/components/ui/other/ask-us";
import { cn } from "@/lib/utils";

export default function OverscreenAskus() {
    const [scrolledQuartered, setScrolledQuartered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const totalHeight = document.documentElement.scrollHeight;
            const scrollThreshold = totalHeight * 0.70;

            if (scrollPosition >= scrollThreshold) {
                setScrolledQuartered(true);
            } else {
                setScrolledQuartered(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={cn("fixed top-1/2 bottom-1/2 left-0 z-50", scrolledQuartered ? "block" : "hidden")}>
            <AskUs>
                <div className={cn(buttonVariants({size:"lg"}), "font-bold")}>Ask Us</div>
            </AskUs>
        </div>
    )
}
