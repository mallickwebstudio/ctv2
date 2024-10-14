"use client"
import { Toaster } from "@/components/ui/toaster"
import { SiteStateProvider } from "@/hooks/site-state-provider"
import { DataProvider } from "@/hooks/data-provider"

export default function Providers({ children }) {
    return (
        <DataProvider>
            <SiteStateProvider>
                {children}
                <Toaster />
            </SiteStateProvider>
        </DataProvider>
    )
}