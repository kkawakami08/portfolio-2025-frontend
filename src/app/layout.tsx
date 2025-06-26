import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",

  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",

  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kaori Kawakami | Frontend Developer",
  description:
    "Portfolio of Kaori Kawakami, a frontend developer blending technical expertise with an artistic eye. Specializing in high-performance React and Next.js applications that are user-friendly and robust.",
  keywords: [
    "Kaori Kawakami",
    "Frontend Developer",
    "Front-end Engineer",
    "Web Developer",
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Design",
    "Portfolio",
    "User Experience",
    "UI/UX",
    "Modern Web Development",
    "Full-Stack",
    "JavaScript",
  ],
  authors: [{ name: "Kaori Kawakami" }],
  creator: "Kaori Kawakami",
  publisher: "Kaori Kawakami",

  openGraph: {
    title: "Kaori Kawakami | Frontend Developer",
    description:
      "Portfolio of Kaori Kawakami, a frontend developer blending technical expertise with an artistic eye. Specializing in high-performance React and Next.js applications.",
    url: "https://kaori.dev/",
    siteName: "Kaori Kawakami - Portfolio",
    images: [
      {
        url: "https://kaori.dev/kaori-profile.JPG",
        width: 1000,
        height: 1000,
        alt: "Kaori Kawakami Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kaori Kawakami | Frontend Developer",
    description:
      "Portfolio of Kaori Kawakami, a frontend developer specializing in high-performance React and Next.js applications.",

    images: ["https://kaori.dev/kaori-profile.JPG"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
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
        className={`${inter.variable} ${playfairDisplay.variable} antialiased  min-h-screen bg-light-shade text-dark-shade flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
