import type { MetadataRoute } from "next";
import { pages } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lambdaeta.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();
  return [
    { url: siteUrl, lastModified: updatedAt, changeFrequency: "monthly", priority: 1 },
    ...Object.keys(pages).map((slug) => ({
      url: `${siteUrl}/${slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: slug === "servicios" || slug === "contacto" ? 0.9 : 0.7,
    })),
  ];
}
