export type ColoringPage = {
  id: string;
  title: string;
  category: 'animals' | 'adventure' | 'fantasy' | 'nature';
  gender: 'girl' | 'boy' | 'neutral';
  thumbnail: string; // path to /public/pages/[id].png — empty string until generated
  emoji: string;
};

export const COLORING_PAGES: ColoringPage[] = [
  // Animals
  { id: 'animals-bunny',    title: 'Bunny Friends',    category: 'animals',   gender: 'neutral', thumbnail: '/pages/animals-bunny.png',    emoji: '🐰' },
  { id: 'animals-cat',      title: 'Cute Kitten',      category: 'animals',   gender: 'girl',    thumbnail: '/pages/animals-cat.png',      emoji: '🐱' },
  { id: 'animals-dinosaur', title: 'Dino Friends',     category: 'animals',   gender: 'boy',     thumbnail: '/pages/animals-dinosaur.png', emoji: '🦕' },
  { id: 'animals-elephant', title: 'Baby Elephant',    category: 'animals',   gender: 'neutral', thumbnail: '/pages/animals-elephant.png', emoji: '🐘' },

  // Adventure
  { id: 'adventure-pirate',   title: 'Pirate Treasure', category: 'adventure', gender: 'boy',     thumbnail: '/pages/adventure-pirate.png',   emoji: '🏴‍☠️' },
  { id: 'adventure-knight',   title: 'Brave Knight',    category: 'adventure', gender: 'boy',     thumbnail: '/pages/adventure-knight.png',   emoji: '⚔️' },
  { id: 'adventure-explorer', title: 'Jungle Explorer', category: 'adventure', gender: 'neutral', thumbnail: '/pages/adventure-explorer.png', emoji: '🗺️' },
  { id: 'adventure-rocket',   title: 'Space Rocket',    category: 'adventure', gender: 'neutral', thumbnail: '/pages/adventure-rocket.png',   emoji: '🚀' },

  // Fantasy
  { id: 'fantasy-unicorn', title: 'Magic Unicorn',      category: 'fantasy', gender: 'girl',    thumbnail: '/pages/fantasy-unicorn.png', emoji: '🦄' },
  { id: 'fantasy-dragon',  title: 'Baby Dragon',        category: 'fantasy', gender: 'neutral', thumbnail: '/pages/fantasy-dragon.png',  emoji: '🐉' },
  { id: 'fantasy-mermaid', title: 'Mermaid Lagoon',     category: 'fantasy', gender: 'girl',    thumbnail: '/pages/fantasy-mermaid.png', emoji: '🧜‍♀️' },
  { id: 'fantasy-castle',  title: 'Enchanted Castle',   category: 'fantasy', gender: 'neutral', thumbnail: '/pages/fantasy-castle.png',  emoji: '🏰' },

  // Nature
  { id: 'nature-flowers', title: 'Flower Garden', category: 'nature', gender: 'girl',    thumbnail: '/pages/nature-flowers.png', emoji: '🌸' },
  { id: 'nature-rainbow', title: 'Rainbow Sky',   category: 'nature', gender: 'neutral', thumbnail: '/pages/nature-rainbow.png', emoji: '🌈' },
  { id: 'nature-ocean',   title: 'Ocean World',   category: 'nature', gender: 'neutral', thumbnail: '/pages/nature-ocean.png',   emoji: '🐠' },
  { id: 'nature-forest',  title: 'Magic Forest',  category: 'nature', gender: 'neutral', thumbnail: '/pages/nature-forest.png',  emoji: '🌲' },
];

export const DEFAULT_GIRL_PAGES = ['fantasy-unicorn', 'nature-flowers', 'animals-cat'];
export const DEFAULT_BOY_PAGES  = ['animals-dinosaur', 'adventure-rocket', 'adventure-pirate'];

export function getPageById(id: string): ColoringPage | undefined {
  return COLORING_PAGES.find((p) => p.id === id);
}

export const CATEGORY_LABELS: Record<ColoringPage['category'], string> = {
  animals:   'Animals',
  adventure: 'Adventure',
  fantasy:   'Fantasy',
  nature:    'Nature',
};

export const CATEGORY_EMOJIS: Record<ColoringPage['category'], string> = {
  animals:   '🐾',
  adventure: '⚔️',
  fantasy:   '✨',
  nature:    '🌿',
};
