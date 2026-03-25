import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { Instagram } from "lucide-react";

const placeholderPosts = [
  { id: 1, color: "from-primary/20 to-primary/5" },
  { id: 2, color: "from-secondary to-muted" },
  { id: 3, color: "from-primary/10 to-secondary" },
  { id: 4, color: "from-muted to-primary/10" },
  { id: 5, color: "from-secondary to-primary/5" },
  { id: 6, color: "from-primary/5 to-muted" },
];

const InstagramFeed = () => (
  <section className="section-padding bg-surface">
    <div className="container-tight">
      <SectionHeading
        label="Instagram"
        title="Follow Us"
        description="Stay up to date with our latest projects and insights."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {placeholderPosts.map((post, i) => (
          <FadeIn key={post.id} delay={i * 0.05}>
            <a
              href="https://instagram.com/kiralyai.nl"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center overflow-hidden border border-border hover:border-primary/30 transition-all`}
            >
              <Instagram className="text-muted-foreground/30 group-hover:text-primary/40 transition-colors" size={28} />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors rounded-xl" />
            </a>
          </FadeIn>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://instagram.com/kiralyai.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <Instagram size={16} />
          @kiralyai.nl
        </a>
      </div>
    </div>
  </section>
);

export default InstagramFeed;
