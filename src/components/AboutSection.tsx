
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate Full-Stack Engineer with over 2 years of experience in building 
                  scalable applications, automation frameworks, and modern web solutions. My journey 
                  in software development has been driven by a love for solving complex problems and 
                  creating efficient, user-friendly systems.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently working at SYTOLAB/KREATOR3D, I lead full-stack development of 3D printer 
                  HMI systems, architecting React frontends and Flask backends. My experience spans 
                  from reducing user setup time by 30% to improving print accuracy by 50% through 
                  real-time integration.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Previously at Paytm, I automated device testing using Python, reducing testing cycles 
                  by 50% and eliminating 25 hours/week of manual effort. I've also worked at Terribly 
                  Tiny Tales, where I revamped frontend UI/UX, boosting website traffic by 20%.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Quick Facts</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      2+ years of professional experience
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Full-stack development expertise
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Test automation specialist
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      AWS cloud services proficient
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Distributed systems enthusiast
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Education</h3>
                  <div className="text-muted-foreground">
                    <p className="font-medium">Bachelor of Technology Honors</p>
                    <p className="text-sm">Electronics and Communications Engineering</p>
                    <p className="text-sm">DR APJ ABDUL KALAM TECHNICAL UNIVERSITY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
