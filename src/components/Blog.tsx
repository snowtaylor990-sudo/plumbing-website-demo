import FAQBlock from "./ui/faq-block";

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-text text-lg">
            Find answers to common questions about our plumbing services in Miami
          </p>
        </div>

        <div className="max-w-[95%] mx-auto w-full">
          <FAQBlock />
        </div>
      </div>
    </section>
  );
};

export default Blog;