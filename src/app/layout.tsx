import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";

export const metadata: Metadata = {
  title: "Learn with Coloring — Personalized Coloring Books for Children",
  description:
    "Beautifully illustrated coloring books personalized with your child's name. Printed and shipped in the U.S. Perfect for ages 3–8.",
  keywords: "personalized coloring book, children's book US, personalized gift kids, learn with coloring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased bg-cream min-h-screen flex flex-col">
        <PromoBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
