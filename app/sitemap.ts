import type { MetadataRoute } from "next";
import { PAGE_UPDATED, PUBLIC_PATHS, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_PATHS.map((p) => ({
    url: p === "/" ? SITE_URL : `${SITE_URL}${p}`,
    lastModified: PAGE_UPDATED[p],
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : 0.3,
  }));
}
