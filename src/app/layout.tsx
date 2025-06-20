import type { Metadata } from "next";
import { Dela_Gothic_One, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter", // Define a CSS variable for Inter
  subsets: ["latin"],
  display: "swap", // Recommended for better performance
});

const delaGothicOne = Dela_Gothic_One({
  variable: "--font-dela-gothic-one", // Define a CSS variable for Dela Gothic One
  subsets: ["latin"],
  weight: "400", // Dela Gothic One usually only has one weight
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaori Kawakami Portfolio",
  description:
    "My front-end development portfolio showcasing personal projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${delaGothicOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
