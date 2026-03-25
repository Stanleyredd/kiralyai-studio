import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-8 lg:pt-40 px-6">
      <div className="container-tight">
        <SectionHeading
          label="About"
          title="About KiralyAI"
          description="We're a small, focused team that builds real solutions for real businesses."
        />
      </div>
    </section>
    <section className="section-padding pt-0">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Who We Are",
              text: "KiralyAI is an automation and development agency that partners with businesses to build custom tools, automate workflows, and create high-performance websites. We're not a big agency — we're a dedicated team that treats every project like our own.",
            },
            {
              title: "What We Do",
              text: "We design and build AI automations, custom software, modern websites, and system integrations. Whether you need to automate a single process or overhaul your entire tech stack, we deliver practical solutions that work.",
            },
            {
              title: "How We Work",
              text: "We start by understanding your business deeply. Then we plan, build, test, and launch — keeping you involved at every step. After launch, we continue to optimize and improve based on real performance data.",
            },
            {
              title: "Why KiralyAI",
              text: "We combine technical expertise with a genuine understanding of business needs. No jargon, no over-engineering — just clean, reliable solutions that deliver measurable results. We build things that last.",
            },
          ].map((block, i) => (
            <FadeIn key={block.title} delay={i * 0.06}>
              <div className="p-6 rounded-xl border border-border bg-background h-full">
                <h3 className="text-base font-semibold mb-2">{block.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Work With Us <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
