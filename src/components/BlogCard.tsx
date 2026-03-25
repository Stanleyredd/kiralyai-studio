import { Link } from "react-router-dom";
import type { BlogSummary } from "@/types/blog";

type BlogCardProps = {
  post: BlogSummary;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-md">
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-6">
        <div className="mb-3 text-xs text-muted-foreground">
          {post.category ? `${post.category} · ` : ""}
          {new Date(post.publishedAt).toLocaleDateString("nl-NL")}
        </div>

        <h2 className="text-xl font-semibold leading-tight">
          <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-flex text-sm font-medium text-primary hover:underline"
        >
          Lees artikel
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
