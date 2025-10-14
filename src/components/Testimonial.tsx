"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "./ui/testimonials-columns";

const testimonials = [{
  text: "Miami Florida Plumbing saved the day! Our kitchen sink was completely backed up, and they arrived within 30 minutes. Professional, efficient, and reasonably priced. Highly recommend!",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/916ff79f-1c05-4845-b096-318fdd6365ca/generated_images/professional-headshot-portrait-of-a-hisp-541bbede-20251014203431.jpg",
  name: "Maria Rodriguez",
  role: "Homeowner, Coral Gables"
}, {
  text: "Best plumbing service in Miami! They installed our new water heater quickly and professionally. The team was courteous and cleaned up everything perfectly.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/916ff79f-1c05-4845-b096-318fdd6365ca/generated_images/professional-headshot-portrait-of-an-asi-4cf89aad-20251014203438.jpg",
  name: "Robert Chen",
  role: "Homeowner, Kendall"
}, {
  text: "Outstanding service from start to finish. They diagnosed our leak problem accurately and fixed it the same day. Will definitely call them again!",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/916ff79f-1c05-4845-b096-318fdd6365ca/generated_images/professional-headshot-portrait-of-a-cauc-0a4b0a48-20251014203447.jpg",
  name: "James Mitchell",
  role: "Property Manager"
}, {
  text: "I've used several plumbers in Miami, but none compare to Miami Florida Plumbing. They're reliable, honest, and their work is top-notch. Five stars!",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/916ff79f-1c05-4845-b096-318fdd6365ca/generated_images/professional-headshot-portrait-of-a-cauc-00943563-20251014203453.jpg",
  name: "Sarah Johnson",
  role: "Homeowner, Miami Beach"
}, {
  text: "Had an emergency pipe burst at 2 AM. They answered immediately and had someone here within the hour. Saved us from major water damage. True professionals!",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/916ff79f-1c05-4845-b096-318fdd6365ca/generated_images/professional-headshot-portrait-of-a-hisp-83ea11a8-20251014203501.jpg",
  name: "David Martinez",
  role: "Homeowner, Doral"
}, {
  text: "Excellent experience! They replaced all our old pipes and the difference is amazing. Water pressure is perfect and no more strange noises. Worth every penny!",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/916ff79f-1c05-4845-b096-318fdd6365ca/generated_images/professional-headshot-portrait-of-an-afr-83e46de3-20251014203518.jpg",
  name: "Linda Thompson",
  role: "Homeowner, Pinecrest"
}, {
  text: "Professional, punctual, and affordable. They fixed our bathroom plumbing issues in no time. The technician explained everything clearly. Highly satisfied!",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/916ff79f-1c05-4845-b096-318fdd6365ca/generated_images/professional-headshot-portrait-of-a-hisp-70a28ce8-20251014203526.jpg",
  name: "Carlos Gomez",
  role: "Business Owner"
}, {
  text: "Best decision calling Miami Florida Plumbing! They installed our new dishwasher and garbage disposal flawlessly. Clean, efficient, and friendly service.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/916ff79f-1c05-4845-b096-318fdd6365ca/generated_images/professional-headshot-portrait-of-a-cauc-89f0f05f-20251014203534.jpg",
  name: "Amanda Wilson",
  role: "Restaurant Owner"
}, {
  text: "They've been our go-to plumbers for years. Always reliable, fair pricing, and exceptional workmanship. Can't recommend them enough!",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/916ff79f-1c05-4845-b096-318fdd6365ca/generated_images/professional-headshot-portrait-of-an-asi-f587cc33-20251014203542.jpg",
  name: "Michael Chang",
  role: "Homeowner, Coconut Grove"
}];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonial = () => {
  return <section id="testimonial" className="py-20 bg-navy text-navy-foreground relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }} viewport={{
        once: true
      }} className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="border border-accent/30 py-1 px-4 rounded-lg bg-accent/10">
              <span className="text-accent font-semibold">TESTIMONIALS</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight mt-5 text-center py-0 my-[12px] px-[73px] mx-[7px]">
            What Our Customers Say
          </h2>
          <p className="text-center mt-5 text-navy-foreground/80">
            See why Miami residents trust us for all their plumbing needs.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>;
};

export default Testimonial;