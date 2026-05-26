import FadeIn from "./FadeIn";

const ContactForm = () => {
  return (
    <FadeIn>
      <div className="max-w-xl mx-auto">
        <iframe
          src="https://tally.so/embed/eqYeJ0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="700"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact form"
          className="w-full rounded-lg"
        />
      </div>
    </FadeIn>
  );
};

export default ContactForm;
