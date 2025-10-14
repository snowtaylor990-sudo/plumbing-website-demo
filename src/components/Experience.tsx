import { Wrench } from "lucide-react";

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
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/experience-plumber-1760467314482.jpg"
              alt="Professional plumber installing sink in modern Miami bathroom"
              className="rounded-2xl shadow-xl !w-full !h-full !max-w-full" />

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