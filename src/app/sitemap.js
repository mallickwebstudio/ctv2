import { siteConfig } from "@/lib/datas/metadatas"

const baseUrl = siteConfig.baseUrl

export default function sitemap() {
    return [
        {
            url: baseUrl,
        },
    ]
}