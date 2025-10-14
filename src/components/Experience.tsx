import { CheckCircle2, Calendar, Users, Wrench } from "lucide-react";
import { Timeline, type TimelineItem } from "@/components/ui/timeline";

const Experience = () => {
  const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "38+", label: "Professional Staff" },
  { value: "100%", label: "Satisfaction Guarantee" }];


  const steps = [
  { icon: Calendar, title: "Make Appointment", description: "Schedule online or call us" },
  { icon: Users, title: "Staff Arrived", description: "Certified plumber on-site" },
  { icon: CheckCircle2, title: "Problem Solved", description: "Quality guaranteed work" }];

  // Business journey timeline
  const timelineItems: TimelineItem[] = [
    {
      id: "1",
      title: "Company Founded",
      description: "Started serving Miami with a vision to provide exceptional plumbing services",
      timestamp: new Date("1999-01-01"),
      status: "completed",
      icon: <Wrench className="h-3 w-3" />,
    },
    {
      id: "2",
      title: "Expanded Service Area",
      description: "Grew to serve over 500+ homes across Miami-Dade County",
      timestamp: new Date("2005-06-15"),
      status: "completed",
      icon: <Users className="h-3 w-3" />,
    },
    {
      id: "3",
      title: "Professional Certification",
      description: "All staff members received advanced plumbing certifications",
      timestamp: new Date("2010-03-20"),
      status: "completed",
      icon: <CheckCircle2 className="h-3 w-3" />,
    },
    {
      id: "4",
      title: "Award-Winning Service",
      description: "Recognized as Miami's top-rated plumbing service provider",
      timestamp: new Date("2020-11-10"),
      status: "completed",
      icon: <CheckCircle2 className="h-3 w-3" />,
    },
    {
      id: "5",
      title: "Continuous Growth",
      description: "Expanding our team and services to better serve our community",
      timestamp: new Date(),
      status: "active",
      icon: <Calendar className="h-3 w-3" />,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F9FBFF]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[5fr_6fr] gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12 animate-fade-in">
            <div>
              <p className="text-primary font-semibold mb-3">OUR EXPERIENCE</p>
              <h2 className="text-[38px] lg:text-[42px] font-heading font-extrabold text-heading leading-tight">
                A Professional Quality Plumbing Service
              </h2>
              <p className="text-[#333] mt-4 text-base">
                Our team is trained, certified, and trusted by 500+ Miami homes.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 bg-white rounded-xl shadow-sm p-6">
              {stats.map((stat, index) => (
                <>
                  <div key={index} className="text-center flex-1">
                    <div className="bg-primary/10 rounded-lg py-3 px-4 mb-2">
                      <p className="text-4xl lg:text-5xl font-bold text-primary mb-1">{stat.value}</p>
                    </div>
                    <p className="text-sm font-medium text-body-text">{stat.label}</p>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="hidden sm:block w-px h-16 bg-gray-200 mx-4"></div>
                  )}
                </>
              ))}
            </div>

            {/* Process Steps */}
            <div className="grid sm:grid-cols-3 gap-8 lg:gap-10">
              {steps.map((step, index) =>
              <div 
                key={index} 
                className="text-center space-y-3 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-white group"
              >
                  <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-9 h-9 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000] text-base mb-2">{step.title}</h4>
                    <p className="text-[14px] leading-relaxed text-[#444]">{step.description}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Business Journey Timeline */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-2xl font-bold text-heading mb-6">Our Journey</h3>
              <Timeline 
                items={timelineItems} 
                variant="compact"
                showTimestamps={true}
                timestampPosition="inline"
              />
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