import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";
import { GradientDots } from "./ui/gradient-dots";

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("book-appointment");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <GradientDots duration={25} colorCycleDuration={8} className="w-full h-full absolute inset-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tighter font-heading font-extrabold text-center" style={{ lineHeight: '1.15' }}>
                <span className="text-heading block">
                  Miami's Most <span style={{ color: '#28A7F6' }}>Professional</span>
                </span>
                <span className="text-heading block mt-3 !w-full !h-[83px]">Plumbing Service</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-body-text mx-auto max-w-2xl px-4">
                Expert plumbing solutions for Miami homes and businesses. From emergency repairs to complete installations, we deliver quality service with 25+ years of trusted experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="gap-4 rounded-xl font-bold text-base px-8 btn-shadow w-full sm:w-auto">

                BOOK APPOINTMENT
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-4 rounded-xl font-bold text-base px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">

                GET FREE QUOTE
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 pt-4 justify-center items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-heading">+1 (877) 145-9728</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-heading">hello@miamiplumbing.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;