import { useState } from "react";
import { Menu, Droplet } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetFooter } from "./ui/sheet";
import { cn } from "@/lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  
  const links = [{
    label: "Home",
    href: "#home"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Services",
    href: "#services"
  }, {
    label: "Testimonials",
    href: "#testimonial"
  }, {
    label: "Team",
    href: "#team"
  }, {
    label: "FAQ",
    href: "#blog"
  }];

  const scrollToBooking = () => {
    const section = document.getElementById('book-appointment');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <header className={cn("sticky top-5 z-50", "mx-auto w-full max-w-7xl rounded-xl border shadow-lg", "bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg")}>
      <nav className="mx-auto flex items-center justify-between p-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-heading transition-colors duration-100">
          <Droplet className="w-7 h-7 text-primary" />
          <span>
        </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-2">
          {links.map(link => <a key={link.label} href={link.href} className="text-body-text hover:text-[#28A7F6] rounded-md px-4 py-2 text-sm font-medium transition-colors">
              {link.label}
            </a>)}
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button size="sm" className="rounded-lg font-bold btn-shadow" onClick={scrollToBooking}>
            Book
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="lg:hidden">
              <Menu className="size-4" />
            </Button>
            <SheetContent className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg" showClose={false} side="left">
              <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                {links.map(link => <a key={link.label} href={link.href} className="text-body-text hover:text-[#28A7F6] rounded-md px-4 py-3 text-sm font-medium transition-colors text-left" onClick={() => setOpen(false)}>
                    {link.label}
                  </a>)}
              </div>
              <SheetFooter>
                <Button className="w-full rounded-lg font-bold btn-shadow" onClick={() => { scrollToBooking(); setOpen(false); }}>
                  Book
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>;
};

export default Header;