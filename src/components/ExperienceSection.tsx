
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
    <section id="experience" className="relative min-h-screen">
      {/* Section Header */}
      <div className="sticky top-0 bg-background z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl lg:text-8xl font-bold text-center font-mono">
            Professional <span className="text-foreground">Experience</span>
          </h2>
        </div>
      </div>

      {/* Stacking Experience Cards */}
      <div className="relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="sticky bg-background"
            style={{ 
              top: `${80 + index * 40}px`,
              zIndex: experiences.length - index
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-500 group hover-lift">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left side - Job info */}
                  <div>
                    <span className="inline-block px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium mb-4 font-mono">
                      {exp.period}
                    </span>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-foreground transition-colors font-mono">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-foreground font-medium mb-2 font-mono">{exp.company}</p>
                    <p className="text-muted-foreground font-mono">{exp.location}</p>
                  </div>

                  {/* Right side - Achievements */}
                  <div>
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start group/item">
                          <span className="w-2 h-2 bg-foreground rounded-full mr-4 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-all duration-300"></span>
                          <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300 font-mono text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
