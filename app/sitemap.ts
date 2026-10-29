import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { work } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url }, ...work.map((w) => ({ url: `${site.url}/work/${w.slug}` }))];
}
