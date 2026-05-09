import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-teal-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Learn with Coloring" width={180} height={40} className="h-9 w-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-semibold">
            <Link href="/why" className="hover:text-teal-600 transition-colors">
              Why Colouring?
            </Link>
            <span>·</span>
            <Link href="/books" className="hover:text-teal-600 transition-colors">
              Browse Books
            </Link>
            <span>·</span>
            <span>Printed & shipped in the UK</span>
            <span>·</span>
            <span>Ages 3–8</span>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Learn with Coloring. All rights reserved. Made with ❤️ in the UK.
        </div>
      </div>
    </footer>
  );
}
