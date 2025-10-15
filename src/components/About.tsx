import { Phone, Mail, Wrench } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary">
              <Wrench className="w-5 h-5" />
              <span className="font-semibold">ABOUT US</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-heading">
              Providing The Best Plumbing Service for You
            </h2>

            <p className="text-body-text text-lg leading-relaxed">
              With over 25 years of experience serving Miami and surrounding areas, we've built our reputation on quality workmanship, honest service, and customer satisfaction. Our certified plumbers are equipped to handle any plumbing challenge, from routine maintenance to complex installations.
            </p>

            <p className="text-body-text leading-relaxed">
              We understand that plumbing issues can be stressful, which is why we prioritize fast response times, transparent pricing, and guaranteed results. Your home deserves the best care, and that's exactly what we deliver.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us 24/7</p>
                  <p className="font-bold text-heading">+1 (877) 145-9728</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-bold text-heading text-sm">hello@miamiplumbing.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/about-plumber-1760378321920.jpg"
              alt="Professional plumber working under sink in Miami home"
              className="w-full h-auto rounded-2xl shadow-xl"
              loading="lazy"
              width="600"
              height="400"
            />
            
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-8 py-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;