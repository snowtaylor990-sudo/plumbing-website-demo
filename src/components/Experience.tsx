import { CheckCircle2, Calendar, Users, Wrench } from "lucide-react";
import experiencePlumber from "@/assets/experience-plumber.jpg";

const Experience = () => {
  const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "38+", label: "Professional Staff" },
  { value: "100%", label: "Satisfaction Guarantee" }];


  const steps = [
  { icon: Calendar, title: "Make Appointment", description: "Schedule online or call us" },
  { icon: Users, title: "Staff Arrived", description: "Certified plumber on-site" },
  { icon: CheckCircle2, title: "Problem Solved", description: "Quality guaranteed work" }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            <div>
              <p className="text-primary font-semibold mb-2">OUR EXPERIENCE</p>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-heading">
                A Professional Quality Plumbing Service
              </h2>
              <p className="text-muted-foreground mt-3">
                Our team is trained, certified, and trusted by 500+ Miami homes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) =>
              <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-body-text">{stat.label}</p>
                </div>
              )}
            </div>

            {/* Process Steps */}
            <div className="grid sm:grid-cols-3 gap-6">
              {steps.map((step, index) =>
              <div key={index} className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-heading mb-1">{step.title}</h4>
                    <p className="text-sm text-body-text">{step.description}</p>
                  </div>
                </div>
              )}
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
    </section>);

};

export default Experience;