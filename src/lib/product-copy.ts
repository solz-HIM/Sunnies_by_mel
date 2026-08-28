import type { Product } from "@/lib/products";
import { SITE, clampDescription, clampTitle, fitTitle } from "@/lib/seo";

/**
 * Every product page needs its own title, description and body copy — Google
 * classes near-identical pages as "Discovered – currently not indexed". Rather
 * than hand-writing 100+ variants, we derive copy from each product's real
 * attributes (lens tech, frame shape, material, audience, price) so no two
 * pages share a sentence.
 */

export interface Spec {
  label: string;
  value: string;
}

export interface ProductCopy {
  /** Human product type, e.g. "Polarized Sunglasses". */
  productType: string;
  categoryLabel: string;
  categoryPath: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  body: string[];
  highlights: string[];
  specs: Spec[];
  keywords: string[];
}

type Attr = { key: string; match: RegExp; label: string; benefit: string };

/** Lens / feature technology detected from the product name and description. */
const LENS_ATTRS: Attr[] = [
  {
    key: "polarized",
    match: /polari[sz]ed|matlrxs/i,
    label: "Polarized lenses",
    benefit:
      "Polarized lenses cut the harsh glare that bounces off tarmac, water and car bonnets, which makes them a genuine upgrade for Harare's high-altitude midday sun",
  },
  {
    key: "photochromic",
    match: /photochromic|dimming|transition/i,
    label: "Photochromic (light-adaptive) lenses",
    benefit:
      "The photochromic lenses darken automatically outdoors and clear again indoors, so one pair covers the school run, the office and the drive home",
  },
  {
    key: "blue-light",
    match: /anti[\s-]?blue|blue[\s-]?light|anti[\s-]?beam/i,
    label: "Anti-blue-light filter",
    benefit:
      "The anti-blue-light coating filters the screen glare that causes tired, itchy eyes after a long day on a laptop or phone",
  },
  {
    key: "uv",
    match: /uv400|hd polari|hd/i,
    label: "HD clarity coating",
    benefit:
      "An HD-clarity coating keeps colours true and edges sharp instead of the washed-out tint you get from cheap market lenses",
  },
  {
    key: "night",
    match: /night vision/i,
    label: "Night-driving tint",
    benefit:
      "The yellow night-driving tint lifts contrast against oncoming headlights on unlit roads",
  },
  {
    key: "magnetic",
    match: /magnetic|clip[\s-]?on/i,
    label: "Magnetic clip-on shades",
    benefit:
      "Magnetic clip-on shades snap on and off in a second, so a single frame works as both prescription-ready glasses and sunglasses",
  },
];

const SHAPE_ATTRS: Attr[] = [
  { key: "aviator", match: /aviator/i, label: "Aviator", benefit: "the aviator teardrop that flatters almost every face shape" },
  { key: "cat-eye", match: /cat[\s-]?eye/i, label: "Cat-eye", benefit: "an upswept cat-eye line that lifts the cheekbones" },
  { key: "clubmaster", match: /club\s?master/i, label: "Clubmaster", benefit: "the browline Clubmaster silhouette that reads smart-casual anywhere" },
  { key: "octagon", match: /octagon|polygon/i, label: "Octagon", benefit: "a faceted octagon frame for people who are bored of round and square" },
  { key: "oval", match: /oval/i, label: "Oval", benefit: "a soft oval outline that suits narrower faces" },
  { key: "round", match: /round/i, label: "Round", benefit: "a clean round frame with an easy retro attitude" },
  { key: "rectangle", match: /rectangle|rectangular/i, label: "Rectangle", benefit: "a slim rectangular frame that keeps things understated" },
  { key: "square", match: /square/i, label: "Square", benefit: "a strong square frame that adds structure to rounder faces" },
  { key: "frameless", match: /frameless|rimless/i, label: "Frameless", benefit: "a rimless build that all but disappears on the face" },
  { key: "half-frame", match: /half[\s-]?frame/i, label: "Half-frame", benefit: "a half-frame cut that keeps the look light" },
  { key: "double-bridge", match: /double\s?(bridge|beam)/i, label: "Double bridge", benefit: "a double-bridge detail that gives the frame its aviator-adjacent edge" },
];

const MATERIAL_ATTRS: Attr[] = [
  { key: "titanium", match: /titanium/i, label: "Titanium", benefit: "Titanium keeps the frame feather-light and resistant to bending" },
  { key: "metal", match: /metal/i, label: "Metal", benefit: "A metal frame holds its shape far better than moulded plastic" },
  { key: "wood", match: /wood/i, label: "Wood-effect", benefit: "The wood-effect finish gives each pair a slightly different grain" },
  { key: "stainless", match: /stainless|non[\s-]?tarnish/i, label: "Stainless steel", benefit: "Non-tarnish stainless steel survives sweat, showers and Harare humidity without going green" },
  { key: "leather", match: /leather/i, label: "Leather", benefit: "Soft leather that breaks in rather than cracks" },
  { key: "gold", match: /gold/i, label: "Gold-tone", benefit: "A warm gold tone that layers easily with pieces you already own" },
  { key: "silver", match: /silver/i, label: "Silver-tone", benefit: "A bright silver tone that stays cool against most skin tones" },
];

const AUDIENCE_ATTRS: Attr[] = [
  { key: "unisex", match: /unisex/i, label: "Unisex", benefit: "Sized as a unisex fit" },
  { key: "women", match: /wom[ae]n|ladies|female|lady/i, label: "Women's", benefit: "Cut for a narrower women's fit" },
  { key: "men", match: /\bmen\b|men's|male|man\b/i, label: "Men's", benefit: "Cut for a wider men's fit" },
];

const USE_ATTRS: Attr[] = [
  { key: "sport", match: /sport|driving|outdoor/i, label: "Sport & driving", benefit: "Built for driving, running and long days outdoors" },
  { key: "retro", match: /retro|vintage|y2k|yk\b|korean/i, label: "Retro", benefit: "A retro revival shape that has been everywhere on Instagram" },
];

/** Jewellery / accessory product types for the Tiny Treasures range. */
const TREASURE_TYPES: { match: RegExp; type: string; plural: string }[] = [
  { match: /watch strap|strap/i, type: "Watch Strap", plural: "watch straps" },
  { match: /watch/i, type: "Watch", plural: "watches" },
  { match: /necklace|neck chain|neck piece|chain/i, type: "Necklace", plural: "necklaces and chains" },
  { match: /bracelet/i, type: "Bracelet", plural: "bracelets" },
  { match: /anklet/i, type: "Anklet", plural: "anklets" },
  { match: /earring|ear candy|teardrop/i, type: "Earrings", plural: "earrings" },
  { match: /\bring\b|rings/i, type: "Ring", plural: "rings" },
  { match: /wallet/i, type: "Wallet", plural: "wallets" },
  { match: /case|holder|pouch/i, type: "Glasses Case", plural: "glasses cases and holders" },
  { match: /card/i, type: "Gift Card", plural: "gift cards" },
  { match: /jewel(le)?ry set|set/i, type: "Jewellery Set", plural: "jewellery sets" },
];

const findAll = (attrs: Attr[], haystack: string) => attrs.filter((a) => a.match.test(haystack));
const find = (attrs: Attr[], haystack: string) => attrs.find((a) => a.match.test(haystack));

const PRICE_BANDS: { max: number; phrase: string }[] = [
  { max: 10, phrase: "one of the best-value pairs in the shop" },
  { max: 15, phrase: "a mid-range pick that punches above its price" },
  { max: 25, phrase: "a step up in lens quality and build" },
  { max: Infinity, phrase: "one of our premium pieces" },
];

/** Deterministic pick so a product always gets the same phrasing between builds. */
function pick<T>(options: T[], seed: string): T {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return options[hash % options.length];
}

export function getProductCopy(product: Product): ProductCopy {
  const isTreasure = product.category === "tiny-treasures";
  const haystack = `${product.name} ${product.description}`;
  const price = product.price.toFixed(2);
  const variantCount = product.images?.length ?? 1;
  const frameNames = product.frameVariations?.map((f) => f.name) ?? [];
  const band = PRICE_BANDS.find((b) => product.price <= b.max)!;

  const lens = findAll(LENS_ATTRS, haystack);
  const shape = find(SHAPE_ATTRS, haystack);
  const material = find(MATERIAL_ATTRS, haystack);
  const audience = find(AUDIENCE_ATTRS, haystack);
  const use = find(USE_ATTRS, haystack);
  const treasureType = isTreasure
    ? TREASURE_TYPES.find((t) => t.match.test(haystack))
    : undefined;

  const categoryLabel = isTreasure ? "Tiny Treasures" : "Sunnies";
  const categoryPath = isTreasure ? "/tiny-treasures" : "/sunnies";

  const productType = isTreasure
    ? treasureType?.type ?? "Accessory"
    : [lens[0]?.label.replace(/ lenses| \(light-adaptive\) lenses| filter| coating| tint| clip-on shades/i, ""), shape?.label, "Sunglasses"]
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ");

  /* ---------------------------------------------------------------- title */
  const localiser = isTreasure ? "Jewellery Harare" : "Sunglasses Harare";
  const title = fitTitle([
    `${product.name} $${price} | ${localiser} | ${SITE.titleSuffix}`,
    `${product.name} $${price} | ${SITE.titleSuffix} Harare`,
    `${product.name} | ${SITE.titleSuffix} Harare`,
    `${product.name} | ${SITE.titleSuffix}`,
    `${clampTitle(product.name, 60 - SITE.titleSuffix.length - 3)} | ${SITE.titleSuffix}`,
  ]);

  /* ---------------------------------------------- meta description (150-160) */
  const descLead = isTreasure
    ? `${product.name} — $${price} from Sunnies by Mel, Belgravia Harare.`
    : `${product.name} — $${price}${lens.length ? `, ${lens[0].label.toLowerCase()}` : ""}.`;
  const descMid = isTreasure
    ? `Non-fade ${treasureType?.plural ?? "accessories"}${variantCount > 1 ? ` in ${variantCount} styles` : ""}.`
    : `${audience ? `${audience.label} fit. ` : ""}${variantCount > 1 ? `${variantCount} colourways in stock. ` : "In stock now. "}`;
  const metaDescription = clampDescription(
    `${descLead} ${descMid} Shop sunglasses & jewellery in Harare, Zimbabwe — order on WhatsApp for same-day collection or delivery.`
  );

  /* ------------------------------------------------------------------ h1 */
  const h1 = product.name;

  /* ---------------------------------------------------------------- body */
  const introOpeners = [
    `The ${product.name.toLowerCase()} is`,
    `Meet the ${product.name.toLowerCase()} —`,
    `${product.name} is`,
  ];
  const intro = isTreasure
    ? `${pick(introOpeners, product.id)} ${band.phrase} in the Tiny Treasures range at Sunnies by Mel in Belgravia, Harare. ${product.description}`
    : `${pick(introOpeners, product.id)} ${band.phrase} at Sunnies by Mel, the sunglasses and jewellery shop on East Road in Belgravia, Harare. ${product.description}`;

  const body: string[] = [];

  if (lens.length) {
    body.push(
      `${lens.map((l) => l.benefit).join(". ")}. Every pair we stock blocks UV400, so your eyes are protected whether you are stuck in Samora Machel traffic or out at Lake Chivero.`
    );
  }

  const buildBits = [shape?.benefit, material?.benefit, use?.benefit].filter(Boolean);
  if (buildBits.length) {
    body.push(
      `Design-wise you are getting ${buildBits.join(", and ")}. ${
        audience ? `${audience.benefit}, and the arms flex enough to stay comfortable all day. ` : ""
      }${frameNames.length ? `Choose from ${frameNames.length} frame finishes: ${frameNames.join(", ")}.` : ""}`.trim()
    );
  }

  if (isTreasure) {
    body.push(
      `${material ? `${material.benefit}. ` : ""}${
        variantCount > 1
          ? `There are ${variantCount} looks in this listing, so you can build a set or pick one piece as a gift.`
          : `It ships in a gift-ready pouch, which makes it an easy birthday or anniversary buy.`
      } Everything in Tiny Treasures is chosen to survive daily wear rather than sit in a drawer.`
    );
  }

  body.push(
    `At $${price} this is ${band.phrase} — and because we sell direct from the Belgravia shop there is no retail markup on top. Message us on WhatsApp to check stock, ask for more photos, or arrange delivery anywhere in Harare, Bulawayo or the rest of Zimbabwe.`
  );

  /* ---------------------------------------------------------- highlights */
  const highlights = [
    ...lens.map((l) => l.label),
    !isTreasure ? "UV400 protection" : null,
    shape ? `${shape.label} frame` : null,
    material ? `${material.label} build` : null,
    audience ? `${audience.label} fit` : null,
    variantCount > 1 ? `${variantCount} styles pictured` : null,
    "In stock in Belgravia, Harare",
    "WhatsApp ordering — no account needed",
  ].filter(Boolean) as string[];

  /* --------------------------------------------------------------- specs */
  const specs: Spec[] = [
    { label: "Product type", value: productType },
    { label: "Price", value: `$${price} USD` },
    { label: "Category", value: categoryLabel },
    ...(lens.length ? [{ label: "Lens technology", value: lens.map((l) => l.label).join(", ") }] : []),
    ...(shape ? [{ label: "Frame shape", value: shape.label }] : []),
    ...(material ? [{ label: "Material", value: material.label }] : []),
    ...(audience ? [{ label: "Suits", value: audience.label }] : []),
    ...(frameNames.length ? [{ label: "Finishes", value: frameNames.join(", ") }] : []),
    { label: "Availability", value: product.inStock ? "In stock" : "Out of stock" },
    { label: "Collect from", value: `${SITE.address.street}, ${SITE.address.suburb}, ${SITE.address.city}` },
  ];

  /* ------------------------------------------------------------ keywords */
  const keywords = [
    product.name.toLowerCase(),
    productType.toLowerCase(),
    isTreasure ? "jewellery Harare" : "sunglasses Harare",
    isTreasure ? "jewellery Zimbabwe" : "sunglasses Zimbabwe",
    ...lens.map((l) => `${l.key.replace("-", " ")} ${isTreasure ? "jewellery" : "sunglasses"} Zimbabwe`),
    shape ? `${shape.label.toLowerCase()} sunglasses Zimbabwe` : "",
    "Sunnies by Mel",
  ].filter(Boolean);

  return {
    productType,
    categoryLabel,
    categoryPath,
    title,
    metaDescription,
    h1,
    intro,
    body,
    highlights,
    specs,
    keywords,
  };
}

/**
 * Related products for internal linking. Google reached 102 product URLs but
 * indexed almost none of them; cross-linking siblings gives every page inbound
 * links from more than just the paginated category grid.
 */
export function getRelatedProducts(product: Product, pool: Product[], limit = 4): Product[] {
  const haystack = `${product.name} ${product.description}`;
  const attrs = [...findAll(LENS_ATTRS, haystack), ...findAll(SHAPE_ATTRS, haystack)].map((a) => a.key);

  const scored = pool
    .filter((p) => p.id !== product.id && p.category === product.category)
    .map((p) => {
      const other = `${p.name} ${p.description}`;
      const otherAttrs = [...findAll(LENS_ATTRS, other), ...findAll(SHAPE_ATTRS, other)].map((a) => a.key);
      const shared = attrs.filter((a) => otherAttrs.includes(a)).length;
      const priceCloseness = 1 / (1 + Math.abs(p.price - product.price));
      return { product: p, score: shared * 10 + priceCloseness };
    })
    .sort((a, b) => b.score - a.score || a.product.id.localeCompare(b.product.id));

  return scored.slice(0, limit).map((s) => s.product);
}
