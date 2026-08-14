import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const cabin = Cabin({ subsets: ["latin"], variable: "--font-cabin" });

export const metadata: Metadata = {
  title: "Dashen Bank Super App",
  description:
    "Dashen Super App is a web application that provides a platform for users to access various services and features. It offers a user-friendly interface and seamless navigation, allowing users to easily explore and utilize the app's functionalities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", cabin.variable)}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
