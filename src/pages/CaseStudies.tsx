import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const cases = [
  {
    title: "E-commerce Order Automation",
    problem: "A growing online store was manually processing 200+ orders per day, leading to errors and delays.",
    solution: "We built an automated order processing pipeline that integrates with their storefront, warehouse, and shipping provider.",
    result: "Processing time reduced by 85%. Zero manual data entry errors. The team now focuses on growth instead of operations.",
  },
  {
    title: "AI-Powered Customer Support",
    problem: "A SaaS company's support team was overwhelmed with repetitive questions, leading to slow response times.",
    solution: "We deployed an AI chatbot trained on their documentation and past tickets, with smart escalation to human agents.",
    result: "80% of queries resolved automatically. Average response time dropped from 4 hours to under 30 seconds.",
  },
  {
    title: "Custom Project Management Tool",
    problem: "An agency was using 5 different tools to manage projects, causing confusion and lost information.",
    solution: "We built a unified project management platform with task tracking, time logging, client portals, and automated reporting.",
    result: "All workflows consolidated into one tool. Team productivity increased by 40%. Clients love the transparency.",
  },
  {
    title: "Marketing Data Pipeline",
    problem: "A marketing team spent 10+ hours weekly collecting data from various platforms to create reports.",
    solution: "We automated data collection from Google Ads, Meta, email platforms, and CRM — feeding into a real-time dashboard.",
    result: "Reports generated automatically every morning. The team reclaimed 10+ hours per week for strategic work.",
  },
];

const CaseStudies = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-8 lg:pt-40 px-6">
      <div className="container-tight">
        <SectionHeading
          label="Case Studies"
          title="Real Results"
          description="See how we've helped businesses automate, build, and grow."
        />
      </div>
    </section>
    <section className="section-padding pt-0">
      <div className="container-tight space-y-4">
        {cases.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.08}>
            <div className="p-6 md:p-8 rounded-xl border border-border bg-background hover:border-primary/20 transition-all">
              <h3 className="text-lg font-semibold mb-4">{c.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">Problem</span>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">Solution</span>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">Result</span>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.result}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default CaseStudies;
