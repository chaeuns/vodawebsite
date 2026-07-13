import type { Metadata } from "next";
import { Sora } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const suit = localFont({
  src: "./fonts/SUIT-Variable-woff2/SUIT-Variable.woff2",
  variable: "--font-suit",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VODA",
  description: "VODA — AI 교육 및 컨설팅",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${sora.variable} ${suit.variable} antialiased`}>
  <body className="flex flex-col font-suit">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}