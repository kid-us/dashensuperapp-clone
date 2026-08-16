import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dashen-superapp.vercel.app"),
  title: {
    default: "Dashen Bank Super App",
    template: "%s | Dashen Bank Super App",
  },
  description:
    "Discover the Dashen Bank Super App: Your secure, reliable, and convenient platform for all-in-one banking, e-commerce, instant messaging, mini-apps, and USSD banking.",
  openGraph: {
    title: "Dashen Bank Super App",
    description:
      "All-in-one convenience: secure transfers, bill payments, digital onboarding, 200+ mini-apps, and USSD offline banking, all inside Dashen Bank Super App.",
    url: "https://dashen-superapp.vercel.app",
    siteName: "Dashen Bank Super App",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/mobile-app-mockup.webp",
        width: 1200,
        height: 630,
        alt: "Dashen Bank Super App Mockup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashen Bank Super App",
    description:
      "Your secure, reliable, and convenient platform for all-in-one banking, e-commerce, instant messaging, and USSD banking.",
    images: ["/images/mobile-app-mockup.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", poppins.variable)}>
      <body className="flex flex-col">
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
