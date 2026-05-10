import Link from "next/link";
import BookCover from "./BookCover";
import type { BookEntry } from "@/lib/data";

interface BookCardProps {
  book: BookEntry;
}

export default function BookCard({ book }: BookCardProps) {
  const title = book.type === "occasion" ? book.name : `${book.name}'s Book`;

  return (
    <Link
      href={`/books/${book.slug}`}
      className="group flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-200"
    >
      <BookCover
        name={book.name}
        emoji={book.emoji}
        accent={book.coverAccent}
        coverImage={book.coverImage}
        size="sm"
        isOccasion={book.type === "occasion"}
      />
      <div className="text-center">
        <p className="font-bold text-gray-800 text-sm group-hover:text-emerald-800 transition-colors">
          {title}
        </p>
        <p className="text-xs text-emerald-800 font-semibold">$9.99</p>
      </div>
    </Link>
  );
}
