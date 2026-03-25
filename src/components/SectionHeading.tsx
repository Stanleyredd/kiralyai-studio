import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <FadeIn className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
    {label && (
      <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-balance">{title}</h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
    )}
  </FadeIn>
);

export default SectionHeading;
