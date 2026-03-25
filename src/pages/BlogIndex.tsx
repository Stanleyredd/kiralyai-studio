import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { getBlogIndex } from "@/lib/blogs";
import type { BlogSummary } from "@/types/blog";

const BlogIndex = () => {
  const [posts, setPosts] = useState<BlogSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog | KiralyAI";

    getBlogIndex()
      .then((data) => {
        const sortedPosts = [...data].sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );

        setPosts(sortedPosts);
      })
      .catch((error) => {
        console.error("Fout bij laden van blog index:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="pt-32 pb-16 px-6">
          <div className="container-tight">
            <SectionHeading
              label="Blog"
              title="Insights, automation en SEO-content"
              description="Praktische blogs over AI automation, websites, workflows en digitale groei."
            />
          </div>
        </section>

        <section className="pb-24 px-6">
          <div className="container-tight">
            {loading ? (
              <p className="text-muted-foreground">Blogs laden...</p>
            ) : posts.length === 0 ? (
              <p className="text-muted-foreground">Er zijn nog geen blogs beschikbaar.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
