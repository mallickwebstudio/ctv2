import "./globals.css";
import { Source_Sans_3 } from "next/font/google";
import { siteMd } from "@/lib/datas/metadatas";
import Navbar from "@/components/layouts/navbar/navbar";
import Footer from "@/components/layouts/footer/footer";
import Providers from "@/components/providers/providers";
import Notification from "@/components/other/notification";

const selectedFont = Source_Sans_3({ subsets: ["latin"] });

export const metadata = siteMd;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={selectedFont.className}>
        <Providers>
          <div className="w-full min-h-screen flex flex-col">
            <Notification />
            <Navbar />

            <div className="flex-1">
              {children}
            </div>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
