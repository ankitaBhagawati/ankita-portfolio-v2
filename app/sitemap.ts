import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

// ponytail: single-page site, one entry. Add pages here when they exist.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
