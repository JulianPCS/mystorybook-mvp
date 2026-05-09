import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";

export const metadata: Metadata = {
  title: "Learn with Coloring — Personalised Colouring Books for Children",
  description:
    "Beautifully illustrated colouring books personalised with your child's name. Printed and shipped in the UK. Perfect for ages 3–8.",
  keywords: "personalised colouring book, children's book UK, personalised gift kids, learn with coloring",
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
