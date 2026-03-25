import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

const Contact = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-8 lg:pt-40 px-6">
      <div className="container-tight">
        <SectionHeading
          label="Contact"
          title="Let's Talk"
          description="You can contact us for any automation, tool, website, or improvement. We'd love to hear about your project."
        />
      </div>
    </section>
    <section className="section-padding pt-0">
      <div className="container-tight">
        <ContactForm />
        <FadeIn className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Prefer email? Reach us at{" "}
            <a href="mailto:hello@kiralyai.com" className="text-foreground font-medium hover:text-primary transition-colors">
              hello@kiralyai.com
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
