import { useState } from "react";
import { Bot, Globe, Code, Workflow, Plug, Settings, ArrowRight, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { AnimatePresence, motion } from "framer-motion";

const solutions = [
  {
    icon: Bot, title: "AI Automation", summary: "Leverage artificial intelligence to automate complex tasks and decisions.",
    detail: "We build custom AI solutions that learn from your data and automate decision-making processes. From document processing to predictive analytics, our AI systems integrate seamlessly with your existing workflows and deliver measurable ROI."
  },
  {
    icon: Globe, title: "Website Development", summary: "Modern, fast, conversion-optimized websites built to perform.",
    detail: "We create responsive, SEO-optimized websites using the latest technologies. Every site is designed for speed, accessibility, and conversion — whether it's a landing page, corporate site, or complex web application."
  },
  {
    icon: Code, title: "Custom Software", summary: "Purpose-built applications designed around your exact needs.",
    detail: "Off-the-shelf software rarely fits perfectly. We develop custom applications — from internal tools to client-facing platforms — that align precisely with your business processes and scale as you grow."
  },
  {
    icon: Workflow, title: "Workflow Automation", summary: "Eliminate manual steps and streamline your operations.",
    detail: "We map your workflows, identify bottlenecks, and build automations that save time and reduce errors. From data entry to multi-step approval processes, we make your operations run like clockwork."
  },
  {
    icon: Plug, title: "API Integrations", summary: "Connect your tools and systems for seamless data flow.",
    detail: "We build reliable integrations between your CRM, ERP, marketing tools, databases, and third-party services. No more copy-pasting or manual syncing — your systems talk to each other automatically."
  },
  {
    icon: Settings, title: "System Optimization", summary: "Improve and upgrade your existing technology stack.",
    detail: "Already have systems in place? We audit, optimize, and upgrade your existing tools for better performance, security, and user experience — without starting from scratch."
  },
];

const Solutions = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-8 lg:pt-40 px-6">
        <div className="container-tight">
          <SectionHeading
            label="Solutions"
            title="What We Offer"
            description="Comprehensive solutions for businesses that want to automate, build, and improve."
          />
        </div>
      </section>
      <section className="section-padding pt-0">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full text-left p-6 rounded-xl border border-border bg-background hover:border-primary/20 hover:shadow-sm transition-all"
                >
                  <s.icon className="text-primary mb-4" size={24} />
                  <h3 className="text-base font-semibold mb-1 flex items-center justify-between">
                    {s.title}
                    <ArrowRight size={14} className="text-muted-foreground" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                </button>
              </FadeIn>
            ))}
          </div>

          <AnimatePresence>
            {active !== null && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="mt-6 p-6 rounded-xl border border-primary/20 bg-surface"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{solutions[active].title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{solutions[active].detail}</p>
                  </div>
                  <button onClick={() => setActive(null)} className="p-1 rounded-lg hover:bg-secondary">
                    <X size={18} className="text-muted-foreground" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Solutions;
