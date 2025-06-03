
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL", "C/C++", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["ReactJS", "NextJS", "Flask", "Node.js"]
    },
    {
      title: "Testing Tools",
      skills: ["Cypress", "Selenium", "Postman", "JIRA"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (S3, DynamoDB)", "Docker", "Jenkins", "Git"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "DynamoDB"]
    },
    {
      title: "Testing Methodologies",
      skills: ["Functional", "Regression", "System", "Cross-browser", "End-to-End Testing"]
    },
    {
      title: "Distributed Systems",
      skills: ["Fault-tolerant", "Low-latency", "Query Optimization"]
    }
  ];

  const certifications = [
    {
      title: "React - The Complete Guide",
      provider: "Udemy",
      period: "Jan 2022 – Mar 2022"
    },
    {
      title: "Data Structures & Algorithms in Java",
      provider: "Great Learning",
      period: "Jan 2022 – Feb 2022"
    },
    {
      title: "CS50: Introduction to Python",
      provider: "Harvard University (edX)",
      period: "Jan 2021 – Mar 2021"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          
          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="text-lg font-semibold mb-4 gradient-text">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium hover:bg-purple-500/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-purple-500/50 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                  <p className="text-purple-400 font-medium mb-2">{cert.provider}</p>
                  <p className="text-sm text-muted-foreground">{cert.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
