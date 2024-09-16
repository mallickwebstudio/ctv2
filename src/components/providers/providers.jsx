"use client"
import { Toaster } from "@/components/ui/toaster"
import { SiteStateProvider } from "@/components/providers/site-state-provider"
import { DataProvider } from "@/components/providers/data-provider"

export default function Providers({ children }) {
    return (
        <>
            <DataProvider>
                <SiteStateProvider>
                    {children}
                    <Toaster />
                </SiteStateProvider>
            </DataProvider>
        </>
    )
}