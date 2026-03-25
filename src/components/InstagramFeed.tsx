import { useEffect } from "react";
import SectionHeading from "./SectionHeading";

const posts = [
  "https://www.instagram.com/p/DV_FXgKCsxs/",
  "https://www.instagram.com/p/DV07PpTCvOB/",
];

const InstagramFeed = () => {
  useEffect(() => {
    const scriptId = "instagram-embed-script";

    const processEmbeds = () => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process();
      }
    };

    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      processEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => processEmbeds();

    document.body.appendChild(script);
  }, []);

  return (
    <section className="section-padding bg-surface">
      <div className="container-tight">
        <SectionHeading
          label="Instagram"
          title="Latest Posts"
          description="Bekijk onze nieuwste Instagram posts."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((url) => (
            <blockquote
              key={url}
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#fff",
                border: 0,
                borderRadius: "12px",
                margin: "0 auto",
                maxWidth: "540px",
                minWidth: "326px",
                padding: 0,
                width: "100%",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
