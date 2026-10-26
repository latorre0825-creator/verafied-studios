import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#05060a",
    theme_color: "#05060a",
    categories: ["music", "entertainment", "lifestyle", "medical"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      {
        src: "/images/app-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/app-icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
