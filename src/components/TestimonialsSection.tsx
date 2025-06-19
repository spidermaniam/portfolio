import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, title }) => {
  return (
    <div className="bg-section-testimonials-card-bg text-section-testimonials-card-foreground shadow-xl rounded-lg p-6 border border-section-testimonials-border h-full flex flex-col min-w-[350px] mx-4">
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
      quote: "Working with Dhruv was a game-changer for our project. Their expertise and dedication were invaluable.",
      author: "Sarah Johnson",
      title: "CEO, Tech Solutions Inc."
    },
    {
      quote: "The attention to detail and proactive communication made the entire process smooth and efficient. Highly recommended!",
      author: "Michael Chen",
      title: "Marketing Director, Innovate Ltd."
    },
    {
      quote: "A true professional who delivers high-quality work. It was a pleasure collaborating with Dhruv.",
      author: "Alice Brown",
      title: "CTO, Future Systems Co."
    },
    {
      quote: "Exceptional problem-solving skills and innovative solutions. Dhruv exceeded our expectations.",
      author: "David Rodriguez",
      title: "Product Manager, StartupXYZ"
    },
    {
      quote: "Outstanding technical expertise combined with excellent project management. Delivered on time and beyond scope.",
      author: "Emily Watson",
      title: "Lead Developer, CodeCraft"
    },
    {
      quote: "Dhruv's ability to understand complex requirements and translate them into elegant solutions is remarkable.",
      author: "James Thompson",
      title: "VP Engineering, TechFlow"
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-section-testimonials-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="scroll-animate text-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-section-testimonials-text-primary">
            Words From <span className="text-section-testimonials-accent">Clients</span>
          </h2>
        </div>
        
        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-section-testimonials-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-section-testimonials-bg to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee wrapper */}
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  title={testimonial.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;