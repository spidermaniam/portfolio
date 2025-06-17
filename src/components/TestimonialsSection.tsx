import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, title }) => {
  return (
    <div className="bg-section-testimonials-card-bg text-section-testimonials-card-foreground shadow-xl rounded-lg p-6 m-4 border border-section-testimonials-border">
      <p className="text-section-testimonials-text-secondary italic">"{quote}"</p>
      <p className="text-right mt-4">
        <span className="font-bold text-section-testimonials-card-foreground">{author}</span>
        <br />
        <span className="text-sm text-section-testimonials-text-secondary">{title}</span>
      </p>
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
    <section id="testimonials" className="py-16 bg-section-testimonials-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-section-testimonials-text-primary">Testimonials</h2>
        <div className="flex flex-wrap justify-center">
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
