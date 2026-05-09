import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/covers");
const API_KEY = "5a0895bb-4c45-4f79-a7c3-a799d0de625f";

mkdirSync(OUT_DIR, { recursive: true });

const NAMES = [
  // ── US GIRLS (top 20 SSA 2023) ──────────────────────────────────────────
  {
    slug: "olivia", name: "Olivia", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Olivia. Soft purple and cream palette with gold accents. Main title in large elegant typography: "OLIVIA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A sweet girl with large expressive kawaii eyes wearing a purple dress, sitting in a magical garden surrounded by olive branches, butterflies, and flowers, happily coloring in an open book. Background: enchanted garden with glowing willow trees, fireflies, stone arch gateway. Botanical border with vines, flowers, and small butterflies. Colored pencils scattered nearby. Style: premium children's storybook illustration, Pixar-inspired warmth, soft painterly rendering, purple + cream + gold, magical garden atmosphere, highly detailed ornamental borders. Portrait 8.5x11, print-ready. No random text, no watermarks, no distorted faces.`
  },
  {
    slug: "emma", name: "Emma", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Emma. Soft rose pink and cream palette with gold accents. Main title: "EMMA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: An adorable girl with large kawaii eyes wearing a pink floral dress, sitting on a garden bench surrounded by blooming roses and daisies, joyfully coloring a big open book. Background: enchanted English rose garden with cottage, stone path, soft golden sky. Floral border with roses, daisies, and small hearts. Colored pencils in pink tones nearby. Style: premium children's illustration, Pixar-inspired, soft warm painterly, rose pink + cream + gold, dreamy garden atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "charlotte", name: "Charlotte", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Charlotte. Warm amber and cream palette with gold crown accents. Main title: "CHARLOTTE'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A regal little girl with large kawaii eyes wearing an amber princess dress with a small crown, sitting on a velvet chair coloring an open book. Open pages show castles, stars, hearts, and butterflies. Background: magical storybook castle courtyard with golden turrets, rose vines, warm glowing light. Ornate crown and star border motifs. Colored pencils and gold stars nearby. Style: premium children's storybook illustration, Pixar-inspired, soft warm rendering, amber + cream + gold, royal magical atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "sophia", name: "Sophia", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Sophia. Soft pink and cream palette with gold accents. Main title: "SOPHIA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A wise, sweet girl with large kawaii eyes wearing a pink dress with butterfly clips in her hair, sitting at a cozy reading nook coloring a big open book. Open pages show butterflies, stars, and flowers. Background: magical library with glowing bookshelves, warm light, a window with a starry sky. Butterfly and book border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired warmth, soft painterly, pink + cream + gold, cozy magical atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "isabella", name: "Isabella", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Isabella. Deep red and cream palette with gold accents. Main title: "ISABELLA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A graceful girl with large kawaii eyes wearing a red floral dress, sitting in a beautiful Italian-inspired garden coloring an open book. Open pages show sunflowers, olive trees, and birds. Background: Mediterranean garden with terracotta pots, flowering bougainvillea, warm golden sunset. Floral vine border with sunflowers and roses. Colored pencils in warm tones nearby. Style: premium children's storybook illustration, Pixar-inspired, warm Mediterranean tones, red + cream + gold, magical garden atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "ava", name: "Ava", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Ava. Soft teal and cream palette with gold star accents. Main title: "AVA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A bright, playful girl with large kawaii eyes wearing a teal dress with star patches, sitting on a crescent moon swing coloring a big open book. Open pages show stars, clouds, birds, and waves. Background: magical twilight sky with fluffy clouds, glowing stars, soft aurora colors. Star and cloud border motifs. Colored pencils with glitter nearby. Style: premium children's illustration, Pixar-inspired, soft teal + cream + gold, dreamy night-sky atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "evelyn", name: "Evelyn", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Evelyn. Soft indigo and cream palette with silver and gold accents. Main title: "EVELYN'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A dreamy girl with large kawaii eyes wearing an indigo dress with moon motifs, sitting under a weeping willow tree at dusk coloring an open book. Open pages show crescent moons, fireflies, and forest animals. Background: magical twilight meadow with glowing fireflies, a pond reflecting stars, soft purple sky. Moon and star border motifs. Colored pencils nearby. Style: premium children's storybook illustration, Pixar-inspired, indigo + cream + silver, magical twilight atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "harper", name: "Harper", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Harper. Soft green and cream palette with golden music note accents. Main title: "HARPER'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A musical, joyful girl with large kawaii eyes wearing a green dress, sitting on a mossy log in an enchanted forest coloring an open book. Open pages show harps, musical notes, birds, and leaves. Background: magical forest glade with tall glowing trees, singing birds, dappled golden sunlight. Musical note and leaf border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, soft green + cream + gold, magical forest atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "camila", name: "Camila", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Camila. Warm orange and cream palette with gold flower accents. Main title: "CAMILA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A vibrant, cheerful girl with large kawaii eyes wearing an orange floral dress, sitting in a sunflower field coloring an open book. Open pages show marigolds, butterflies, and sun patterns. Background: golden sunflower meadow at sunset, rolling hills, warm glowing sky. Sunflower and butterfly border motifs. Colored pencils in warm yellows and oranges nearby. Style: premium children's illustration, Pixar-inspired, warm orange + cream + gold, sunny joyful atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "gianna", name: "Gianna", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Gianna. Soft pink and cream palette with gold rose accents. Main title: "GIANNA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A sweet, elegant girl with large kawaii eyes wearing a pink dress with rose embroidery, sitting in an Italian piazza garden coloring an open book. Open pages show roses, swirls, and heart patterns. Background: charming Italian garden with fountain, rose bushes, warm golden stone architecture. Rose and vine border motifs. Colored pencils in pinks nearby. Style: premium children's illustration, Pixar-inspired, soft pink + cream + gold, warm Italian garden atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "elizabeth", name: "Elizabeth", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Elizabeth. Royal blue and cream palette with gold crown accents. Main title: "ELIZABETH'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A gracious, regal girl with large kawaii eyes wearing a royal blue dress with a delicate crown, sitting in a grand library coloring an open book. Open pages show castles, scrolls, and crown patterns. Background: grand storybook castle library with tall bookshelves, arched windows, warm candlelight. Crown and star border motifs in gold. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, royal blue + cream + gold, regal magical atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "eleanor", name: "Eleanor", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Eleanor. Soft sage green and cream palette with gold dove accents. Main title: "ELEANOR'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A thoughtful, gentle girl with large kawaii eyes wearing a sage green dress, sitting in a peaceful garden reading nook coloring an open book. Open pages show doves, olive branches, and meadow flowers. Background: serene English cottage garden with ivy-covered walls, stone bench, soft morning light. Dove and leaf border motifs. Colored pencils in soft greens nearby. Style: premium children's illustration, Pixar-inspired, sage green + cream + gold, peaceful magical atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "ella", name: "Ella", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Ella. Sunny yellow and cream palette with gold daisy accents. Main title: "ELLA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A cheerful, bright girl with large kawaii eyes wearing a yellow dress with daisy details, skipping through a flower meadow and stopping to color an open book on a blanket. Open pages show daisies, suns, and rainbows. Background: bright sunny meadow with wildflowers, blue sky with fluffy clouds, rainbow in the distance. Daisy and sunshine border motifs. Colored pencils in yellows nearby. Style: premium children's illustration, Pixar-inspired, sunny yellow + cream + gold, bright cheerful atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "abigail", name: "Abigail", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Abigail. Soft pink and cream palette with gold butterfly accents. Main title: "ABIGAIL'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A lively, curious girl with large kawaii eyes wearing a pink dress with butterfly embroidery, sitting on a garden wall coloring an open book while butterflies flutter around her. Open pages show butterflies, flowers, and heart patterns. Background: magical butterfly garden with lavender fields, stone walls, warm afternoon glow. Butterfly and flower border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, soft pink + cream + gold, magical butterfly garden atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "avery", name: "Avery", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Avery. Teal and cream palette with gold bird accents. Main title: "AVERY'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: An adventurous, creative girl with large kawaii eyes wearing a teal outfit with bird patches, sitting on a treehouse deck coloring an open book. Open pages show birds, clouds, feathers, and maps. Background: magical treehouse in a lush forest with birds flying around, soft blue sky, golden sunlight through leaves. Bird and feather border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, teal + cream + gold, adventurous magical atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "scarlett", name: "Scarlett", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Scarlett. Deep red and cream palette with gold rose accents. Main title: "SCARLETT'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A bold, spirited girl with large kawaii eyes wearing a scarlet dress with rose details, sitting in a rose garden at golden hour coloring an open book. Open pages show red roses, hearts, and swirling patterns. Background: dramatic rose garden with towering red rose hedges, archway, warm amber sunset. Rose and vine border motifs in red and gold. Colored pencils in reds nearby. Style: premium children's illustration, Pixar-inspired, deep red + cream + gold, dramatic rose garden atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "emily", name: "Emily", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Emily. Soft lavender and cream palette with gold flower accents. Main title: "EMILY'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A gentle, poetic girl with large kawaii eyes wearing a lavender dress, sitting in a flower field at dusk coloring an open book. Open pages show wisteria, stars, and flowing patterns. Background: magical lavender field at dusk with a glowing cottage, fireflies, soft purple-pink sky. Wisteria and flower border motifs. Colored pencils in soft purples nearby. Style: premium children's illustration, Pixar-inspired, lavender + cream + gold, gentle magical atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "penelope", name: "Penelope", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Penelope. Deep indigo and cream palette with gold butterfly accents. Main title: "PENELOPE'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A clever, imaginative girl with large kawaii eyes wearing an indigo dress with intricate patterns, sitting at a magical writing desk coloring an open book. Open pages show butterflies, scrolls, and stars. Background: enchanted study room with glowing blue lanterns, telescope at window, starry night sky outside. Butterfly and scroll border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, deep indigo + cream + gold, mystical enchanted atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "chloe", name: "Chloe", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Chloe. Fresh green and cream palette with gold leaf accents. Main title: "CHLOE'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A fresh, lively girl with large kawaii eyes wearing a green dress with leaf patterns, sitting in a sunlit garden coloring an open book. Open pages show plants, birds, and growing things. Background: lush magical garden with tall sunflowers, vegetable patches, a greenhouse, warm morning light. Leaf and vine border motifs. Colored pencils in greens nearby. Style: premium children's illustration, Pixar-inspired, fresh green + cream + gold, lush garden atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "riley", name: "Riley", gender: "girl",
    prompt: `Create a beautiful children's coloring book cover for a little girl named Riley. Warm amber and cream palette with gold star accents. Main title: "RILEY'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A spirited, adventurous girl with large kawaii eyes wearing an amber outfit with star patches, sitting on a hilltop at sunset coloring an open book. Open pages show stars, adventure maps, and animals. Background: golden hillside at sunset with a vast starry sky appearing, silhouetted pine trees, warm amber sky. Star and adventure motif borders. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, warm amber + cream + gold, adventurous golden-hour atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },

  // ── US BOYS (top 20 SSA 2023) ────────────────────────────────────────────
  {
    slug: "liam", name: "Liam", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Liam. Bold blue and cream palette with gold lion accents. Main title: "LIAM'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A brave, friendly boy with large kawaii eyes wearing a blue outfit with a lion patch, sitting on a rock in an adventure landscape coloring an open book. Open pages show lions, shields, and stars. Background: epic golden savanna at sunrise with a friendly lion in the background, acacia trees, warm glowing sky. Lion and shield border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, blue + cream + gold, adventurous warm atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "james", name: "James", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named James. Deep teal and cream palette with gold anchor accents. Main title: "JAMES'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A curious, adventurous boy with large kawaii eyes wearing a teal sailor-style outfit, sitting on a dock coloring an open book. Open pages show anchors, boats, waves, and sea creatures. Background: magical harbor at golden hour with tall sailing ships, seagulls, sparkling ocean. Anchor and wave border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, teal + cream + gold, nautical magical atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "elijah", name: "Elijah", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Elijah. Deep indigo and cream palette with gold star accents. Main title: "ELIJAH'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A thoughtful, wise boy with large kawaii eyes wearing an indigo robe-style outfit, sitting on a hilltop at night coloring an open book by starlight. Open pages show stars, celestial patterns, and mountains. Background: majestic starry sky with aurora lights, mountain silhouettes, glowing constellations. Star and celestial border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, indigo + cream + gold, majestic celestial atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "william", name: "William", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named William. Royal navy and cream palette with gold crown and bear accents. Main title: "WILLIAM'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A noble, gentle boy with large kawaii eyes wearing a navy blue outfit with a small crown badge, sitting in a grand library coloring an open book. Open pages show bears, castles, and royal crests. Background: magnificent royal library with high bookshelves, stained glass windows, warm candlelight. Crown and castle border motifs in gold. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, navy + cream + gold, regal magical atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "benjamin", name: "Benjamin", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Benjamin. Warm amber and cream palette with gold honeybee accents. Main title: "BENJAMIN'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A cheerful, inventive boy with large kawaii eyes wearing amber overalls with bee patches, sitting in a meadow coloring an open book. Open pages show bees, honeycombs, flowers, and kites. Background: sunny meadow with wildflowers, beehives in trees, bees flying, warm golden sky. Bee and honeycomb border motifs. Colored pencils in yellow and amber nearby. Style: premium children's illustration, Pixar-inspired, warm amber + cream + gold, sunny cheerful atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "lucas", name: "Lucas", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Lucas. Forest green and cream palette with gold lizard accents. Main title: "LUCAS'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: An adventurous, nature-loving boy with large kawaii eyes wearing a green explorer outfit, sitting by a jungle stream coloring an open book. Open pages show lizards, jungle plants, and tropical animals. Background: lush jungle with towering green trees, sunlight filtering through canopy, a small waterfall. Leaf and lizard border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, forest green + cream + gold, lush jungle adventure atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "henry", name: "Henry", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Henry. Warm green and cream palette with gold turtle accents. Main title: "HENRY'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A patient, kind boy with large kawaii eyes wearing a green outfit, sitting by a peaceful pond coloring an open book while a friendly turtle watches. Open pages show turtles, lily pads, frogs, and dragonflies. Background: serene countryside pond with weeping willows, lily pads, soft afternoon light. Turtle and pond-life border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, warm green + cream + gold, peaceful nature atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "alexander", name: "Alexander", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Alexander. Royal blue and cream palette with gold eagle accents. Main title: "ALEXANDER'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A bold, heroic boy with large kawaii eyes wearing a royal blue outfit with an eagle crest, standing atop a hill coloring an open book with a magnificent eagle soaring beside him. Open pages show eagles, shields, maps, and mountains. Background: epic mountain landscape at sunrise with golden light, vast sky, clouds below the peaks. Eagle and shield border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, royal blue + cream + gold, epic heroic atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "mason", name: "Mason", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Mason. Stone grey and cream palette with gold gear and star accents. Main title: "MASON'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A creative, industrious boy with large kawaii eyes wearing a grey outfit with a builder's tool belt, sitting among building blocks and toy tools coloring an open book. Open pages show houses, gears, stars, and vehicles. Background: magical workshop with glowing lanterns, blueprints on the wall, organized tools. Gear and building motif borders. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, stone grey + cream + gold, inventive workshop atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "ethan", name: "Ethan", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Ethan. Sky blue and cream palette with gold star accents. Main title: "ETHAN'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A strong, friendly boy with large kawaii eyes wearing a sky blue outfit, lying on a hilltop meadow looking up at the sky while coloring an open book. Open pages show clouds, stars, kites, and birds. Background: bright blue sky with billowing white clouds, a colorful kite flying high, green meadow. Cloud and star border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, sky blue + cream + gold, bright open-sky atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "daniel", name: "Daniel", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Daniel. Deep blue and cream palette with gold star accents. Main title: "DANIEL'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A brave, gentle boy with large kawaii eyes wearing a deep blue outfit, sitting in a cozy den coloring an open book with a friendly lion cub beside him. Open pages show lions, stars, and geometric patterns. Background: magical cozy forest den at night with glowing fireflies, stars through the trees, warm campfire light. Lion and star border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, deep blue + cream + gold, brave and gentle atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "jacob", name: "Jacob", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Jacob. Earth tones — warm brown and cream palette with gold star accents. Main title: "JACOB'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A curious, grounded boy with large kawaii eyes wearing a warm brown outdoor outfit, sitting by a campfire in the woods coloring an open book. Open pages show trees, animals, stars, and wilderness scenes. Background: magical forest clearing at night with glowing campfire, tall pine trees, star-filled sky. Tree and star border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, warm earth tones + cream + gold, cozy campfire atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "logan", name: "Logan", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Logan. Forest green and steel blue palette with gold mountain accents. Main title: "LOGAN'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A rugged, adventurous boy with large kawaii eyes wearing a green and blue outdoor outfit, sitting on a mountain boulder coloring an open book. Open pages show mountains, wolves, pine trees, and stars. Background: majestic mountain wilderness at dusk with pine forests, snow-capped peaks, a rushing river below. Mountain and pine tree border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, forest green + steel blue + gold, rugged adventure atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "jackson", name: "Jackson", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Jackson. Bold navy and cream palette with gold star accents. Main title: "JACKSON'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A cool, energetic boy with large kawaii eyes wearing a navy outfit with a star logo, sitting on a skateboard ramp coloring an open book. Open pages show stars, lightning bolts, and action patterns. Background: colorful urban playground with ramps, chalk art on the ground, warm golden-hour light. Star and lightning border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, navy + cream + gold, energetic fun atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "sebastian", name: "Sebastian", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Sebastian. Deep ocean blue and cream palette with gold music note accents. Main title: "SEBASTIAN'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A musical, soulful boy with large kawaii eyes wearing a deep blue outfit with music note patches, sitting on a pier at sunset coloring an open book. Open pages show music notes, ocean waves, and sea creatures. Background: magical sunset over the ocean with a glowing horizon, sailboats in the distance, warm amber light. Music note and wave border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, deep blue + cream + gold, musical sunset atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "jack", name: "Jack", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Jack. Bright blue and cream palette with gold adventure accents. Main title: "JACK'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A lively, brave boy with large kawaii eyes wearing a blue outfit, climbing a giant beanstalk-like tree and pausing to color an open book. Open pages show beans, castles in clouds, giants, and adventure maps. Background: magical storybook sky above clouds with a golden castle in the distance, puffy white clouds. Vine and castle border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired storybook feel, bright blue + cream + gold, classic fairytale atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "aiden", name: "Aiden", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Aiden. Warm orange and cream palette with gold flame accents. Main title: "AIDEN'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A bright, energetic boy with large kawaii eyes wearing an orange outfit with flame details, sitting by a glowing bonfire at dusk coloring an open book. Open pages show flames, phoenixes, suns, and stars. Background: magical dusk hillside with glowing bonfire, warm amber and orange sky, fireflies beginning to appear. Flame and sun border motifs. Colored pencils in warm tones nearby. Style: premium children's illustration, Pixar-inspired, warm orange + cream + gold, warm glowing atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "owen", name: "Owen", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Owen. Soft teal and cream palette with gold sheep and meadow accents. Main title: "OWEN'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A gentle, friendly boy with large kawaii eyes wearing a teal outfit, sitting in a green meadow with fluffy sheep around him coloring an open book. Open pages show sheep, rolling hills, clouds, and happy animals. Background: bright, cheerful countryside meadow with rolling green hills, a farmhouse, fluffy white clouds. Sheep and cloud border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, teal + cream + gold, cheerful countryside atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "samuel", name: "Samuel", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Samuel. Deep blue and cream palette with gold compass and star accents. Main title: "SAMUEL'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A wise, strong boy with large kawaii eyes wearing a deep blue outfit, sitting at an antique wooden desk with a compass and maps coloring an open book. Open pages show compasses, maps, stars, and waves. Background: old-world study with glowing globe, maps on the wall, bookshelves, warm lantern light. Compass and map border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, deep blue + cream + gold, explorer's study atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
  {
    slug: "matthew", name: "Matthew", gender: "boy",
    prompt: `Create a beautiful children's coloring book cover for a little boy named Matthew. Warm blue and cream palette with gold mountain and bird accents. Main title: "MATTHEW'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "32 Fun Colouring Pages" — Age badge: "Ages 3–8 Years". Scene: A kind, thoughtful boy with large kawaii eyes wearing a blue outdoor outfit, sitting by a mountain stream coloring an open book while birds perch nearby. Open pages show mountains, birds, rivers, and peaceful nature scenes. Background: peaceful mountain valley at golden hour with a clear stream, pine trees, snow-capped peaks in the distance. Mountain and bird border motifs. Colored pencils nearby. Style: premium children's illustration, Pixar-inspired, warm blue + cream + gold, peaceful mountain atmosphere. Portrait 8.5x11. No random text, no watermarks.`
  },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateImage(entry, index) {
  console.log(`\n[${index + 1}/${NAMES.length}] Generating: ${entry.name} (${entry.gender})...`);

  const res = await fetch("https://koala.sh/api/image-generation/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: entry.prompt,
      model: "gpt-image-2",
      quality: "high",
      size: "1024x1536",
      numImages: 1,
      enhancePrompt: "off",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`  ✗ API error ${res.status}: ${text.slice(0, 200)}`);
    return null;
  }

  const data = await res.json();
  // API returns either an array [{url}] or {data:[{url}]} or {url}
  const url = Array.isArray(data)
    ? data[0]?.url
    : data?.data?.[0]?.url || data?.images?.[0]?.url || data?.url;

  if (!url) {
    console.error(`  ✗ No URL in response:`, JSON.stringify(data).slice(0, 200));
    return null;
  }

  console.log(`  ✓ Generated URL received`);
  return url;
}

async function downloadImage(url, slug) {
  for (let attempt = 0; attempt < 9; attempt++) {
    if (attempt > 0) await sleep(8000);

    try {
      const res = await fetch(url);
      if (res.ok && res.headers.get("content-type")?.startsWith("image/")) {
        const buffer = await res.arrayBuffer();
        const outPath = join(OUT_DIR, `${slug}.png`);
        writeFileSync(outPath, Buffer.from(buffer));
        console.log(`  ✓ Saved: public/covers/${slug}.png (${(buffer.byteLength / 1024).toFixed(0)}KB)`);
        return true;
      } else {
        console.log(`  ⏳ Not ready yet (attempt ${attempt + 1}/9, status: ${res.status})`);
      }
    } catch (e) {
      console.log(`  ⚠ Fetch error attempt ${attempt + 1}: ${e.message}`);
    }
  }
  console.error(`  ✗ Failed to download ${slug} after 9 attempts`);
  return false;
}

const results = {};

async function main() {
  console.log(`🎨 Generating covers for ${NAMES.length} US names...\n`);

  for (let i = 0; i < NAMES.length; i++) {
    const entry = NAMES[i];

    const imageUrl = await generateImage(entry, i);
    if (!imageUrl) {
      results[entry.slug] = { error: true };
      await sleep(3000);
      continue;
    }

    results[entry.slug] = { url: imageUrl, name: entry.name };

    const ok = await downloadImage(imageUrl, entry.slug);
    if (!ok) results[entry.slug].downloadFailed = true;

    if (i < NAMES.length - 1) {
      console.log("  ⏸ Pausing 4s before next request...");
      await sleep(4000);
    }
  }

  const manifestPath = join(OUT_DIR, "manifest-us.json");
  writeFileSync(manifestPath, JSON.stringify(results, null, 2));

  const succeeded = Object.values(results).filter(r => !r.error && !r.downloadFailed).length;
  console.log(`\n✅ Done! ${succeeded}/${NAMES.length} covers generated.`);
  console.log(`📄 Manifest: public/covers/manifest-us.json`);
}

main().catch(console.error);
