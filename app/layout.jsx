import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GECC Limited | Engineering, Construction & Infrastructure Solutions",
  description:
    "Giant Equatorial Construction Company Ltd (GECC) is a leading construction and infrastructure company in South Sudan and East Africa, delivering high-quality building construction, road construction, asphalting, and sustainable engineering solutions since 2009.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <SmoothScrollProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
