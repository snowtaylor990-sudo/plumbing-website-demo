import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Team = () => {
  const teamMembers = [
  {
    name: "Mike Rodriguez",
    role: "Senior Plumber",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/team-1-1760473617715.jpg"
  },
  {
    name: "Sarah Martinez",
    role: "Master Plumber",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/team-2-1760473617713.jpg"
  },
  {
    name: "David Johnson",
    role: "Lead Technician",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/team-3-1760473617707.jpg"
  }];


  return (
    <section id="team" className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-primary -ml-6 -mt-3.5 block w-max bg-white px-6 font-semibold">Team</span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-heading font-bold sm:text-4xl text-heading !w-[204px] !h-full">Our Expert Team</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="text-body-text !w-[496px] !h-[72px]">Meet our certified plumbing professionals dedicated to providing exceptional service to Miami. Our team brings years of experience and expertise to every job.</p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) =>
            <div key={index} className="group overflow-hidden">
                <img
                className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                src={member.image}
                alt={`${member.name} - ${member.role} at Miami Florida Plumbing`}
                width="826"
                height="1239"
                loading="lazy" />

                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium text-heading transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                    <span className="text-xs text-body-text">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-body-text inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default Team;