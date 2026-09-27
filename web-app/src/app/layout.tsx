import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import GoogleTranslate from "../components/GoogleTranslate/GoogleTranslate";
import Footer from "@/components/Footer/Footer";
import MobileBottomNav from "@/components/Navbar/MobileBottomNav";
import SmoothScroll from "@/components/ui/Scroll/SmoothScroll";
import { ScrollRevealProvider } from "@/components/ui/Scroll/ScrollReveal";
import ScrollToTop from "@/components/ui/Scroll/ScrollToTop";
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HSM",
  description: "Healthcare Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${poppins.variable} h-full antialiased`}
    >
      <body>
        <SmoothScroll />
        <ScrollRevealProvider />
        <GoogleTranslate />
        <Navbar />
        {children}
        <ScrollToTop />
        <MobileBottomNav />
        <Footer />
      </body>
    </html>
  );
}