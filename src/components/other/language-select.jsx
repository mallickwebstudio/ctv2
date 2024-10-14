"use client"
import { Globe } from "lucide-react"
import { useSiteState } from "@/hooks/site-state-provider"
import { Button, buttonVariants } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"


export default function LanguageSelect({ children }) {
    const { languages, language, setLanguage } = useSiteState();

    return (
        <Dialog>
            <DialogTrigger>
                {children
                    ? children
                    : <div className={cn(buttonVariants({ variant: "outline" }), "aspect-square p-1")}>
                        <Globe />
                        <span className='sr-only'>Select Language</span>
                    </div>
                }
            </DialogTrigger>
            <DialogContent className="z-[99999]">
                <DialogHeader>
                    <DialogTitle>Select Language</DialogTitle>
                    <DialogDescription>
                        <div className="grid gap-base grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {languages.map(item => (
                                <DialogClose key={item + "MobileNav"} onClick={() => setLanguage(item)}>
                                    <Button variant={language === item ? "tertiary" : "ghost"} >
                                        {item}
                                    </Button>
                                </DialogClose>
                            ))}
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
