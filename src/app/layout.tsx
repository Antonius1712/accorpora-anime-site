import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accorpora Anime Site.",
  description: "Anime Website by Accorpora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
