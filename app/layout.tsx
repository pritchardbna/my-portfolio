import type { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Thays Pritchard - Senior Product Manager",
  description: "Experienced Product Manager with Agile expertise, building AI-powered prototypes to transform product development workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${playfairDisplay.variable} ${raleway.variable} font-sans antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
