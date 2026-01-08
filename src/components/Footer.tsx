import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-foreground mb-1">
              YOUR BRAND
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Colorful fashion for the bold & beautiful
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="text-sm">TikTok</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
          <p>© 2026 Your Brand. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
