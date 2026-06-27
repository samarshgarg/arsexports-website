export type Category = "decor" | "religious" | "gift";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: Category;
  tag?: "Best Seller" | "New" | "Exclusive" | "Premium";
}

// Picsum seeds are deterministic — same seed always returns the same image
const img = (seed: string, w = 600, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const products: Product[] = [
  // ── DECOR ───────────────────────────────────────────────────────────────
  {
    id: "dec-001",
    name: "Heritage Brass Vase",
    description:
      "Majestic hand-turned vase with traditional floral engravings. A timeless centrepiece for modern interiors.",
    image: img("ars-vase-01"),
    category: "decor",
    tag: "Best Seller",
  },
  {
    id: "dec-002",
    name: "Royale Horse Sculpture",
    description:
      "Bold rearing-horse figurine cast in solid brass with satin finish. Ideal for executive desks and display shelves.",
    image: img("ars-horse-02"),
    category: "decor",
    tag: "Exclusive",
  },
  {
    id: "dec-003",
    name: "Antique Candle Stand",
    description:
      "Three-pillar candelabra with ornate scroll carvings. Available in antique and polished finishes.",
    image: img("ars-candle-03"),
    category: "decor",
    tag: "Premium",
  },
  {
    id: "dec-004",
    name: "Engraved Wall Panel",
    description:
      "Large decorative brass panel featuring hand-etched geometric mandala patterns. Statement wall art.",
    image: img("ars-wall-04"),
    category: "decor",
    tag: "Exclusive",
  },
  {
    id: "dec-005",
    name: "Prosperity Tortoise",
    description:
      "Symbol of longevity and wealth, crafted in solid brass with high-detail shell texture.",
    image: img("ars-tortoise-05"),
    category: "decor",
    tag: "Best Seller",
  },
  {
    id: "dec-006",
    name: "Veined Leaf Bowl",
    description:
      "Nature-inspired decorative bowl with realistic vein texture. Perfect for potpourri or as a display piece.",
    image: img("ars-leaf-06"),
    category: "decor",
  },
  {
    id: "dec-007",
    name: "Elephant Bookend Pair",
    description:
      "Intricately detailed elephant bookends in antique brass. A royal addition to any library.",
    image: img("ars-elephant-07"),
    category: "decor",
    tag: "New",
  },
  {
    id: "dec-008",
    name: "Peacock Showpiece",
    description:
      "Elegant peacock with spread-tail feathers, each quill individually crafted for lifelike detail.",
    image: img("ars-peacock-08"),
    category: "decor",
    tag: "Exclusive",
  },

  // ── RELIGIOUS ────────────────────────────────────────────────────────────
  {
    id: "rel-001",
    name: "Deepak Diya Set (Set of 5)",
    description:
      "Hand-engraved oil lamps with scalloped borders, perfect for pooja rooms and ceremonial occasions.",
    image: img("ars-diya-01"),
    category: "religious",
    tag: "Best Seller",
  },
  {
    id: "rel-002",
    name: "Standing Goddess Lakshmi",
    description:
      "12-inch idol of Goddess Lakshmi in gold-tone brass finish with fine drapery detailing.",
    image: img("ars-lakshmi-02"),
    category: "religious",
    tag: "Premium",
  },
  {
    id: "rel-003",
    name: "Meditating Ganesha",
    description:
      "Seated Ganesha in meditation pose. Smooth polished brass with subtle antique highlights.",
    image: img("ars-ganesh-03"),
    category: "religious",
    tag: "Best Seller",
  },
  {
    id: "rel-004",
    name: "Sacred Nandi Figurine",
    description:
      "Holy bull Nandi in a contemplative seated pose, satin-finish brass on wooden base.",
    image: img("ars-nandi-04"),
    category: "religious",
  },
  {
    id: "rel-005",
    name: "Ornate Puja Thali Set",
    description:
      "Complete set: engraved thali with attached diya, ghanta, kumkum holder, and incense stand.",
    image: img("ars-thali-05"),
    category: "religious",
    tag: "Exclusive",
  },
  {
    id: "rel-006",
    name: "Temple Ghanta Bell",
    description:
      "Deep-resonance temple bell with traditional motif engravings. Produces a clear, long-sustain tone.",
    image: img("ars-bell-06"),
    category: "religious",
    tag: "Premium",
  },

  // ── GIFT ─────────────────────────────────────────────────────────────────
  {
    id: "gift-001",
    name: "Premium Keepsake Box",
    description:
      "Hinged brass box with velvet interior lining and engraved lattice lid. Perfect for jewellery or mementos.",
    image: img("ars-box-01"),
    category: "gift",
    tag: "Best Seller",
  },
  {
    id: "gift-002",
    name: "Ornate Photo Frame",
    description:
      "4×6 inch frame with hand-embossed floral border in warm brass. A cherished personal gift.",
    image: img("ars-frame-02"),
    category: "gift",
    tag: "New",
  },
  {
    id: "gift-003",
    name: "Jewellery Organiser Tree",
    description:
      "Elegant 12-branch brass tree for rings, bracelets, and necklaces. Functional art for any dressing table.",
    image: img("ars-tree-03"),
    category: "gift",
    tag: "Exclusive",
  },
  {
    id: "gift-004",
    name: "Engraved Bookmark Set (×3)",
    description:
      "Three uniquely patterned brass bookmarks with hand-knotted silk tassels. A literary luxury gift.",
    image: img("ars-bookmark-04"),
    category: "gift",
  },
  {
    id: "gift-005",
    name: "Art Deco Card Holder",
    description:
      "Sleek executive business-card holder with Art Deco chevron motif. A conversation starter on any desk.",
    image: img("ars-card-05"),
    category: "gift",
    tag: "Premium",
  },
  {
    id: "gift-006",
    name: "Executive Compass & Pen Set",
    description:
      "Solid brass compass with matching ballpoint pen in a premium gift box. Ideal for corporate gifting.",
    image: img("ars-compass-06"),
    category: "gift",
    tag: "Exclusive",
  },
];

export const categories = [
  {
    id: "decor" as Category,
    label: "Home Decor",
    description:
      "Sculptural brass pieces that elevate every interior — from minimalist modern to classical heritage.",
    image: img("ars-cat-decor", 800, 560),
    count: products.filter((p) => p.category === "decor").length,
  },
  {
    id: "religious" as Category,
    label: "Religious & Spiritual",
    description:
      "Sacred idols, diyas, and pooja sets crafted with devotion and meticulous attention to detail.",
    image: img("ars-cat-religious", 800, 560),
    count: products.filter((p) => p.category === "religious").length,
  },
  {
    id: "gift" as Category,
    label: "Premium Gift Items",
    description:
      "Curated brass gifts for corporate, personal, and festive occasions that leave a lasting impression.",
    image: img("ars-cat-gift", 800, 560),
    count: products.filter((p) => p.category === "gift").length,
  },
];
