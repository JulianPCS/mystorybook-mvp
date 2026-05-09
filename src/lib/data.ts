export type BookEntry = {
  slug: string;
  name: string;
  type: "name" | "occasion";
  gender?: "female" | "male";
  community?: string;
  occasionLabel?: string;
  occasionGroup?: "festival" | "milestone" | "family";
  coverAccent: string;
  emoji: string;
  coverImage?: string; // path under /covers/ e.g. "/covers/maryam.png"
  listed?: boolean;   // appears in browse pages; unlisted entries still work via search/direct URL
};

export const NAMES: BookEntry[] = [
  // British/European
  { slug: "oliver",  name: "Oliver",  type: "name", gender: "male",   community: "british",    coverAccent: "bg-teal-200",   emoji: "🦊" },
  { slug: "george",  name: "George",  type: "name", gender: "male",   community: "british",    coverAccent: "bg-blue-200",   emoji: "🐻" },
  { slug: "harry",   name: "Harry",   type: "name", gender: "male",   community: "british",    coverAccent: "bg-green-200",  emoji: "🐢" },
  { slug: "amelia",  name: "Amelia",  type: "name", gender: "female", community: "british",    coverAccent: "bg-pink-200",   emoji: "🦋" },
  { slug: "isla",    name: "Isla",    type: "name", gender: "female", community: "british",    coverAccent: "bg-purple-200", emoji: "🌸" },
  { slug: "poppy",   name: "Poppy",   type: "name", gender: "female", community: "british",    coverAccent: "bg-red-200",    emoji: "🌺" },
  { slug: "lily",    name: "Lily",    type: "name", gender: "female", community: "british",    coverAccent: "bg-yellow-200", emoji: "🌼" },
  { slug: "grace",   name: "Grace",   type: "name", gender: "female", community: "british",    coverAccent: "bg-teal-100",   emoji: "🕊️" },
  // South Asian
  { slug: "arjun",   name: "Arjun",   type: "name", gender: "male",   community: "south-asian", coverAccent: "bg-orange-200", emoji: "🦁" },
  { slug: "priya",   name: "Priya",   type: "name", gender: "female", community: "south-asian", coverAccent: "bg-pink-200",   emoji: "🌺" },
  { slug: "ananya",  name: "Ananya",  type: "name", gender: "female", community: "south-asian", coverAccent: "bg-purple-200", emoji: "🦚" },
  { slug: "rohan",   name: "Rohan",   type: "name", gender: "male",   community: "south-asian", coverAccent: "bg-blue-200",   emoji: "🐘" },
  { slug: "aanya",   name: "Aanya",   type: "name", gender: "female", community: "south-asian", coverAccent: "bg-rose-200",   emoji: "🌷" },
  { slug: "riya",    name: "Riya",    type: "name", gender: "female", community: "south-asian", coverAccent: "bg-amber-200",  emoji: "🦋" },
  // Muslim/Arabic — top 10 UK girls
  { slug: "maryam",  name: "Maryam",  type: "name", gender: "female", community: "muslim", coverAccent: "bg-green-200",  emoji: "🌺", coverImage: "/covers/maryam.png", listed: true },
  { slug: "fatima",  name: "Fatima",  type: "name", gender: "female", community: "muslim", coverAccent: "bg-pink-200",   emoji: "🌸", coverImage: "/covers/fatima.png", listed: true },
  { slug: "anaya",   name: "Anaya",   type: "name", gender: "female", community: "muslim", coverAccent: "bg-purple-200", emoji: "⭐", coverImage: "/covers/anaya.png",  listed: true },
  { slug: "nur",     name: "Nur",     type: "name", gender: "female", community: "muslim", coverAccent: "bg-amber-200",  emoji: "🪔", coverImage: "/covers/nur.png",    listed: true },
  { slug: "dua",     name: "Dua",     type: "name", gender: "female", community: "muslim", coverAccent: "bg-blue-200",   emoji: "🌙", coverImage: "/covers/dua.png",    listed: true },
  { slug: "aisha",   name: "Aisha",   type: "name", gender: "female", community: "muslim", coverAccent: "bg-teal-200",   emoji: "🦋", coverImage: "/covers/aisha.png",  listed: true },
  { slug: "hana",    name: "Hana",    type: "name", gender: "female", community: "muslim", coverAccent: "bg-rose-200",   emoji: "🌸", coverImage: "/covers/hana.png",   listed: true },
  { slug: "zahra",   name: "Zahra",   type: "name", gender: "female", community: "muslim", coverAccent: "bg-orange-200", emoji: "🌹", coverImage: "/covers/zahra.png",  listed: true },
  { slug: "layla",   name: "Layla",   type: "name", gender: "female", community: "muslim", coverAccent: "bg-indigo-200", emoji: "🌙", coverImage: "/covers/layla.png",  listed: true },
  { slug: "zara",    name: "Zara",    type: "name", gender: "female", community: "muslim", coverAccent: "bg-purple-200", emoji: "⭐", listed: true },
  // Muslim/Arabic — top 10 UK boys
  { slug: "muhammad", name: "Muhammad", type: "name", gender: "male", community: "muslim", coverAccent: "bg-teal-300",   emoji: "🌙", listed: true },
  { slug: "adam",     name: "Adam",     type: "name", gender: "male", community: "muslim", coverAccent: "bg-green-200",  emoji: "🌿", listed: true },
  { slug: "ali",      name: "Ali",      type: "name", gender: "male", community: "muslim", coverAccent: "bg-blue-200",   emoji: "🦁", listed: true },
  { slug: "ibrahim",  name: "Ibrahim",  type: "name", gender: "male", community: "muslim", coverAccent: "bg-indigo-200", emoji: "⭐", listed: true },
  { slug: "musa",     name: "Musa",     type: "name", gender: "male", community: "muslim", coverAccent: "bg-blue-200",   emoji: "💧", listed: true },
  { slug: "yahya",    name: "Yahya",    type: "name", gender: "male", community: "muslim", coverAccent: "bg-green-200",  emoji: "🌿", listed: true },
  { slug: "yusuf",    name: "Yusuf",    type: "name", gender: "male", community: "muslim", coverAccent: "bg-teal-300",   emoji: "⭐", listed: true },
  { slug: "omar",     name: "Omar",     type: "name", gender: "male", community: "muslim", coverAccent: "bg-amber-200",  emoji: "📚", listed: true },
  { slug: "ahmad",    name: "Ahmad",    type: "name", gender: "male", community: "muslim", coverAccent: "bg-blue-300",   emoji: "🌙", listed: true },
  { slug: "ayaan",    name: "Ayaan",    type: "name", gender: "male", community: "muslim", coverAccent: "bg-amber-200",  emoji: "🌅", listed: true },
  // Legacy entries — searchable but not listed
  { slug: "zainab",  name: "Zainab",  type: "name", gender: "female", community: "muslim", coverAccent: "bg-green-300", emoji: "🌿" },
  { slug: "ahmed",   name: "Ahmed",   type: "name", gender: "male",   community: "muslim", coverAccent: "bg-green-200", emoji: "⭐" },
  // African
  { slug: "kofi",    name: "Kofi",    type: "name", gender: "male",   community: "african", coverAccent: "bg-amber-300", emoji: "🦁" },
  { slug: "amara",   name: "Amara",   type: "name", gender: "female", community: "african", coverAccent: "bg-orange-200",emoji: "🌻" },
  { slug: "imani",   name: "Imani",   type: "name", gender: "female", community: "african", coverAccent: "bg-green-200", emoji: "🌿" },
  { slug: "kwame",   name: "Kwame",   type: "name", gender: "male",   community: "african", coverAccent: "bg-amber-200", emoji: "🐯" },
  // Universal
  { slug: "sofia",   name: "Sofia",   type: "name", gender: "female", community: "universal", coverAccent: "bg-purple-200", emoji: "🦋" },
  { slug: "mia",     name: "Mia",     type: "name", gender: "female", community: "universal", coverAccent: "bg-pink-200",   emoji: "🌸" },
  { slug: "luna",    name: "Luna",    type: "name", gender: "female", community: "universal", coverAccent: "bg-indigo-200", emoji: "🌙" },
  { slug: "noah",    name: "Noah",    type: "name", gender: "male",   community: "universal", coverAccent: "bg-blue-200",   emoji: "🐬" },
  { slug: "leo",     name: "Leo",     type: "name", gender: "male",   community: "universal", coverAccent: "bg-amber-200",  emoji: "🦁" },
  { slug: "aria",    name: "Aria",    type: "name", gender: "female", community: "universal", coverAccent: "bg-rose-200",   emoji: "🎵" },
];

export const OCCASIONS: BookEntry[] = [
  // Festivals
  { slug: "my-first-christmas",  name: "My First Christmas",  type: "occasion", occasionGroup: "festival",  coverAccent: "bg-red-300",    emoji: "🎄", occasionLabel: "Christmas", listed: true },
  { slug: "my-first-easter",     name: "My First Easter",     type: "occasion", occasionGroup: "festival",  coverAccent: "bg-yellow-200", emoji: "🐣", occasionLabel: "Easter" },
  { slug: "my-first-halloween",  name: "My First Halloween",  type: "occasion", occasionGroup: "festival",  coverAccent: "bg-orange-300", emoji: "🎃", occasionLabel: "Halloween" },
  { slug: "my-first-ramadan",    name: "My First Ramadan",    type: "occasion", occasionGroup: "festival",  coverAccent: "bg-teal-300",   emoji: "🌙", occasionLabel: "Islamic",   coverImage: "/covers/my-first-ramadan.png", listed: true },
  { slug: "my-first-eid",        name: "My First Eid",        type: "occasion", occasionGroup: "festival",  coverAccent: "bg-amber-300",  emoji: "⭐", occasionLabel: "Islamic",   coverImage: "/covers/my-first-eid.png",     listed: true },
  { slug: "my-first-diwali",     name: "My First Diwali",     type: "occasion", occasionGroup: "festival",  coverAccent: "bg-orange-300", emoji: "🪔", occasionLabel: "Hindu",     coverImage: "/covers/my-first-diwali.png",  listed: true },
  { slug: "my-first-holi",       name: "My First Holi",       type: "occasion", occasionGroup: "festival",  coverAccent: "bg-pink-300",   emoji: "🌈", occasionLabel: "Hindu" },
  { slug: "my-first-hanukkah",   name: "My First Hanukkah",   type: "occasion", occasionGroup: "festival",  coverAccent: "bg-blue-300",   emoji: "✨", occasionLabel: "Hanukkah",  listed: true },
  // Milestones
  { slug: "my-first-birthday",   name: "My First Birthday",   type: "occasion", occasionGroup: "milestone", coverAccent: "bg-pink-300",   emoji: "🎂", occasionLabel: "Birthday",  listed: true },
  { slug: "starting-school",     name: "Starting School",     type: "occasion", occasionGroup: "milestone", coverAccent: "bg-green-200",  emoji: "🎒", occasionLabel: "Milestone", listed: true },
  { slug: "nursery-graduation",  name: "Nursery Graduation",  type: "occasion", occasionGroup: "milestone", coverAccent: "bg-blue-200",   emoji: "🎓", occasionLabel: "Milestone" },
  // Family
  { slug: "big-brother",         name: "Big Brother",         type: "occasion", occasionGroup: "family",    coverAccent: "bg-blue-200",   emoji: "🦁", occasionLabel: "Family",    listed: true },
  { slug: "big-sister",          name: "Big Sister",          type: "occasion", occasionGroup: "family",    coverAccent: "bg-purple-200", emoji: "🦋", occasionLabel: "Family",    listed: true },
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
