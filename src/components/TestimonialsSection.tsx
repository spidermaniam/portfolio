import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, title }) => {
  return (
    <div className="scroll-animate bg-section-testimonials-card-bg text-section-testimonials-card-foreground shadow-xl rounded-lg p-6 border border-section-testimonials-border h-full flex flex-col">
      <p className="text-lg italic text-section-testimonials-text-secondary mb-6 flex-grow">"{quote}"</p>
      <div className="text-right mt-auto">
        <p className="font-semibold text-section-testimonials-text-primary">{author}</p>
        <p className="text-sm text-section-testimonials-text-secondary">{title}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "Working with [Your Name] was a game-changer for our project. Their expertise and dedication were invaluable.",
      author: "John Doe",
      title: "CEO, Tech Solutions Inc."
    },
    {
      quote: "The attention to detail and proactive communication made the entire process smooth and efficient. Highly recommended!",
      author: "Jane Smith",
      title: "Marketing Director, Innovate Ltd."
    },
    {
      quote: "A true professional who delivers high-quality work. It was a pleasure collaborating with [Your Name].",
      author: "Alice Brown",
      title: "CTO, Future Systems Co."
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-section-testimonials-bg">
      <div className="container mx-auto px-4">
        <div className="scroll-animate text-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-section-testimonials-text-primary">
            Words From Clients
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
