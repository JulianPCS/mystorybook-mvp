export type BookEntry = {
  slug: string;
  name: string;
  type: "name" | "occasion";
  community?: string;
  occasionLabel?: string;
  coverAccent: string;
  emoji: string;
  coverImage?: string; // path under /covers/ e.g. "/covers/maryam.png"
};

export const NAMES: BookEntry[] = [
  // British/European
  { slug: "oliver", name: "Oliver", type: "name", community: "british", coverAccent: "bg-teal-200", emoji: "🦊" },
  { slug: "george", name: "George", type: "name", community: "british", coverAccent: "bg-blue-200", emoji: "🐻" },
  { slug: "harry", name: "Harry", type: "name", community: "british", coverAccent: "bg-green-200", emoji: "🐢" },
  { slug: "amelia", name: "Amelia", type: "name", community: "british", coverAccent: "bg-pink-200", emoji: "🦋" },
  { slug: "isla", name: "Isla", type: "name", community: "british", coverAccent: "bg-purple-200", emoji: "🌸" },
  { slug: "poppy", name: "Poppy", type: "name", community: "british", coverAccent: "bg-red-200", emoji: "🌺" },
  { slug: "lily", name: "Lily", type: "name", community: "british", coverAccent: "bg-yellow-200", emoji: "🌼" },
  { slug: "grace", name: "Grace", type: "name", community: "british", coverAccent: "bg-teal-100", emoji: "🕊️" },
  // South Asian
  { slug: "arjun", name: "Arjun", type: "name", community: "south-asian", coverAccent: "bg-orange-200", emoji: "🦁" },
  { slug: "priya", name: "Priya", type: "name", community: "south-asian", coverAccent: "bg-pink-200", emoji: "🌺" },
  { slug: "ananya", name: "Ananya", type: "name", community: "south-asian", coverAccent: "bg-purple-200", emoji: "🦚" },
  { slug: "rohan", name: "Rohan", type: "name", community: "south-asian", coverAccent: "bg-blue-200", emoji: "🐘" },
  { slug: "aanya", name: "Aanya", type: "name", community: "south-asian", coverAccent: "bg-rose-200", emoji: "🌷" },
  { slug: "riya", name: "Riya", type: "name", community: "south-asian", coverAccent: "bg-amber-200", emoji: "🦋" },
  // Muslim/Arabic — top 10 UK girls
  { slug: "maryam", name: "Maryam", type: "name", community: "muslim", coverAccent: "bg-green-200", emoji: "🌺", coverImage: "/covers/maryam.png" },
  { slug: "fatima", name: "Fatima", type: "name", community: "muslim", coverAccent: "bg-pink-200", emoji: "🌸", coverImage: "/covers/fatima.png" },
  { slug: "anaya", name: "Anaya", type: "name", community: "muslim", coverAccent: "bg-purple-200", emoji: "⭐", coverImage: "/covers/anaya.png" },
  { slug: "nur", name: "Nur", type: "name", community: "muslim", coverAccent: "bg-amber-200", emoji: "🪔", coverImage: "/covers/nur.png" },
  { slug: "dua", name: "Dua", type: "name", community: "muslim", coverAccent: "bg-blue-200", emoji: "🌙", coverImage: "/covers/dua.png" },
  { slug: "aisha", name: "Aisha", type: "name", community: "muslim", coverAccent: "bg-teal-200", emoji: "🦋", coverImage: "/covers/aisha.png" },
  { slug: "hana", name: "Hana", type: "name", community: "muslim", coverAccent: "bg-rose-200", emoji: "🌸", coverImage: "/covers/hana.png" },
  { slug: "zahra", name: "Zahra", type: "name", community: "muslim", coverAccent: "bg-orange-200", emoji: "🌹", coverImage: "/covers/zahra.png" },
  { slug: "layla", name: "Layla", type: "name", community: "muslim", coverAccent: "bg-indigo-200", emoji: "🌙", coverImage: "/covers/layla.png" },
  { slug: "zara", name: "Zara", type: "name", community: "muslim", coverAccent: "bg-purple-200", emoji: "⭐", coverImage: "/covers/zara.png" },
  // Muslim/Arabic — top 10 UK boys
  { slug: "muhammad", name: "Muhammad", type: "name", community: "muslim", coverAccent: "bg-teal-300", emoji: "🌙", coverImage: "/covers/muhammad.png" },
  { slug: "adam", name: "Adam", type: "name", community: "muslim", coverAccent: "bg-green-200", emoji: "🌿", coverImage: "/covers/adam.png" },
  { slug: "ali", name: "Ali", type: "name", community: "muslim", coverAccent: "bg-blue-200", emoji: "🦁", coverImage: "/covers/ali.png" },
  { slug: "ibrahim", name: "Ibrahim", type: "name", community: "muslim", coverAccent: "bg-indigo-200", emoji: "⭐", coverImage: "/covers/ibrahim.png" },
  { slug: "musa", name: "Musa", type: "name", community: "muslim", coverAccent: "bg-blue-200", emoji: "💧", coverImage: "/covers/musa.png" },
  { slug: "yahya", name: "Yahya", type: "name", community: "muslim", coverAccent: "bg-green-200", emoji: "🌿", coverImage: "/covers/yahya.png" },
  { slug: "yusuf", name: "Yusuf", type: "name", community: "muslim", coverAccent: "bg-teal-300", emoji: "⭐", coverImage: "/covers/yusuf.png" },
  { slug: "omar", name: "Omar", type: "name", community: "muslim", coverAccent: "bg-amber-200", emoji: "📚", coverImage: "/covers/omar.png" },
  { slug: "ahmad", name: "Ahmad", type: "name", community: "muslim", coverAccent: "bg-blue-300", emoji: "🌙", coverImage: "/covers/ahmad.png" },
  { slug: "ayaan", name: "Ayaan", type: "name", community: "muslim", coverAccent: "bg-amber-200", emoji: "🌅", coverImage: "/covers/ayaan.png" },
  // Legacy entries kept for non-Muslim community search
  { slug: "zainab", name: "Zainab", type: "name", community: "muslim", coverAccent: "bg-green-300", emoji: "🌿" },
  { slug: "ahmed", name: "Ahmed", type: "name", community: "muslim", coverAccent: "bg-green-200", emoji: "⭐" },
  // African
  { slug: "kofi", name: "Kofi", type: "name", community: "african", coverAccent: "bg-amber-300", emoji: "🦁" },
  { slug: "amara", name: "Amara", type: "name", community: "african", coverAccent: "bg-orange-200", emoji: "🌻" },
  { slug: "zara", name: "Zara", type: "name", community: "african", coverAccent: "bg-yellow-200", emoji: "🦋" },
  { slug: "imani", name: "Imani", type: "name", community: "african", coverAccent: "bg-green-200", emoji: "🌿" },
  { slug: "kwame", name: "Kwame", type: "name", community: "african", coverAccent: "bg-amber-200", emoji: "🐯" },
  // Universal
  { slug: "sofia", name: "Sofia", type: "name", community: "universal", coverAccent: "bg-purple-200", emoji: "🦋" },
  { slug: "mia", name: "Mia", type: "name", community: "universal", coverAccent: "bg-pink-200", emoji: "🌸" },
  { slug: "luna", name: "Luna", type: "name", community: "universal", coverAccent: "bg-indigo-200", emoji: "🌙" },
  { slug: "noah", name: "Noah", type: "name", community: "universal", coverAccent: "bg-blue-200", emoji: "🐬" },
  { slug: "leo", name: "Leo", type: "name", community: "universal", coverAccent: "bg-amber-200", emoji: "🦁" },
  { slug: "aria", name: "Aria", type: "name", community: "universal", coverAccent: "bg-rose-200", emoji: "🎵" },
];

export const OCCASIONS: BookEntry[] = [
  { slug: "my-first-ramadan", name: "My First Ramadan", type: "occasion", coverAccent: "bg-teal-300", emoji: "🌙", occasionLabel: "Islamic", coverImage: "/covers/my-first-ramadan.png" },
  { slug: "my-first-eid", name: "My First Eid", type: "occasion", coverAccent: "bg-amber-300", emoji: "⭐", occasionLabel: "Islamic", coverImage: "/covers/my-first-eid.png" },
  { slug: "my-first-diwali", name: "My First Diwali", type: "occasion", coverAccent: "bg-orange-300", emoji: "🪔", occasionLabel: "Hindu", coverImage: "/covers/my-first-diwali.png" },
  { slug: "my-first-christmas", name: "My First Christmas", type: "occasion", coverAccent: "bg-red-300", emoji: "⭐", occasionLabel: "Christmas", coverImage: "/covers/my-first-christmas.png" },
  { slug: "my-first-hanukkah", name: "My First Hanukkah", type: "occasion", coverAccent: "bg-blue-300", emoji: "✨", occasionLabel: "Hanukkah", coverImage: "/covers/my-first-hanukkah.png" },
  { slug: "my-first-birthday", name: "My First Birthday", type: "occasion", coverAccent: "bg-pink-300", emoji: "🎂", occasionLabel: "Birthday", coverImage: "/covers/my-first-birthday.png" },
  { slug: "big-brother", name: "Big Brother", type: "occasion", coverAccent: "bg-blue-200", emoji: "🦁", occasionLabel: "Family", coverImage: "/covers/big-brother.png" },
  { slug: "big-sister", name: "Big Sister", type: "occasion", coverAccent: "bg-purple-200", emoji: "🦋", occasionLabel: "Family", coverImage: "/covers/big-sister.png" },
  { slug: "starting-school", name: "Starting School", type: "occasion", coverAccent: "bg-green-200", emoji: "🎒", occasionLabel: "Milestone", coverImage: "/covers/starting-school.png" },
];

export function getBookBySlug(slug: string): BookEntry | undefined {
  return [...NAMES, ...OCCASIONS].find((b) => b.slug === slug);
}

export function generateNameBook(name: string): BookEntry {
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
  const accents = [
    "bg-teal-200", "bg-blue-200", "bg-purple-200", "bg-pink-200",
    "bg-amber-200", "bg-green-200", "bg-rose-200", "bg-indigo-200",
  ];
  const emojis = ["🦋", "🌸", "⭐", "🌙", "🦁", "🐬", "🌺", "🌿", "🦊", "🐢"];
  const idx = name.charCodeAt(0) % accents.length;
  return {
    slug,
    name,
    type: "name",
    coverAccent: accents[idx],
    emoji: emojis[idx],
  };
}
