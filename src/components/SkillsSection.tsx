
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL", "C/C++", "HTML/CSS", "JavaScript"],
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["ReactJS", "NextJS", "Flask", "Node.js"],
      icon: "🚀"
    },
    {
      title: "Testing Tools",
      skills: ["Cypress", "Selenium", "Postman", "JIRA"],
      icon: "🧪"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (S3, DynamoDB)", "Docker", "Jenkins", "Git"],
      icon: "☁️"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "DynamoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
      icon: "🗄️"
    },
    {
      title: "Testing Methodologies",
      skills: ["Functional", "Regression", "System", "Cross-browser", "End-to-End Testing"],
      icon: "⚡"
    },
    {
      title: "Distributed Systems",
      skills: ["Fault-tolerant", "Low-latency", "Query Optimization"],
      icon: "🌐"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-section-skills-bg text-section-skills-text-primary relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-section-skills-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-section-skills-accent/70 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-section-skills-text-primary">
            Technical <span className="text-section-skills-accent">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
            {skillCategories.map((category, index) => (
              <div key={index} className="scroll-animate">
                <div className="bg-section-skills-card-bg/80 backdrop-blur-sm p-6 rounded-xl border border-section-skills-border/50 hover:border-section-skills-accent/70 transition-all duration-500 hover:shadow-xl hover:shadow-section-skills-accent/10 group h-full halo-effect">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform text-section-skills-accent">{category.icon}</span>
                    <h4 className="text-lg font-semibold text-section-skills-accent">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-section-skills-accent/10 text-section-skills-card-foreground rounded-lg text-sm font-medium hover:bg-section-skills-accent/30 hover:text-section-skills-accent-foreground transition-all duration-300 cursor-default border border-transparent hover:border-section-skills-accent/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
