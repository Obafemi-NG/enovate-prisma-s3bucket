import type { Metadata } from "next";
import { Geist_Mono, Merriweather_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enovate Studio",
  description:
    "An IT agency that help Startups and Entrepreneurs with their product design and development of websites, web-application and mobile application through a one-off or subscription-based plan that fits their budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweatherSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
