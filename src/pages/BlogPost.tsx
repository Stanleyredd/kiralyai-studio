import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPost } from "@/lib/blogs";
import type { BlogPost as BlogPostType } from "@/types/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    getBlogPost(slug)
      .then((data) => {
        setPost(data);
        document.title = data.seoTitle || `${data.title} | KiralyAI`;
      })
      .catch((error) => {
        console.error("Fout bij laden van blogpost:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container-tight max-w-3xl">
            {loading ? (
              <p className="text-muted-foreground">Artikel laden...</p>
            ) : !post ? (
              <p className="text-muted-foreground">Artikel niet gevonden.</p>
            ) : (
              <>
                <Link to="/blog" className="text-sm text-primary hover:underline">
                  ← Terug naar blog
                </Link>

                <div className="mt-6 text-sm text-muted-foreground">
                  {post.category ? `${post.category} · ` : ""}
                  {new Date(post.publishedAt).toLocaleDateString("nl-NL")}
                </div>

                <h1 className="mt-4 text-4xl font-bold leading-tight">
                  {post.title}
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                  {post.excerpt}
                </p>

                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="mt-8 w-full rounded-2xl object-cover"
                  />
                )}

                <article className="mt-10 space-y-6">
                  {post.content.map((block, index) => {
                    if (block.type === "paragraph") {
                      return (
                        <p key={index} className="text-base leading-8 text-foreground/90">
                          {block.text}
                        </p>
                      );
                    }

                    if (block.type === "heading") {
                      const Tag = block.level === 2 ? "h2" : "h3";
                      return (
                        <Tag key={index} className="pt-4 text-2xl font-semibold">
                          {block.text}
                        </Tag>
                      );
                    }

                    if (block.type === "list") {
                      return (
                        <ul key={index} className="list-disc space-y-2 pl-6 text-base leading-8">
                          {block.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </article>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
