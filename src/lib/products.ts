export interface FrameVariation {
  id: string;
  name: string;
  imageIndex: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  variations: { name: string; imageIndex?: number }[];
  frameVariations: FrameVariation[];
  category: string;
  tags: string[];
  inStock: boolean;
}

// Local image path helpers
const enc = encodeURIComponent;
const sI = (folder: string, ...files: string[]): string[] =>
  files.map((f) => `/sunnies/${enc(folder)}/${enc(f)}`);
const ttI = (folder: string, ...files: string[]): string[] =>
  files.map((f) => `/${enc("tiny treasures")}/${enc(folder)}/${enc(f)}`);

const GENERIC_SUNNIES_PLACEHOLDER =
  "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/df6b2bd997b31efb08d5f9f16f82ba89.jpg";

const rawSunnies = [
  // ── Existing CDN products ──────────────────────────────────────────────────
  {
    name: "Advanced polarized",
    price: 20.0,
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e1446b98e8dd8dbdd3a5c3a084aa4587.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e1446b98e8dd8dbdd3a5c3a084aa4587.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/2d863d6f9b518f840fb69b68cbbe32b6.jpg",
    ],
  },
  {
    name: "Anti Blue & Polarized",
    price: 15.0,
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f88467d800bed47ca809add8e0842a09.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f88467d800bed47ca809add8e0842a09.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/dfdf85257f614765fd8756110336fb79.jpg",
    ],
    description:
      "Advanced anti-blue light protection combined with polarized lenses. Reduces digital eye strain while eliminating glare for crystal-clear vision.",
    variations: [
      { name: "Clear Frame", imageIndex: 0 },
      { name: "Black Frame", imageIndex: 1 },
    ],
  },
  {
    id: "anti-blue-light-glasses",
    name: "Anti Blue Light Glasses for Phone and Laptop Use",
    price: 15.0,
    category: "blue-light",
    description:
      "Protect your eyes from blue light emitted by screens with these stylish anti-blue light glasses. Perfect for phone and laptop use.",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4824cd9e9ef2cfe9ca21dce90ccd4b31.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4824cd9e9ef2cfe9ca21dce90ccd4b31.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/42de985ea84fc256b40b972b8c59d5bd.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/846cc9242f2adbf5907cdc47b428430a.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5d38e95ca74b4f28645347a0a1bb1e97.jpg",
    ],
    frameVariations: [
      { id: "black-silver", name: "Black and Silver Frame", imageIndex: 0 },
      { id: "tortoiseshell", name: "Tortoiseshell Brown Frame", imageIndex: 1 },
      { id: "black-square", name: "Black Square Frame", imageIndex: 2 },
      { id: "gray-black", name: "Gray and Black Frame", imageIndex: 3 },
    ],
  },
  {
    name: "Double Beam",
    price: 10.0,
    category: "sunglasses",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5b01c7df1443c6443f71d4235a2c813a.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5b01c7df1443c6443f71d4235a2c813a.jpg",
    ],
    description:
      "Classic black hexagonal frame sunglasses with brown polarized lenses",
  },
  {
    name: "Double Sunglasses",
    price: 20.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/674682a5b387160ed5341b763e0f07b8.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/674682a5b387160ed5341b763e0f07b8.jpg",
    ],
    description:
      "Stylish double sunglasses featuring a unique frame design for a bold look and premium UV protection.",
  },
  {
    id: "frameless-sunglasses",
    name: "Frameless",
    price: 15.0,
    category: "frameless",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/6ded6741567c712317d926ed02b86b6a.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/6ded6741567c712317d926ed02b86b6a.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/a6c02a3a9d8468cd378298d6073d0672.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/36883ab8e54d2d151fcafa6bc794e854.jpg",
    ],
    description:
      "Elegant frameless sunglasses with premium gold metal bridge and hinges. Features wood-grain arms and available in multiple lens colors including brown gradient, clear, and dark purple.",
  },
  {
    id: "gm-oval-unisex",
    name: "GM Oval Unisex",
    price: 15.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c84bd4fadada33fe329c68373a731f54.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c84bd4fadada33fe329c68373a731f54.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/2ec3faed094ce595b9129857999c5cd9.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/aadb51ddea3dd667941915be591cb526.jpg",
    ],
    description:
      "Classic oval frame style designed for a universal fit. Features a sleek black frame with versatile lens options.",
  },
  {
    id: "korean-style-anti-beam",
    name: "Korean Style & Anti Beam",
    price: 10.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/eda9f55a9948366088a260d99418c6ab.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/eda9f55a9948366088a260d99418c6ab.jpg",
    ],
    description:
      "Brown tortoiseshell round frame sunglasses with clear lenses and silver metal arms",
  },
  {
    id: "korean-style-square-frame",
    name: "Korean Style Square Frame",
    price: 15.0,
    category: "square",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/bb9edd676225bd47ae99259e02e2e062.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/bb9edd676225bd47ae99259e02e2e062.jpg",
    ],
    description:
      "Korean style square frame sunglasses available in three variations: black, tortoiseshell, and purple gradient.",
  },
  {
    id: "ladies-cateye",
    name: "Ladies Cateye",
    price: 15.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b660e2ac6a02f9f189eb76cf51ea54e6.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b660e2ac6a02f9f189eb76cf51ea54e6.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/10d508ec133930ffa9ee3e75f897559d.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/6a90d4acf6b6cf42061a69f235864342.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/339a5eae67fe2d405d3de911112d40a3.jpg",
    ],
    description: "Classic ladies cateye sunglasses with stylish frames and quality lenses",
  },
  {
    id: "large-cat-eye",
    name: "Large Cat Eye",
    price: 10.0,
    category: "cat-eye",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/cac9bd4f789b30848960ac098672ad1b.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/cac9bd4f789b30848960ac098672ad1b.jpg",
    ],
    description:
      "Large cat eye sunglasses with black frame, dark gray polarized lenses, and thin black arms.",
  },
  {
    id: "male-half-frame-sunglasses",
    name: "Male Half Frame Sunglasses",
    price: 10.0,
    category: "half-frame",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b583a3c3a326aa251331e526e0895758.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b583a3c3a326aa251331e526e0895758.jpg",
    ],
    description:
      "Sophisticated male half frame sunglasses with sleek black and gold metal frame and dark gray polarized lenses.",
  },
  {
    id: "metal-half-frame",
    name: "Metal Half Frame",
    price: 10.0,
    category: "sunglasses",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/88ce15db049e36632c365f4253859604.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/88ce15db049e36632c365f4253859604.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/8225ad133ad672b966e967ea9477eeb6.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b099e49ddfda8356587d67f1a085e408.jpg",
    ],
    description: "Silver metal frame with black top half and dark gray polarized lenses",
  },
  {
    id: "metal-frameless-women",
    name: "Metal Frameless Women Sunglasses",
    price: 15.0,
    category: "women",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/fee00223e967a4edab95fc596023293d.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/fee00223e967a4edab95fc596023293d.jpg",
    ],
    description:
      "Minimalist frameless design with gold metal bridge and arms, brown gradient polarized lenses",
  },
  {
    id: "nd-dimming-glasses",
    name: "ND Dimming Glasses",
    price: 30.0,
    category: "premium",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/aa372830d6cc97a4690cd0a1f6a0be5f.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/aa372830d6cc97a4690cd0a1f6a0be5f.jpg",
    ],
    description:
      "Professional-grade ND dimming glasses with flip-up design and dark gray polarized lenses",
  },
  {
    id: "male-optical-polarized",
    name: "Male Optical Polarized",
    price: 30.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/fc291c45da5daea3557b03d6db93f37f.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/fc291c45da5daea3557b03d6db93f37f.jpg",
    ],
    description:
      "Premium male optical polarized sunglasses. Available in clear lens, vibrant orange polarized, and classic dark gray polarized.",
    frameVariations: [
      { id: "clear", name: "Clear Lens", imageIndex: 0 },
      { id: "orange", name: "Orange Polarized", imageIndex: 0 },
      { id: "dark-gray", name: "Dark Gray Polarized", imageIndex: 0 },
    ],
  },
  {
    id: "male-retro",
    name: "Male Retro",
    price: 20.0,
    category: "retro",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f315fd6a88f64b126b189e28f22c2d94.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f315fd6a88f64b126b189e28f22c2d94.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9f6b83c72a2548d88f50771bd52f8ec1.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/a6aac7bd9875eddd93894fcf28e9cd6f.jpg",
    ],
    description:
      "Classic retro-style sunglasses with polarized lenses. Features multiple frame styles.",
  },
  {
    id: "male-retro-thick-square",
    name: "Male Retro Thick Square",
    price: 15.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/790720fd4510e0481445370600967908.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/790720fd4510e0481445370600967908.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/cf87f1ff68201264784b8feaa866731b.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/95da8c98739ab544662b52cef446e749.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/3e3dc1e4b3f2656bc9db382c4cb4b12d.jpg",
    ],
    description:
      "Timeless retro thick square sunglasses with substantial frames that make a bold statement. Features premium polarized lenses in multiple color options.",
  },
  {
    id: "man-gm-thick-retro-oval",
    name: "Man GM Thick Retro Oval",
    price: 15.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b4658cd4a2d305c61629d31ab38268e5.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b4658cd4a2d305c61629d31ab38268e5.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ef902ef8118f5dd7352bac79084fc680.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/89f13cd1a7131422b8ae39a1f557ce00.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/2426b3ad1bfa9655553e8019ec438560.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/1171081a658955914ac542ce1d3db6b9.jpg",
    ],
    description:
      "Bold retro oval sunglasses with thick frames. Features five stunning polarized color options.",
  },
  {
    id: "men-women-small-square-frame",
    name: "Men and Women Small Square Frame Sunglasses",
    price: 10.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/db18ab23c48ba5264dafdc6527c4b771.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/db18ab23c48ba5264dafdc6527c4b771.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5ea5bbdc3f708a8c6a08f5c2d6366260.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e70b822210bb7309841add6a9149a5e5.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ffce630e9ed3bca3c5f5c07ace631a86.jpg",
    ],
    description:
      "Unisex small square frame sunglasses with polarized lenses. Multiple frame and lens color combinations.",
  },
  {
    id: "men-square-polarized",
    name: "Men Square Polarized",
    price: 20.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/0106c95c167a4eebf7dd77c5b6fbf6b7.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/0106c95c167a4eebf7dd77c5b6fbf6b7.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f03bb54c814e2886be2200030837cadc.jpg",
    ],
    description: "Men square polarized sunglasses with black metal frame and polarized lenses",
  },
  {
    id: "metal-double-bridge",
    name: "Metal Double Bridge Sunglasses",
    price: 20.0,
    category: "sunglasses",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/13a8e0891eb2289610078c03aa4dbb7f.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/13a8e0891eb2289610078c03aa4dbb7f.jpg",
    ],
    description:
      "Classic metal double bridge design with polarized lenses. Clear frame with dark gray or light blue gradient lenses.",
  },
  {
    id: "retro-box",
    name: "Retro Box",
    price: 20.0,
    category: "sunglasses",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/14db566ee0d20db071bafb39b9fdec1c.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/14db566ee0d20db071bafb39b9fdec1c.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/77a54a8c9d3bf92d8bdc85403bebbe8b.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/790daa937526cb5acef1f3233b625f6b.jpg",
    ],
    description:
      "Vintage-inspired retro box sunglasses with acetate frame and metal bridge. Polarized lenses for UV protection and style.",
    tags: ["retro", "vintage", "polarized", "uv-protection"],
  },
  {
    id: "new-retro-frameless",
    name: "New Retro Frameless",
    price: 15.0,
    category: "frameless",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7056f92ee23cecc81f564c59d6da62cc.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7056f92ee23cecc81f564c59d6da62cc.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7601edf1fae3f94527cd320a6117d36e.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4441efca628112386cf6eb13c754b5e8.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/112b71a0a031a82bc11f4a5b651f845f.jpg",
    ],
    description: "Vintage-inspired frameless sunglasses with clear lenses and gold/black metal accents",
  },
  {
    id: "night-vision",
    name: "Night Vision",
    price: 15.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4927e162a594afafd98485b762a9be87.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4927e162a594afafd98485b762a9be87.jpg",
    ],
    description:
      "Premium night vision sunglasses with gold metal frame and yellow-tinted lenses for enhanced night driving visibility",
  },
  {
    id: "oval-unisex",
    name: "Oval Unisex",
    price: 10.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/745edf00a1300f2cad9c7c2d8ff0569f.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/745edf00a1300f2cad9c7c2d8ff0569f.jpg",
    ],
    description:
      "Classic oval unisex sunglasses with tortoiseshell and dark brown acetate frames and dark polarized lenses",
  },
  {
    id: "photochromic",
    name: "Photochromic",
    price: 15.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/1ac343d284b4a0691cff1b858f965954.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/1ac343d284b4a0691cff1b858f965954.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7beb9c662ce58576bdd04b2ba0ea9caf.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/16f05d28100f90543bc3e58ec1d865c6.jpg",
    ],
    description:
      "Advanced photochromic glasses with black metal frames. Lenses adapt to light conditions for optimal vision.",
  },
  {
    id: "polarized-club-master",
    name: "Polarized Club Master",
    price: 10.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/80757fe4ce05c858dfc708b02e999c44.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/80757fe4ce05c858dfc708b02e999c44.jpg",
    ],
    description:
      "Premium polarized club master sunglasses with tortoiseshell and black acetate frames and gold metal accents.",
  },
  {
    id: "polarized-sunglasses",
    name: "Polarized Sunglasses",
    price: 20.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f9626d3f9c7079fc4aa6472dde5c8d6e.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f9626d3f9c7079fc4aa6472dde5c8d6e.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/69d2b2afee110e1daf551275d9a64678.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7452c3914b124b364bbb1468e0cf47d8.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c27eb19b3a2dc2834385dabe3c8e679e.jpg",
    ],
    description:
      "Premium polarized sunglasses with black and tortoiseshell acetate frames, gold metal accents, and dark or brown polarized lenses.",
  },
  {
    id: "polarized-photochromic",
    name: "Polarized Photochromic",
    price: 20.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/40e1f94b688f31ab456393d727edecf0.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/40e1f94b688f31ab456393d727edecf0.jpg",
    ],
    description:
      "Polarized photochromic glasses with black acetate frame and gold metal accents. Lenses adapt to light conditions.",
  },
  {
    id: "raddisom-polarized-magnetic",
    name: "Raddisom Polarized Anti-Ultraviolet Magnetic Lens",
    price: 40.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e9b7293d8cda68c28829dbdbf97ff6b4.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e9b7293d8cda68c28829dbdbf97ff6b4.jpg",
    ],
    description:
      "Premium raddisom polarized anti-ultraviolet magnetic lens sunglasses. Multiple lens color options with green carrying case.",
  },
  {
    id: "rectangle-unisex",
    name: "Rectangle Unisex",
    price: 15.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b282b65952499ada2d3ff73a223b6d32.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b282b65952499ada2d3ff73a223b6d32.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/61ad3dbe11055e64f5a1e96a20aa2a7e.jpg",
    ],
    description:
      "Rectangle unisex sunglasses with black acetate frames. Multiple lens colors: clear, yellow, dark, and blue-tinted.",
  },
  {
    id: "retro-square",
    name: "Retro Square",
    price: 10.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/aba16ac4083cb88a572926767c8cdda8.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/aba16ac4083cb88a572926767c8cdda8.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c16639264033f76afc21a241ff50d74f.jpg",
    ],
    description: "Classic retro square sunglasses with polarized lenses",
  },
  {
    id: "round-retro",
    name: "Round Retro",
    price: 10.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/0ca27b4caf58c0f5f5143844714fc4ba.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/0ca27b4caf58c0f5f5143844714fc4ba.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b8843e5f3fbad581359026da4f48b8c1.jpg",
    ],
    description: "Vintage round retro sunglasses with gradient and polarized lens options",
  },
  {
    id: "small-rectangle-men",
    name: "Small Rectangle Men",
    price: 10.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/59985deafadccdcbda8ea07913ef30c4.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/59985deafadccdcbda8ea07913ef30c4.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b248915cf14a6c7c9422bdfa4d871f4f.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7834a506d7d242c155f1e44a070e242f.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/701405f551126ec72f5db0dc4e350865.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/850373a3773814b4dba3dedad72acc17.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/03085894ccde95caa4830542d7b7b3b0.jpg",
    ],
    description: "Sleek small rectangle sunglasses for men with multiple lens tint options",
  },
  {
    id: "stylish-cateye",
    name: "Stylish Cateye",
    price: 15.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ba212dea44578925883494f580361a03.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ba212dea44578925883494f580361a03.jpg",
    ],
    description:
      "Elegant cateye sunglasses with black and brown tortoiseshell acetate frame and gold metal accents. Gradient brown lenses.",
  },
  {
    id: "stylish-round-female",
    name: "Stylish Round Female",
    price: 15.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c06c8b11a3ea052ecdc1448742fef59d.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c06c8b11a3ea052ecdc1448742fef59d.jpg",
    ],
    description:
      "Chic round sunglasses with black metal frames. Available in dark purple, blue gradient, and brown gradient lenses.",
  },
  {
    id: "thick-square-retro",
    name: "Thick Square Retro",
    price: 10.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7f763b98ef16813880928426059fc02a.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7f763b98ef16813880928426059fc02a.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/14189bec437de93e44eb45e29dfcb271.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7c6511819f324af4cbb5ea65dc223c4e.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4e39ab428dfe7c877004e6ec015ffab8.jpg",
    ],
    description:
      "Bold retro-inspired square sunglasses with thick acetate frames. Multiple frame colors with dark polarized lenses.",
  },
  {
    id: "unisex-octagon",
    name: "Unisex Octagon",
    price: 15.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/dda0079a7f4f2319bffd71fc36a99946.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/dda0079a7f4f2319bffd71fc36a99946.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/1468be8e258cae0687018776367374f1.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/8e54fbb8b20c720ce5a6e23975faac55.jpg",
    ],
    description:
      "Modern octagon-shaped sunglasses with black and gold metal frames. Dark polarized lenses for all genders.",
  },
  {
    id: "retro-unisex-small-thick",
    name: "Small Thick Retro Unisex",
    price: 10.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9795e9e518bca2ee55a6e54475a88f92.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9795e9e518bca2ee55a6e54475a88f92.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/2cd907002f133957979165e4071f5e99.jpg",
    ],
    description:
      "Classic retro style with thick acetate frames and gold metal accents. Light purple-tinted and dark polarized options.",
  },
  {
    id: "wooden-frame-sunglasses",
    name: "Wooden Frame Sunglasses",
    price: 10.0,
    category: "sunnies",
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ae06becdbd341ada84eed5ac7c5685c9.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ae06becdbd341ada84eed5ac7c5685c9.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/67e8e1f3a15c51f4e621743aeee60895.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/d0a04a8eb84df11039f4b021d00c20be.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5bd0aa13880a4741fc2978859f33967c.jpg",
    ],
    description:
      "Eco-friendly wooden frame sunglasses with dark wood-grain arms and dark polarized lenses.",
  },
  // ── New products from public/sunnies/ ─────────────────────────────────────
  {
    id: "new-anti-blue-light-polarized",
    name: "Anti-blue Light Polarized",
    price: 40.0,
    category: "blue-light",
    description: "High-grade anti-blue light polarized lenses for all-day screen and outdoor protection.",
    images: sI("Anti-blue Light Polarized $40", "Anti-blue Light Polarized 1.png"),
    image: sI("Anti-blue Light Polarized $40", "Anti-blue Light Polarized 1.png")[0],
  },
  {
    id: "artistic-retro-polygon",
    name: "Artistic Retro Polygon Small Frame",
    price: 15.0,
    category: "sunnies",
    description: "Distinctive polygon small frames with an artistic retro flair. Four unique color variations.",
    images: sI("Artistic retro polygon small frame $15", "Artistic retro polygon small frame 1.png", "Artistic retro polygon small frame 2.png", "Artistic retro polygon small frame 3.png", "Artistic retro polygon small frame 4.png"),
    image: sI("Artistic retro polygon small frame $15", "Artistic retro polygon small frame 1.png")[0],
  },
  {
    id: "female-round-frame",
    name: "Female Round Frame",
    price: 10.0,
    category: "sunnies",
    description: "Chic round frame sunglasses tailored for a feminine look with premium lenses.",
    images: sI("Female round frame $10", "Female round frame 1.png"),
    image: sI("Female round frame $10", "Female round frame 1.png")[0],
  },
  {
    id: "gm-unisex",
    name: "GM Unisex",
    price: 20.0,
    category: "sunnies",
    description: "Sleek GM unisex sunglasses built for style and durability in any setting.",
    images: sI("GM Unisex $20", "GM Unisex 1.png"),
    image: sI("GM Unisex $20", "GM Unisex 1.png")[0],
  },
  {
    id: "hd-polarized",
    name: "HD Polarized",
    price: 20.0,
    category: "sunnies",
    description: "Crystal-clear HD polarized lenses for sharp, glare-free vision in bright conditions.",
    images: sI("HD Polarized $20", "HD Polarized 1.jpeg"),
    image: sI("HD Polarized $20", "HD Polarized 1.jpeg")[0],
  },
  {
    id: "jannie-style-unisex",
    name: "Jannie Style Unisex",
    price: 10.0,
    category: "sunnies",
    description: "Trendy Jannie-style unisex sunglasses in three colour variations for everyday wear.",
    images: sI("Jannie Style unisex $10", "Jannie Style unisex 1.png", "Jannie Style unisex 2.png", "Jannie Style unisex 3.png"),
    image: sI("Jannie Style unisex $10", "Jannie Style unisex 1.png")[0],
  },
  {
    id: "large-female-aviator",
    name: "Large Female Aviator",
    price: 15.0,
    category: "sunnies",
    description: "Bold oversized aviator frame designed for women who love a statement look.",
    images: sI("Large Female Aviator $15", "Large Female Aviator 1.jpeg"),
    image: sI("Large Female Aviator $15", "Large Female Aviator 1.jpeg")[0],
  },
  {
    id: "large-double-bridge-female",
    name: "Large Double Bridge Female",
    price: 20.0,
    category: "sunnies",
    description: "Chic large double bridge frames made for the fashion-forward woman.",
    images: sI("Large double bridge female $20", "Large double bridge female 1.png"),
    image: sI("Large double bridge female $20", "Large double bridge female 1.png")[0],
  },
  {
    id: "light-metal-black-polarized",
    name: "Light Metal Frame Black Polarized",
    price: 15.0,
    category: "sunnies",
    description: "Lightweight metal frame with premium black polarized lenses for effortless everyday style.",
    images: sI("Light Metal Frame Black Polarized  $15", "Light Metal Frame Black Polarized  .jpeg"),
    image: sI("Light Metal Frame Black Polarized  $15", "Light Metal Frame Black Polarized  .jpeg")[0],
  },
  {
    id: "male-oval",
    name: "Male Oval",
    price: 20.0,
    category: "sunnies",
    description: "Classic oval frames for men in three versatile colour options.",
    images: sI("Male Oval $20", "Male Oval 1.jpeg", "Male Oval 2.jpeg", "Male Oval 3.jpeg"),
    image: sI("Male Oval $20", "Male Oval 1.jpeg")[0],
  },
  {
    id: "metal-knot-small-cateye",
    name: "Metal Knot Small Cateye",
    price: 15.0,
    category: "sunnies",
    description: "Intricate metal knot detailing on a small cateye frame for a distinctive look.",
    images: sI("Metal Knot small Cateye $15", "Metal Knot small Cateye 1.png"),
    image: sI("Metal Knot small Cateye $15", "Metal Knot small Cateye 1.png")[0],
  },
  {
    id: "metal-oval-unisex",
    name: "Metal Oval Unisex",
    price: 15.0,
    category: "sunnies",
    description: "Refined metal oval frames in four colours to suit every style.",
    images: sI("Metal Oval Unisex $15", "Metal Oval Unisex 1.jpeg", "Metal Oval Unisex 2.jpeg", "Metal Oval Unisex 3.jpeg", "Metal Oval Unisex 4.jpeg"),
    image: sI("Metal Oval Unisex $15", "Metal Oval Unisex 1.jpeg")[0],
  },
  {
    id: "metal-sunglasses-unisex",
    name: "Metal Sunglasses Unisex",
    price: 15.0,
    category: "sunnies",
    description: "Versatile metal frame sunglasses built for both men and women with timeless appeal.",
    images: sI("Metal sunglasses unisex $15", "Metal sunglasses unisex 1.jpeg"),
    image: sI("Metal sunglasses unisex $15", "Metal sunglasses unisex 1.jpeg")[0],
  },
  {
    id: "octagon-frame-unisex",
    name: "Octagon Frame Unisex",
    price: 15.0,
    category: "sunnies",
    description: "Eye-catching octagon frames in four bold lens colour options.",
    images: sI("Octagon Frame Unisex $15", "Octagon Frame Unisex 1.jpeg", "Octagon Frame Unisex 2.jpeg", "Octagon Frame Unisex 3.jpeg", "Octagon Frame Unisex 4.jpeg"),
    image: sI("Octagon Frame Unisex $15", "Octagon Frame Unisex 1.jpeg")[0],
  },
  {
    id: "photochromic-ladies",
    name: "Photochromic Ladies",
    price: 15.0,
    category: "sunnies",
    description: "Sophisticated photochromic lenses for ladies — automatically adjusts from clear to tinted.",
    images: sI("Photochromic Ladies $15", "Photochromic Ladies 1.png", "Photochromic Ladies 2.png", "Photochromic Ladies 3.png", "Photochromic Ladies 4.png", "Photochromic Ladies 5.png", "Photochromic Ladies 6.png"),
    image: sI("Photochromic Ladies $15", "Photochromic Ladies 1.png")[0],
  },
  {
    id: "photochromic-unisex",
    name: "Photochromic Unisex",
    price: 15.0,
    category: "sunnies",
    description: "Unisex photochromic glasses that transition with changing light — perfect for indoor and outdoor use.",
    images: sI("Photochromic Unisex $15", "Photochromic Unisex 1.jpeg", "Photochromic Unisex 2.jpeg", "Photochromic Unisex 3.jpeg", "Photochromic Unisex 4.jpeg"),
    image: sI("Photochromic Unisex $15", "Photochromic Unisex 1.jpeg")[0],
  },
  {
    id: "photochromic-anti-blue-frameless",
    name: "Photochromic & Anti-blue Light Frameless",
    price: 20.0,
    category: "frameless",
    description: "Dual-function frameless glasses with both photochromic and anti-blue light technology.",
    images: sI("Photochromic and Anti-blue Light frameless $20", "Photochromic and Anti-blue Light frameless 1.jpeg", "Photochromic and Anti-blue Light frameless 2.jpeg"),
    image: sI("Photochromic and Anti-blue Light frameless $20", "Photochromic and Anti-blue Light frameless 1.jpeg")[0],
  },
  {
    id: "polarized-matlrxs",
    name: "Polarized MATLRXS",
    price: 20.0,
    category: "sunnies",
    description: "MATLRXS premium polarized sunglasses for a sharp, modern look.",
    images: sI("Polarized MATLRXS $20", "Polarized MATLRXS 1.jpeg"),
    image: sI("Polarized MATLRXS $20", "Polarized MATLRXS 1.jpeg")[0],
  },
  {
    id: "polarized-double-bridge",
    name: "Polarized Double Bridge",
    price: 20.0,
    category: "sunnies",
    description: "Sleek double bridge design with polarized lenses for enhanced clarity and style.",
    images: sI("Polarized double bridge $20", "Polarized double bridge 1.png"),
    image: sI("Polarized double bridge $20", "Polarized double bridge 1.png")[0],
  },
  {
    id: "polarized-outdoor-glasses",
    name: "Polarized Outdoor Glasses",
    price: 40.0,
    category: "sunnies",
    description: "Heavy-duty polarized outdoor glasses built for maximum glare reduction in bright conditions.",
    images: sI("Polarized outdoor glasses $40", "Polarized outdoor glasses 2.png", "Polarized outdoor glasses 3.png"),
    image: sI("Polarized outdoor glasses $40", "Polarized outdoor glasses 2.png")[0],
  },
  {
    id: "regular-square-frame-unisex",
    name: "Regular Square Frame Unisex",
    price: 10.0,
    category: "sunnies",
    description: "Clean, everyday square frames for a classic no-fuss look.",
    images: sI("Regular Square Frame Unisex $10", "Regular Square Frame Unisex 1.png"),
    image: sI("Regular Square Frame Unisex $10", "Regular Square Frame Unisex 1.png")[0],
  },
  {
    id: "retro-thick-double-bridge",
    name: "Retro Thick Double Bridge",
    price: 20.0,
    category: "sunnies",
    description: "Chunky retro double-bridge frames with bold personality and quality polarized lenses.",
    images: sI("Retro Thick Double Bridge $20", "Retro Thick Double Bridge 1.png", "Retro Thick Double Bridge 2.png"),
    image: sI("Retro Thick Double Bridge $20", "Retro Thick Double Bridge 1.png")[0],
  },
  {
    id: "retro-square-unisex",
    name: "Retro Square Unisex",
    price: 10.0,
    category: "sunnies",
    description: "Affordable retro square unisex frames with clean lines and dark lenses.",
    images: sI("Retro square Unisex $10", "Retro square Unisex 1.jpeg"),
    image: sI("Retro square Unisex $10", "Retro square Unisex 1.jpeg")[0],
  },
  {
    id: "retro-unisex",
    name: "Retro Unisex",
    price: 20.0,
    category: "sunnies",
    description: "Timeless retro unisex frames available in three colour variations.",
    images: sI("Retro unisex $20", "Retro unisex 1.jpeg", "Retro unisex 2.jpeg", "Retro unisex 3.jpeg"),
    image: sI("Retro unisex $20", "Retro unisex 1.jpeg")[0],
  },
  {
    id: "round-frame-unisex",
    name: "Round Frame Unisex",
    price: 15.0,
    category: "sunnies",
    description: "Classic round frames in two versatile options for a timeless finish.",
    images: sI("Round Frame Unisex $15", "Round Frame Unisex 1.png", "Round Frame Unisex 2.png"),
    image: sI("Round Frame Unisex $15", "Round Frame Unisex 1.png")[0],
  },
  {
    id: "small-oval-metal",
    name: "Small Oval Metal",
    price: 20.0,
    category: "sunnies",
    description: "Compact oval metal frames for a refined, understated look.",
    images: sI("Small Oval Metal $20", "Small Oval Metal 1.jpeg"),
    image: sI("Small Oval Metal $20", "Small Oval Metal 1.jpeg")[0],
  },
  {
    id: "sports-driving-glasses",
    name: "Sports & Driving Glasses",
    price: 15.0,
    category: "sunnies",
    description: "Purpose-built sports and driving glasses with enhanced contrast lenses for active use.",
    images: sI("Sports and Driving Glasses $15", "Sports and Driving Glasses 1.jpeg"),
    image: sI("Sports and Driving Glasses $15", "Sports and Driving Glasses 1.jpeg")[0],
  },
  {
    id: "square-large-frame",
    name: "Square Large Frame",
    price: 15.0,
    category: "sunnies",
    description: "Large square frames with bold presence and quality polarized lenses.",
    images: sI("Square Large Frame $15", "Square Large Frame 1.png"),
    image: sI("Square Large Frame $15", "Square Large Frame 1.png")[0],
  },
  {
    id: "titanium-anti-blue-light",
    name: "Titanium Anti-blue Light",
    price: 20.0,
    category: "blue-light",
    description: "Premium titanium frames with anti-blue light lenses — lightweight yet incredibly durable.",
    images: sI("Titanium Anti-blue Light $20", "Titanium Anti-blue Light 1.png", "Titanium Anti-blue Light 2.png"),
    image: sI("Titanium Anti-blue Light $20", "Titanium Anti-blue Light 1.png")[0],
  },
  {
    id: "women-polarized",
    name: "Women Polarized",
    price: 15.0,
    category: "sunnies",
    description: "Elegant women's polarized sunglasses in two stylish variations.",
    images: sI("Women Polarized $15", "Women Polarized 1.jpeg", "Women Polarized 2.jpeg"),
    image: sI("Women Polarized $15", "Women Polarized 1.jpeg")[0],
  },
  {
    id: "womens-oval-shape",
    name: "Women's Oval Shape",
    price: 10.0,
    category: "sunnies",
    description: "Feminine oval frames in five colour options for a soft, polished look.",
    images: sI("Women's Oval Shape $10", "Women's Oval Shape 1.jpeg", "Women's Oval Shape 2.jpeg", "Women's Oval Shape 3.jpeg", "Women's Oval Shape 4.jpeg", "Women's Oval Shape 5.jpeg"),
    image: sI("Women's Oval Shape $10", "Women's Oval Shape 1.jpeg")[0],
  },
  {
    id: "yk-style-unisex",
    name: "YK Style Unisex",
    price: 10.0,
    category: "sunnies",
    description: "Y2K-inspired unisex frames with a modern twist — available in two looks.",
    images: sI("Yk style unisex $10", "Yk style unisex 1.png", "Yk style unisex 2.png"),
    image: sI("Yk style unisex $10", "Yk style unisex 1.png")[0],
  },
];

export const sunniesProducts: Product[] = rawSunnies.map((item, index) => ({
  id: (item as { id?: string }).id || `sun-${index + 1}`,
  name: item.name,
  price: item.price,
  image: item.image || GENERIC_SUNNIES_PLACEHOLDER,
  images: item.images || [item.image || GENERIC_SUNNIES_PLACEHOLDER],
  description:
    (item as { description?: string }).description ||
    "Premium eye protection meets cutting-edge style. Designed to make a statement.",
  variations:
    (item as { variations?: { name: string; imageIndex?: number }[] }).variations || [],
  frameVariations:
    (item as { frameVariations?: FrameVariation[] }).frameVariations || [],
  category: (item as { category?: string }).category || "sunnies",
  tags: (item as { tags?: string[] }).tags || [],
  inStock: true,
}));

export const tinyTreasuresProducts: Product[] = [
  // ── Existing CDN products ──────────────────────────────────────────────────
  {
    id: "tt-1",
    name: "Hannah Martin",
    price: 40.0,
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9ded0a21ec91b483a19f3f9add492737.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9ded0a21ec91b483a19f3f9add492737.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c5ff194e53be0aaa50756c0562d56056.jpg",
    ],
    description: "Elegant and timeless timepiece for any occasion.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-2",
    name: "Heiheipi Ladies Watch",
    price: 30.0,
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7090e660ecf343b82529a290fe4d16a1.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7090e660ecf343b82529a290fe4d16a1.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9d81ee50d3662e8ef04fba8913c3faa3.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5192524f942840880cc43afe77d3c75b.jpg",
    ],
    description: "Chic design crafted for the modern woman.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-3",
    name: "SKMEI Men's Watch",
    price: 60.0,
    image:
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f1bf4b3d0d74df4124408fe08d21cb56.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f1bf4b3d0d74df4124408fe08d21cb56.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e90f92efdf20740775eb433eb5fa2afc.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c084413d80337c233ad6653c32e6109f.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/016ebf2455720512d2683e4cddbd3e12.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/3c45baeedf4bd6710b9ab71486f3a9a2.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4c5c7e46dc4a9619e27440da80a57d39.jpg",
    ],
    description: "Bold aesthetics meeting precision engineering.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  // ── New products from public/tiny treasures/ ───────────────────────────────
  {
    id: "tt-best-mom-necklace",
    name: "Best Mom Ever Booklet Necklace",
    price: 20.0,
    images: ttI("Best mom ever booklet necklace $20", "Best mom ever booklet necklace.png"),
    image: ttI("Best mom ever booklet necklace $20", "Best mom ever booklet necklace.png")[0],
    description: "A heartfelt booklet necklace — the perfect gift for the best mom ever.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-casio-watch",
    name: "Casio Watch",
    price: 30.0,
    images: ttI("Casio Watch $30", "Casio Watch.png", "Casio Watch 2.png"),
    image: ttI("Casio Watch $30", "Casio Watch.png")[0],
    description: "Iconic Casio watch — reliable, durable, and timeless.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-eyeglasses-holder",
    name: "Eyeglasses Holder",
    price: 5.0,
    images: ttI("Eyeglasses holder $5", "Eyeglasses holder 1.jpeg", "Eyeglasses holder 2.jpeg", "Eyeglasses holder 3.jpeg"),
    image: ttI("Eyeglasses holder $5", "Eyeglasses holder 1.jpeg")[0],
    description: "Practical eyeglasses holder — keeps your frames safe and accessible.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-female-watch-strap",
    name: "Female Watch Strap Bracelet",
    price: 10.0,
    images: ttI("Female Watch strap bracelet $10", "female watch strap bracelet.png"),
    image: ttI("Female Watch strap bracelet $10", "female watch strap bracelet.png")[0],
    description: "Elegant ladies watch strap bracelet — wear as a watch band or standalone accessory.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-glasses-leather-case",
    name: "Glasses Leather Case",
    price: 5.0,
    images: ttI("Glasses leather case $5", "Glasses leather case 1.jpeg", "Glasses leather case 2.jpeg", "Multi-colored leather case 1.jpeg"),
    image: ttI("Glasses leather case $5", "Glasses leather case 1.jpeg")[0],
    description: "Premium leather glasses case in multiple colour options to protect your eyewear.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-gold-stainless-earrings",
    name: "Gold Stainless Steel Earrings",
    price: 5.0,
    images: ttI("Gold  stainless steel earrings $5", "Gold stainless steel earrings.png", "Gold stainless steel earrings 2.png", "Gold stainless steel earrings 3.png", "Gold stainless steel earrings 4.png"),
    image: ttI("Gold  stainless steel earrings $5", "Gold stainless steel earrings.png")[0],
    description: "Non-tarnish gold stainless steel earrings in four elegant styles.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-handcrafted-teardrops",
    name: "Handcrafted Teardrops Earrings",
    price: 10.0,
    images: ttI("Handcrafted teardrops earrings $10", "Handcrafted teardrops earrings .png"),
    image: ttI("Handcrafted teardrops earrings $10", "Handcrafted teardrops earrings .png")[0],
    description: "Beautiful handcrafted teardrop earrings — each pair uniquely made.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-ieke-watch",
    name: "IEKE Watch",
    price: 40.0,
    images: ttI("IEKE Watch $40", "IEKE Watch 1.jpeg", "IEKE Watch 2.jpeg"),
    image: ttI("IEKE Watch $40", "IEKE Watch 1.jpeg")[0],
    description: "Premium IEKE timepiece combining modern design with reliable mechanics.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-leather-case",
    name: "Leather Case",
    price: 10.0,
    images: ttI("Leather Case $10", "Leather Case .jpeg"),
    image: ttI("Leather Case $10", "Leather Case .jpeg")[0],
    description: "Quality leather case for sunglasses or glasses — sleek and protective.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-love-cards",
    name: "Love Cards",
    price: 5.0,
    images: ttI("Love Cards $5", "love card 1.png", "Love Cards 2.jpeg", "love card 3.jpeg", "love card 4.jpeg", "love card 5.jpeg", "love card 6.jpeg"),
    image: ttI("Love Cards $5", "love card 1.png")[0],
    description: "Sweet love cards — perfect for gifting on any special occasion.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-mens-watch-strap",
    name: "Men's Watch Strap Bracelet",
    price: 20.0,
    images: ttI("Men's Watch strap bracelet $20", "watch strap bracelet .png", "watch strap bracelet 1.png", "watch strap bracelet 2.png"),
    image: ttI("Men's Watch strap bracelet $20", "watch strap bracelet .png")[0],
    description: "Bold men's watch strap bracelet — three colour variations to match any outfit.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-mens-silver-neck-chains",
    name: "Men's Silver Stainless Steel Neck Chains",
    price: 20.0,
    images: ttI("Men's Silver stainless steel neck chains $20", "Men's stainless steel neck chains.png", "Men's stainless steel neck chains 2.png"),
    image: ttI("Men's Silver stainless steel neck chains $20", "Men's stainless steel neck chains.png")[0],
    description: "Non-tarnish silver stainless steel neck chains built for the modern man.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-mens-stainless-bracelet",
    name: "Men's Stainless Steel Bracelet",
    price: 15.0,
    images: ttI("Men's stainless steel bracelet $15", "Men's stainless steel bracelet 1.png", "Men's stainless steel bracelet 2.png"),
    image: ttI("Men's stainless steel bracelet $15", "Men's stainless steel bracelet 1.png")[0],
    description: "Masculine stainless steel bracelet — strong, stylish, and non-tarnish.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-mens-stainless-neck-pieces",
    name: "Men's Stainless Steel Neck Pieces",
    price: 20.0,
    images: ttI("Men's stainless steel neck pieces $20", "Men's stainless steel neck piece 1.png", "Men's stainless steel neck piece 2.png", "Men's stainless steel neck piece 3.png", "Men's stainless steel neck piece 4.png"),
    image: ttI("Men's stainless steel neck pieces $20", "Men's stainless steel neck piece 1.png")[0],
    description: "Premium men's stainless steel neck pieces in four bold designs.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-necklace",
    name: "Necklace",
    price: 15.0,
    images: ttI("Necklace $15", "necklace.png"),
    image: ttI("Necklace $15", "necklace.png")[0],
    description: "Elegant necklace — a versatile piece for any style.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-portable-large-case",
    name: "Portable Large Case",
    price: 10.0,
    images: ttI("Portable large case $10", "Portable large case .jpeg"),
    image: ttI("Portable large case $10", "Portable large case .jpeg")[0],
    description: "Spacious portable case — keeps multiple pairs of glasses safe on the go.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-retro-handmade-bracelet",
    name: "Retro Handmade Bracelet",
    price: 10.0,
    images: ttI("Retro handmade bracelet $10", "Retro handmade bracelet 1.png", "Retro handmade bracelet 2.png", "Retro handmade bracelet 3.png", "Retro handmade bracelet 4.png"),
    image: ttI("Retro handmade bracelet $10", "Retro handmade bracelet 1.png")[0],
    description: "Artisan handmade retro bracelets — each piece tells a unique story.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-rings",
    name: "Rings",
    price: 5.0,
    images: ttI("Rings $5", "rings.png"),
    image: ttI("Rings $5", "rings.png")[0],
    description: "Affordable rings — a simple accessory to elevate any look.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-soft-leather-wallets",
    name: "Soft Leather Wallets",
    price: 10.0,
    images: ttI("Soft leather wallets $10", "Soft leather wallet 1.png", "Soft leather wallet 2.png"),
    image: ttI("Soft leather wallets $10", "Soft leather wallet 1.png")[0],
    description: "Supple soft leather wallets in two classic styles.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-stainless-nontarnish-necklace",
    name: "Stainless Steel Non-Tarnish Necklace",
    price: 10.0,
    images: ttI("Stainless steel non tarnish necklace $10", "Stainless steel non tarnish necklace.png", "Stainless steel non tarnish necklace 2.png", "Stainless steel non tarnish necklace 3.png", "stainless steel necklace 4.png", "stainless steel necklace.png", "silver necklace.png"),
    image: ttI("Stainless steel non tarnish necklace $10", "Stainless steel non tarnish necklace.png")[0],
    description: "Non-tarnish stainless steel necklaces in six beautiful variations.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-titanium-anklets-ring",
    name: "Titanium Gold Non-Tarnish Anklets & Ring",
    price: 10.0,
    images: ttI("Titanium Gold stainless steel non tarnish anklets & Ring $10", "Titanium Gold stainless steel non tarnish anklets & Ring.png"),
    image: ttI("Titanium Gold stainless steel non tarnish anklets & Ring $10", "Titanium Gold stainless steel non tarnish anklets & Ring.png")[0],
    description: "Non-tarnish titanium gold anklets and ring set — durable, water-resistant beauty.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-womens-chunky-bracelet",
    name: "Women's Chunky Bracelet",
    price: 10.0,
    images: ttI("Women's chunky bracelet $10", "Women's chunky bracelet.png"),
    image: ttI("Women's chunky bracelet $10", "Women's chunky bracelet.png")[0],
    description: "Bold chunky bracelet for women who love statement jewellery.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-anklets",
    name: "Anklets",
    price: 10.0,
    images: ttI("ancklets $10", "anklets.png"),
    image: ttI("ancklets $10", "anklets.png")[0],
    description: "Delicate anklets — add a touch of charm to any outfit.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-ear-candy",
    name: "Ear Candy",
    price: 5.0,
    images: ttI("ear candy $5", "ear candy.png", "ear candy 2.png", "ear candy 3.png", "ear candy 4.png", "ear candy 5.png"),
    image: ttI("ear candy $5", "ear candy.png")[0],
    description: "Fun and playful ear candy earrings in five delightful styles.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-gold-jewelry-set",
    name: "Gold Jewelry Set",
    price: 15.0,
    images: ttI("gold jewelry set $15", "gold jewelry set 1.png", "gold jewelry set 2.png", "gold jewelry set 3.png", "gold jewelry set 4.png"),
    image: ttI("gold jewelry set $15", "gold jewelry set 1.png")[0],
    description: "Coordinated gold jewelry set — necklace, earrings, and bracelet in four curated styles.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-gold-water-drop-bracelet",
    name: "Gold Water Drop Bracelet",
    price: 10.0,
    images: ttI("gold water drop bracelet $10", "gold water drop bracelet .png"),
    image: ttI("gold water drop bracelet $10", "gold water drop bracelet .png")[0],
    description: "Delicate gold water drop bracelet — elegant minimalism for the wrist.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-male-stainless-pieces",
    name: "Male Stainless Steel Pieces",
    price: 20.0,
    images: ttI("male  stainless steel pieces   $20", "male  stainless steel piece 1.png", "male  stainless steel piece 2.png", "male  stainless steel piece 3.png", "male  stainless steel piece 4.png", "male  stainless steel piece 5.png", "male  stainless steel piece 6.png"),
    image: ttI("male  stainless steel pieces   $20", "male  stainless steel piece 1.png")[0],
    description: "Six bold stainless steel pieces for men — chains, bracelets, and more.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-mom-child-necklace",
    name: "Mom and Child Necklace",
    price: 20.0,
    images: ttI("mom and child necklace $20", "mom and child necklace.png"),
    image: ttI("mom and child necklace $20", "mom and child necklace.png")[0],
    description: "A touching mom and child necklace — the perfect sentimental gift.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-silver-earrings",
    name: "Silver Earrings",
    price: 5.0,
    images: ttI("silver earrings  $5", "silver earrings.png", "silver earrings 1.png", "silver earrings 2.png", "silver earrings 3.png"),
    image: ttI("silver earrings  $5", "silver earrings.png")[0],
    description: "Affordable silver earrings in four classic styles for everyday wear.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
  {
    id: "tt-stainless-bracelets",
    name: "Stainless Steel Bracelets",
    price: 10.0,
    images: ttI("stainless steel bracelets $10", "stainless steel bracelets 1.png", "stainless steel bracelets 2.png"),
    image: ttI("stainless steel bracelets $10", "stainless steel bracelets 1.png")[0],
    description: "Durable stainless steel bracelets in two polished finishes.",
    category: "tiny-treasures",
    variations: [],
    frameVariations: [],
    tags: [],
    inStock: true,
  },
];

export const getAllProducts = (): Product[] => [
  ...sunniesProducts,
  ...tinyTreasuresProducts,
];
export const getProductById = (id: string): Product | undefined =>
  getAllProducts().find((p) => p.id === id);
