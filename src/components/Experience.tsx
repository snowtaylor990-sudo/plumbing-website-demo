import { Wrench, Calendar, Truck, Home } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F9FBFF]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <p className="text-primary font-semibold mb-3">OUR EXPERIENCE</p>
              <h2 className="text-[38px] lg:text-[42px] font-heading font-extrabold text-heading leading-tight">
                A Professional Quality Plumbing Service
              </h2>
              <p className="text-[#333] mt-4 text-base">
                Our team is trained, certified, and trusted by 500+ Miami homes.
              </p>
            </div>

            {/* Timeline Component */}
            <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-8 pt-10 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex md:flex-col items-center gap-4 md:gap-3 relative flex-1">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <p className="text-base font-extrabold text-heading text-left md:text-center">Book Appointment</p>
                {/* Connecting Line - Desktop */}
                <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-full h-[2px] bg-primary/20" />
              </div>

              {/* Step 2 */}
              <div className="flex md:flex-col items-center gap-4 md:gap-3 relative flex-1">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Truck className="w-7 h-7 text-primary" />
                </div>
                <p className="text-base font-extrabold text-heading text-left md:text-center">Plumber Arrives</p>
                {/* Connecting Line - Desktop */}
                <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-full h-[2px] bg-primary/20" />
              </div>

              {/* Step 3 */}
              <div className="flex md:flex-col items-center gap-4 md:gap-3 relative flex-1">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Wrench className="w-7 h-7 text-primary" />
                </div>
                <p className="text-base font-extrabold text-heading text-left md:text-center">We Fix the Problem</p>
                {/* Connecting Line - Desktop */}
                <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-full h-[2px] bg-primary/20" />
              </div>

              {/* Step 4 */}
              <div className="flex md:flex-col items-center gap-4 md:gap-3 flex-1">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Home className="w-7 h-7 text-primary" />
                </div>
                <p className="text-base font-extrabold text-heading text-left md:text-center">Enjoy Your Home Again</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/experience-plumber-1760467314482.jpg"
              alt="Professional plumber installing sink in modern Miami bathroom"
              className="rounded-2xl shadow-xl !w-full !h-full !max-w-full"
              loading="lazy"
              width="600"
              height="400" />

            {/* Decorative Badge */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl">
              <Wrench className="w-10 h-10 mb-1" />
              <p className="text-xs font-bold">CERTIFIED</p>
              <p className="text-xs">EXPERTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;