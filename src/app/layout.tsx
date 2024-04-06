import type { Metadata } from "next";
import {Alegreya_Sans} from "next/font/google"; 
import "./globals.css";

const ale = Alegreya_Sans({
  subsets: ["latin"], // Specify the character subsets you need (optional)
  weight: ["400"],
}); 

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Github/jeanmax1me Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ale.className}>{children}</body>
    </html>
  );
}
