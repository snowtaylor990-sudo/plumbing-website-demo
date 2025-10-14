"use client";

import { LucideIcon } from "lucide-react";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Our Services",
  description = "Professional plumbing solutions tailored to your needs.",
  items,
}: Gallery4Props) => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 flex flex-col items-center text-center"
              >
                <div className="mb-6 p-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-[#28A7F6]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };