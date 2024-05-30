import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSProvider from "@/providers/Aos";
import { Parallax } from "@/providers/Parallax";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fadhil Kholaf",
  description: "Muhammad Fadhil Kholaf personal portfolio website",
  keywords:["muhammad","fadhil","kholaf","muhammad fadhil kholaf","fadhil kholaf"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth bg-black ">
      <head>
        <link rel="icon" href="/logo.svg"></link>
      </head>
      <body className={poppins.className}>
        <Suspense
          fallback={
            <div className="absolute z-[100] flex h-screen w-screen items-center justify-center bg-[#101111]">
              <h1>Loading Components...</h1>
            </div>
          }
        >
          <AOSProvider>
            <Parallax>
              <Navbar />
              {children}
            </Parallax>
          </AOSProvider>
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  );
}
