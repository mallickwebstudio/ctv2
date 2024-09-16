import { siteConfig } from "@/lib/datas/metadatas";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
    }
}