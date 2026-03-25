import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bot, Wrench, Globe, Workflow, Plug, Settings,
  Search, ClipboardList, Hammer, TestTube, Rocket, RefreshCw,
  ArrowRight, Zap, Code, Cpu
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import InstagramFeed from "@/components/InstagramFeed";
import ContactForm from "@/components/ContactForm";

const services = [
  { icon: Bot, title: "AI Automation", desc: "Automate repetitive tasks with intelligent AI solutions." },
  { icon: Wrench, title: "Custom Tools", desc: "Purpose-built tools designed for your specific workflows." },
  { icon: Globe, title: "Website Development", desc: "Fast, modern, responsive websites that convert." },
  { icon: Workflow, title: "Workflow Automation", desc: "Streamline operations and eliminate manual steps." },
  { icon: Plug, title: "Integrations", desc: "Connect your existing tools and systems seamlessly." },
  { icon: Settings, title: "System Improvements", desc: "Optimize and upgrade your current technology stack." },
];

const steps = [
  { icon: Search, title: "Analysis", desc: "We study your processes and identify opportunities." },
  { icon: ClipboardList, title: "Plan", desc: "We design a tailored strategy and roadmap." },
  { icon: Hammer, title: "Build", desc: "We develop and implement the solution." },
  { icon: TestTube, title: "Test", desc: "Thorough testing ensures everything works perfectly." },
  { icon: Rocket, title: "Launch", desc: "We deploy and go live with full support." },
  { icon: RefreshCw, title: "Improve", desc: "Continuous optimization based on real results." },
];

const examples = [
  { icon: Zap, title: "Automated Lead Processing", desc: "AI-powered system that qualifies and routes leads automatically, saving 20+ hours per week." },
  { icon: Code, title: "Custom Client Portal", desc: "Full-stack web application for managing projects, invoices, and communication in one place." },
  { icon: Cpu, title: "Data Pipeline Automation", desc: "Automated data collection, transformation, and reporting across multiple platforms." },
  { icon: Bot, title: "AI Customer Support", desc: "Intelligent chatbot that handles 80% of support queries, escalating complex cases to humans." },
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6">
      <div className="container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            AI Automation & Development
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance max-w-3xl mx-auto">
            We build the tools that make your business{" "}
            <span className="gradient-text">work smarter</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From AI automation and custom software to modern websites — we help businesses streamline, scale, and succeed.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/solutions"
            className="px-6 py-3 rounded-lg border border-border font-medium text-sm hover:bg-secondary transition-colors flex items-center gap-2"
          >
            View Solutions <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-surface">
      <div className="container-tight">
        <SectionHeading
          label="Services"
          title="What We Do"
          description="End-to-end solutions for modern businesses — from automation to full-stack development."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <div className="group p-6 rounded-xl border border-border bg-background hover:border-primary/20 hover:shadow-sm transition-all">
                <s.icon className="text-primary mb-4" size={24} />
                <h3 className="text-base font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* How We Work */}
    <section className="section-padding">
      <div className="container-tight">
        <SectionHeading
          label="Process"
          title="How We Work"
          description="A proven, transparent process from first conversation to ongoing improvement."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.06}>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <step.icon className="text-primary" size={20} />
                </div>
                <div className="text-xs font-medium text-primary mb-1">0{i + 1}</div>
                <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Example Solutions */}
    <section className="section-padding bg-surface">
      <div className="container-tight">
        <SectionHeading
          label="Examples"
          title="Solutions We Build"
          description="Real automations and tools that deliver measurable results."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {examples.map((ex, i) => (
            <FadeIn key={ex.title} delay={i * 0.05}>
              <div className="p-6 rounded-xl border border-border bg-background hover:border-primary/20 transition-all">
                <ex.icon className="text-primary mb-3" size={22} />
                <h3 className="text-base font-semibold mb-1">{ex.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ex.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Instagram */}
    <InstagramFeed />

    {/* FAQ */}
    <FAQSection />

    {/* Contact */}
    <section className="section-padding bg-surface">
      <div className="container-tight">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          description="Ready to automate, build, or improve? Let's talk."
        />
        <ContactForm />
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
