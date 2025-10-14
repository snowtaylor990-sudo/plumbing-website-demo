"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "./ui/testimonials-columns";
import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";
import customer4 from "@/assets/customer-4.jpg";
import customer5 from "@/assets/customer-5.jpg";
import customer6 from "@/assets/customer-6.jpg";
import customer7 from "@/assets/customer-7.jpg";
import customer8 from "@/assets/customer-8.jpg";
import customer9 from "@/assets/customer-9.jpg";
const testimonials = [{
  text: "Miami Florida Plumbing saved the day! Our kitchen sink was completely backed up, and they arrived within 30 minutes. Professional, efficient, and reasonably priced. Highly recommend!",
  image: customer1,
  name: "Maria Rodriguez",
  role: "Homeowner, Coral Gables"
}, {
  text: "Best plumbing service in Miami! They installed our new water heater quickly and professionally. The team was courteous and cleaned up everything perfectly.",
  image: customer2,
  name: "Robert Chen",
  role: "Homeowner, Kendall"
}, {
  text: "Outstanding service from start to finish. They diagnosed our leak problem accurately and fixed it the same day. Will definitely call them again!",
  image: customer3,
  name: "James Mitchell",
  role: "Property Manager"
}, {
  text: "I've used several plumbers in Miami, but none compare to Miami Florida Plumbing. They're reliable, honest, and their work is top-notch. Five stars!",
  image: customer4,
  name: "Sarah Johnson",
  role: "Homeowner, Miami Beach"
}, {
  text: "Had an emergency pipe burst at 2 AM. They answered immediately and had someone here within the hour. Saved us from major water damage. True professionals!",
  image: customer5,
  name: "David Martinez",
  role: "Homeowner, Doral"
}, {
  text: "Excellent experience! They replaced all our old pipes and the difference is amazing. Water pressure is perfect and no more strange noises. Worth every penny!",
  image: customer6,
  name: "Linda Thompson",
  role: "Homeowner, Pinecrest"
}, {
  text: "Professional, punctual, and affordable. They fixed our bathroom plumbing issues in no time. The technician explained everything clearly. Highly satisfied!",
  image: customer7,
  name: "Carlos Gomez",
  role: "Business Owner"
}, {
  text: "Best decision calling Miami Florida Plumbing! They installed our new dishwasher and garbage disposal flawlessly. Clean, efficient, and friendly service.",
  image: customer8,
  name: "Amanda Wilson",
  role: "Restaurant Owner"
}, {
  text: "They've been our go-to plumbers for years. Always reliable, fair pricing, and exceptional workmanship. Can't recommend them enough!",
  image: customer9,
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