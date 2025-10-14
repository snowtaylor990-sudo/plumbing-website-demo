import { Droplet, Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-navy-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Logo + Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Droplet className="w-8 h-8 text-primary" />
              <span className="font-heading font-bold text-xl">Main Plumbing</span>
            </div>
            <p className="text-navy-foreground/70 text-sm leading-relaxed">
              Reliable plumbing solutions across Miami.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-navy-foreground">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="#home" 
                  className="text-navy-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-navy-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-navy-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#testimonial" 
                  className="text-navy-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="text-navy-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Team
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  className="text-navy-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-navy-foreground">Contact Info</h4>
            <div className="space-y-3 text-sm text-navy-foreground/70 leading-relaxed">
              <p>
                123 Ocean Drive<br />
                Miami, FL 33139
              </p>
              <p>Phone: +1 (877) 145-9728</p>
              <p>Email: hello@miamiplumbing.com</p>
              <p className="pt-2">
                <span className="font-semibold text-navy-foreground">Working Hours:</span><br />
                Mon - Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 4:00 PM<br />
                Sun: Emergency Only
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-navy-foreground">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border-2 border-primary/40 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border-2 border-primary/40 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border-2 border-primary/40 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-navy-foreground/10"></div>

      {/* Copyright */}
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-navy-foreground/60">
          © 2025 Main Plumbing Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;