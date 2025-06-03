
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
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-8 rounded-lg border border-border hover:border-purple-500/50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <p className="text-lg gradient-text font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-px h-8 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
