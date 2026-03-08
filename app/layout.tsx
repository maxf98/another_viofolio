import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/backgrounds.css";
import "./styles/prose.css";
import Footer from "./components/Footer";
import { LoadProvider } from "./context/LoadContext";
import { LanguageProvider } from "./context/LanguageContext";
import { GlobalNavProvider } from "./components/navigation/GlobalNavContext";
import GlobalNav from "./components/navigation/GlobalNav";
import HamburgerButton from "./components/navigation/HamburgerButton";
import Logo from "./components/navigation/Logo";
import AboutMeOverlay from "./components/AboutMeOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vioseum",
  description: "Vio's portfolio",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <LanguageProvider>
          <LoadProvider>
            <GlobalNavProvider>
              <Logo />
              <HamburgerButton />
              <GlobalNav />
              <AboutMeOverlay />
              <div className="min-h-screen">
                <div className="relative z-[10]">
                  {children}
                  <Footer />
                </div>
              </div>
            </GlobalNavProvider>
          </LoadProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
