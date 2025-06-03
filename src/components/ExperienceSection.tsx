
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "SYTOLAB/KREATOR3D",
      location: "Bengaluru, India",
      period: "JAN 2024 - Present",
      achievements: [
        "Led full-stack development of a 3D printer HMI from concept to deployment, architecting the React frontend, Flask backend, and API integration",
        "Reduced user setup time by 30% by optimizing UI workflows for printhead selection and slicing",
        "Improved print accuracy by 50% through real-time integration of Moonraker for printer monitoring and control",
        "Designed and executed manual test cases for SaaS-based HMI systems, ensuring seamless integration of microservices",
        "Performed end-to-end testing of RESTful APIs (Postman) to validate communication between microservices"
      ]
    },
    {
      title: "Software Development Engineer in Test",
      company: "PAYTM",
      location: "Delhi, India",
      period: "JAN 2023 - JAN 2024",
      achievements: [
        "Automated device testing using Python, reducing testing cycles by 50% and eliminating 25 hours/week of manual effort",
        "Authored 100+ manual test cases for Soundboxes, covering functional, regression, and integration scenarios",
        "Created comprehensive test plans and maintained documentation for end-to-end testing cycles",
        "Integrated AWS services (S3, DynamoDB) with Boto3 SDK to streamline test data management",
        "Generated Matplotlib-powered test reports, identifying 50+ critical bugs pre-release and cutting post-release issues by 20%",
        "Tested REST APIs for high-volume transactional systems, ensuring data integrity across 10M+ network requests"
      ]
    },
    {
      title: "Product Analyst",
      company: "TERRIBLY TINY TALES(TTT)",
      location: "Mumbai, India",
      period: "OCT 2021 - JAN 2023",
      achievements: [
        "Revamped frontend UI/UX using React and Cypress, boosting website traffic by 20% and reducing production bugs by 40%",
        "Led cross-functional collaboration with UX designers and product managers to align and prioritize features",
        "Collaborated with DevOps to streamline microservices testing in Docker containers, improving deployment reliability",
        "Performed cross-browser testing (Chrome, Firefox, Safari) for React-based web applications, resolving 30+ UI compatibility issues",
        "Automated regression testing with Cypress, increasing test coverage by 35%"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="scroll-animate text-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20 font-mono">
            Professional <span className="text-foreground">Experience</span>
          </h2>
          
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border"></div>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className={`timeline-item flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Enhanced timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-card border border-border p-8 rounded-lg hover:shadow-xl transition-all duration-500 group hover-lift">
                      <div className="flex flex-col lg:items-start mb-6">
                        <div className="mb-4">
                          <span className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium mb-3 font-mono">
                            {exp.period}
                          </span>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-foreground transition-colors font-mono">{exp.title}</h3>
                          <p className="text-lg text-foreground font-medium font-mono">{exp.company}</p>
                          <p className="text-sm text-muted-foreground font-mono">{exp.location}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start group/item">
                            <span className="w-2 h-2 bg-foreground rounded-full mr-4 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-all duration-300"></span>
                            <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300 font-mono text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Spacer for timeline */}
                  <div className="hidden lg:block w-2/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
