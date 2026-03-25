import { Building2, Globe, Wrench, GitBranch, Bot, Monitor } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const useCases = [
  { icon: Building2, title: "Business Automation", desc: "Automate sales pipelines, onboarding, reporting, and back-office tasks to free up your team." },
  { icon: Globe, title: "Website Creation", desc: "Launch modern websites — from corporate pages to e-commerce — that look great and load fast." },
  { icon: Wrench, title: "Tool Development", desc: "Build internal tools, dashboards, and calculators tailored to your team's exact needs." },
  { icon: GitBranch, title: "Process Improvement", desc: "Streamline existing workflows, eliminate bottlenecks, and reduce manual errors." },
  { icon: Bot, title: "AI Chatbots", desc: "Deploy intelligent chatbots for customer support, lead qualification, and internal Q&A." },
  { icon: Monitor, title: "Internal Tools", desc: "Custom admin panels, CRMs, and management systems built specifically for your operations." },
];

const UseCases = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-8 lg:pt-40 px-6">
      <div className="container-tight">
        <SectionHeading
          label="Use Cases"
          title="How Businesses Use KiralyAI"
          description="From automating daily tasks to building full products — here's how we help."
        />
      </div>
    </section>
    <section className="section-padding pt-0">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((uc, i) => (
            <FadeIn key={uc.title} delay={i * 0.05}>
              <div className="p-6 rounded-xl border border-border bg-background hover:border-primary/20 hover:shadow-sm transition-all h-full">
                <uc.icon className="text-primary mb-4" size={24} />
                <h3 className="text-base font-semibold mb-1">{uc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default UseCases;
