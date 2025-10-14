import { Gallery4 } from "./ui/gallery4";
import { Wrench, Droplets, Drill, Gauge } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "general-plumbing",
      title: "General Plumbing",
      description: "Complete solutions for residential and commercial properties.",
      icon: Wrench,
    },
    {
      id: "pipe-service",
      title: "Pipe Installation",
      description: "Expert pipe repair, replacement, and installation services.",
      icon: Droplets,
    },
    {
      id: "drain-cleaning",
      title: "Drain Cleaning",
      description: "Fast and effective solutions for clogged drains.",
      icon: Drill,
    },
    {
      id: "water-heater",
      title: "Water Heater Service",
      description: "Professional water heater repair and maintenance.",
      icon: Gauge,
    },
  ];

  return (
    <div id="services" className="bg-muted/30">
      <Gallery4
        title="The Plumbing Services That We Provide"
        description="Professional, reliable, and guaranteed plumbing services for all your needs"
        items={services}
      />
    </div>
  );
};

export default Services;