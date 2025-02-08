import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/avi9611"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "avi",
    "AvinashN",
    "Vinash",
    "Avi",
    "AVI",
    "N",
    "N Avinash",
    "n avinash",
    "navi",
    "navinash",
    "avinash n",
    "Avinash N",
    "Avinashn",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "AVINASH N ",
    "website",
    "@AvinashN",
    "AVINASHN",
    "avinash developer",
  ],
  authors: [
    {
      name: "Avinash N",
      url: "https://github.com/avi9611",
    },
  ],
  creator: "Avinash N",

  icons: {
    icon: "/imagesA.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable} relative`}>
        {/* Background Effect Container */}
        <div className="absolute inset-0 overflow-hidden bg-grid">
          {/* Glowing Wave Line */}
          <div className="absolute top-0 left-0 w-[15%] h-full bg-gradient-to-r from-blue-400 via-purple-500 to-transparent opacity-40 blur-xl animate-glowing-wave"></div>
        </div>

        <main
          className={cn(
            "relative z-10 flex break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20",
            "bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f61a_0%,transparent_25%,#3b82f61a_50%,transparent_75%,#3b82f61a_100%)] [background-size:40px_40px]"
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
