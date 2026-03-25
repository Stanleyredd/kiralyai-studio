import { useState } from "react";
import { toast } from "sonner";
import FadeIn from "./FadeIn";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="w-full py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
