
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
      skills: ["MongoDB", "DynamoDB"],
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
    <section id="skills" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          
          {/* Skills */}
          <div className="mb-20 scroll-animate">
            <h3 className="text-2xl font-semibold mb-12 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
              {skillCategories.map((category, index) => (
                <div key={index} className="scroll-animate">
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 group h-full">
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
          
          {/* Certifications */}
          <div className="scroll-animate">
            <h3 className="text-2xl font-semibold mb-12 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
              {certifications.map((cert, index) => (
                <div key={index} className="scroll-animate">
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 group h-full">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-xl">🎓</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mb-3 group-hover:text-purple-300 transition-colors">{cert.title}</h4>
                    <p className="text-purple-400 font-medium mb-2">{cert.provider}</p>
                    <p className="text-sm text-muted-foreground">{cert.period}</p>
                  </div>
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
