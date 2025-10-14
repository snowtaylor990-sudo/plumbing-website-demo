import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Experience from "@/components/Experience";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import BookAppointment from "@/components/BookAppointment";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="px-4 pt-4">
        <Header />
      </div>
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Services />
        <Testimonial />
        <Team />
        <Experience />
        <Blog />
        <BookAppointment />
      </main>
      <Footer />
    </div>
  );
};

export default Index;