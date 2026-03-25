import type { BlogPost, BlogSummary } from "@/types/blog";

export async function getBlogIndex(): Promise<BlogSummary[]> {
  const response = await fetch("/content/blogs/index.json");

  if (!response.ok) {
    throw new Error("Kon de blog index niet laden.");
  }

  return response.json();
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const response = await fetch(`/content/blogs/${slug}.json`);

  if (!response.ok) {
    throw new Error(`Kon blogpost "${slug}" niet laden.`);
  }

  return response.json();
}
