
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
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
            {skillCategories.map((category, index) => (
              <div key={index} className="scroll-animate">
                <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 group h-full halo-effect">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">{category.icon}</span>
                    <h4 className="text-lg font-semibold gradient-text">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-muted/50 text-foreground rounded-lg text-sm font-medium hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 cursor-default border border-transparent hover:border-purple-500/30"
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
