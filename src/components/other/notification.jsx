"use client"
import { useState } from "react"
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export default function Notification() {
    const [notifyOpen, setNotifyOpen] = useState(true);
    return (
        <div className={cn("relative py-xl md:py-base p-base bg-info text-center text-foreground font-semibold", notifyOpen ? "block" : "hidden")}>
            <X className="absolute size-4 md:size-6 top-xs md:top-base right-base cursor-pointer" onClick={() => setNotifyOpen(false)} />
            <div className="">
                &quot;Special Offer: 20% off for the first 100 course takers! Enroll now!&quot;
            </div>
        </div>
    )
}
