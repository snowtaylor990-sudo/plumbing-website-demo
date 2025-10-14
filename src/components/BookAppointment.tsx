import { useEffect } from "react";

const BookAppointment = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="book-appointment" className="py-20 bg-background">
      {/* Subtle divider line */}
      <div className="container mx-auto px-4 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-heading mb-4">
            Book Your Plumbing Appointment
          </h2>
          <p className="text-body-text text-lg leading-relaxed">
            Easily schedule your plumbing service online — pick a time that fits your schedule.
          </p>
        </div>

        {/* Calendly Widget - Responsive full-height */}
        <div className="max-w-5xl mx-auto mb-8">
          <div
            className="calendly-inline-widget min-h-[700px] h-auto"
            data-url="https://calendly.com/snow-taylor990/30min"
            data-resize="true"
            style={{ minWidth: "320px", width: "100%" }}
          ></div>
        </div>

        {/* Trust Reassurance Line */}
        <div className="text-center text-sm text-muted-foreground animate-fade-in">
          <p className="flex flex-wrap justify-center items-center gap-4">
            <span>Licensed & Insured</span>
            <span className="hidden sm:inline">|</span>
            <span>24/7 Emergency Support</span>
            <span className="hidden sm:inline">|</span>
            <span>Trusted by Miami Residents</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;