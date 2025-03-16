import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import NavigationMenuBar from "@/components/NavbarMenus";
import OfferBanner from "@/components/OfferBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-bglight px-40 flex-col items-center justify-between">
          <OfferBanner />
        </div>
        <div className="sticky top-0 z-50 mx-40 flex-col items-center justify-between">
          <NavBar />
        </div>
        <div className="bg-bglight px-40 flex-col items-center justify-between">
          <NavigationMenuBar />
        </div>
        {children}
      </body>
    </html>
  );
}
