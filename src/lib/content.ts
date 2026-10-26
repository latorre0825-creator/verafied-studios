export const siteConfig = {
  name: "VeRaFIED Studios",
  shortName: "VeRaFIED",
  tagline: "Creation with Care",
  motto: "Love Always. Hate Never.",
  description:
    "VeRaFIED Studios is a Florida-born creative and technology studio building music, telehealth, native apps, and Vera AI — intelligence with intention.",
  url: "https://verafied-studios-live.netlify.app",
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

export const foundersBio = {
  heading: "Ramey & Venus",
  names: "Luis “Ramey” & Tiffaney “Venus” Latorre",
  photo: "/images/founders.jpg",
  paragraphs: [
    "We build what we believe in. Music that carries truth. Apps that help people and animals. Technology with heart.",
    "Luis “Ramey” handles the engineering and the sound; Tiffaney “Venus” leads product and care, and owns ExoVet. Chameleons are family. Florida is home.",
    "From Florida to the world — Love Always. Hate Never.",
  ],
  tags: ["Music", "Creation", "Care", "Chameleons", "Florida"],
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

export const faqs = [
  {
    q: "What is Vera AI?",
    a: "Vera AI is our own chat assistant — intelligence with intention. It lives on this site and inside our apps.",
  },
  {
    q: "Is ExoVet available for my exotic pet?",
    a: "ExoVet supports reptiles, amphibians, birds, and small mammals.",
  },
] as const;
