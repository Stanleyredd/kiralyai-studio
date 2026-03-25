import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "We work with businesses of all sizes — from startups to established companies. If you need automation, custom tools, websites, or system improvements, we can help.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on the scope. A simple automation can be ready in 1–2 weeks. Larger projects like custom software or full websites typically take 4–8 weeks.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We offer maintenance, improvements, and support packages after launch to ensure everything runs smoothly.",
  },
  {
    q: "Can you integrate with our existing tools?",
    a: "Absolutely. We specialize in integrating with existing systems — CRMs, ERPs, APIs, databases, and more.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern, proven technologies including React, Python, Node.js, various AI/ML frameworks, and cloud platforms. We choose the best stack for each project.",
  },
  {
    q: "How do we get started?",
    a: "Simply reach out through our contact form. We'll schedule a free consultation to understand your needs and propose a solution.",
  },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="container-tight">
      <SectionHeading
        label="FAQ"
        title="Common Questions"
        description="Everything you need to know about working with us."
      />
      <FadeIn className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </div>
  </section>
);

export default FAQSection;
