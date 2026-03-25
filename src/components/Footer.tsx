import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-surface">
    <div className="container-tight px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="text-xl font-bold tracking-tight">
            Király<span className="text-primary">AI</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            AI automation, custom tools, and web development for modern businesses.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Pages</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/solutions", label: "Solutions" },
              { to: "/use-cases", label: "Use Cases" },
              { to: "/case-studies", label: "Case Studies" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>AI Automation</span>
            <span>Web Development</span>
            <span>Custom Software</span>
            <span>Integrations</span>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} KiralyAI. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
