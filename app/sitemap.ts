import posts from "content/posts";
import type { MetadataRoute } from "next";

export const baseUrl =
  (process.env.BASE_URL as string) ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  let blogs = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  let routes = ["", "/blog", "/guide", "/guide/kr"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
