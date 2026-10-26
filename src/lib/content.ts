export const siteConfig = {
  name: "VeRaFIED Studios",
  shortName: "VeRaFIED",
  tagline: "Creation with Care",
  motto: "Love Always. Hate Never.",
  description:
    "VeRaFIED Studios is a Florida-born creative and technology studio building music, telehealth, native apps, and Vera AI — intelligence with intention.",
  url: "https://verafied-studios.vercel.app",
  location: "Florida, United States",
  founded: "2021",
  founders: "Luis “Ramey” & Tiffaney “Venus” Latorre",
  email: "hello@verafied.studio",
  paymentEmail: "Tiffaneylatorre@gmail.com",
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@verafiedmusic", handle: "@verafiedmusic" },
    { label: "TikTok", href: "https://www.tiktok.com/@verafied", handle: "@verafied" },
    { label: "Facebook", href: "https://www.facebook.com/VeRaFIEDmusic", handle: "VeRaFIED Music" },
    { label: "Instagram", href: "https://instagram.com/verafied", handle: "@verafied" },
    { label: "Spotify", href: "https://open.spotify.com", handle: "VeRaFIED" },
    { label: "SoundCloud", href: "https://soundcloud.com/verafied", handle: "VeRaFIED" },
    { label: "Discord", href: "https://discord.gg/verafied", handle: "Community Server" },
  ],
} as const;

export const navLinks = [
  { label: "Studio", href: "#studio" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Vera AI", href: "#vera" },
  { label: "Music", href: "#music" },
  { label: "Merch", href: "#merch" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroStats = [
  { value: "12+", label: "Products shipped", detail: "Native, web, and wearable" },
  { value: "4", label: "Platforms", detail: "iOS, Android, Web, PWA" },
  { value: "2021", label: "Founded", detail: "Florida" },
  { value: "100%", label: "In-house", detail: "Designed & engineered by us" },
] as const;

export const merch = [
  {
    id: "tee",
    name: "VeRaFIED Mascot Tee",
    price: "$34",
    amount: 3400,
    copy: "Heavyweight cotton with the VeRaFIED fire-mascot print. Limited drops.",
    accent: "#FF7A45",
    image: "/images/logo-mascot.png",
    product: "dark",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "cap",
    name: "Studio Cap",
    price: "$28",
    amount: 2800,
    copy: "Florida home base. “Love Always. Hate Never.” stitched on the back.",
    accent: "#7C5CFF",
    image: "/images/logo-mascot.png",
    product: "cap",
    sizes: ["One size"],
  },
  {
    id: "hoodie",
    name: "Fire Chameleon Hoodie",
    price: "$68",
    amount: 6800,
    copy: "Heavyweight hoodie with the full fire-emblem back print. Built for Florida nights.",
    accent: "#2DD4BF",
    image: "/images/logo-fire-emblem.png",
    product: "dark",
    sizes: ["S", "M", "L", "XL"],
  },
] as const;

export const veraCapabilities = [
  {
    title: "Knows the ecosystem",
    copy: "Ask about ExoVet, music releases, or merch — Vera knows what we built.",
  },
  {
    title: "Answers instantly",
    copy: "Live assistant with no ticket queues.",
  },
  {
    title: "Always in character",
    copy: "Positive, continuous, and part of the ecosystem.",
  },
  {
    title: "Respects your data",
    copy: "Private conversations. Nothing sold, nothing shared.",
  },
] as const;
