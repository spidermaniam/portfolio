
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-about-bg text-section-about-text-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-section-about-accent/20 via-transparent to-section-about-accent/30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-section-about-text-primary">
              About <span className="text-section-about-accent">Me</span> {/* Adjusted gradient-text to simple accent for now */}
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center stagger-animate">
              <div className="space-y-6 scroll-animate">
                <div className="scroll-animate">
                  <p className="text-lg text-section-about-text-secondary leading-relaxed hover:text-section-about-text-primary transition-colors duration-300">
                    I'm a passionate Full-Stack Engineer with over 2 years of experience in building 
                    scalable applications, automation frameworks, and modern web solutions. My journey 
                    in software development has been driven by a love for solving complex problems and 
                    creating efficient, user-friendly systems.
                  </p>
                </div>
                
                <div className="scroll-animate">
                  <p className="text-lg text-section-about-text-secondary leading-relaxed hover:text-section-about-text-primary transition-colors duration-300">
                    Currently working at SYTOLAB/KREATOR3D, I lead full-stack development of 3D printer 
                    HMI systems, architecting React frontends and Flask backends. My experience spans 
                    from reducing user setup time by 30% to improving print accuracy by 50% through 
                    real-time integration.
                  </p>
                </div>
                
                <div className="scroll-animate">
                  <p className="text-lg text-section-about-text-secondary leading-relaxed hover:text-section-about-text-primary transition-colors duration-300">
                    Previously at Paytm, I automated device testing using Python, reducing testing cycles 
                    by 50% and eliminating 25 hours/week of manual effort. I've also worked at Terribly 
                    Tiny Tales, where I revamped frontend UI/UX, boosting website traffic by 20%.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 stagger-animate">
                <div className="scroll-animate">
                  <div className="bg-section-about-card-bg/80 backdrop-blur-sm p-6 rounded-xl border border-section-about-border/50 hover:border-section-about-accent/70 transition-all duration-500 hover:shadow-xl hover:shadow-section-about-accent/10 group">
                    <h3 className="text-xl font-semibold mb-4 text-section-about-accent group-hover:scale-105 transition-transform inline-block">Quick Facts</h3>
                    <ul className="space-y-3 text-section-about-card-foreground">
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-section-about-accent rounded-full mr-3 group-hover/item:bg-section-about-accent/80 transition-colors"></span>
                        <span className="group-hover/item:text-section-about-text-primary transition-colors">2+ years of professional experience</span>
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-section-about-accent rounded-full mr-3 group-hover/item:bg-section-about-accent/80 transition-colors"></span>
                        <span className="group-hover/item:text-section-about-text-primary transition-colors">Full-stack development expertise</span>
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-section-about-accent rounded-full mr-3 group-hover/item:bg-section-about-accent/80 transition-colors"></span>
                        <span className="group-hover/item:text-section-about-text-primary transition-colors">Test automation specialist</span>
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-section-about-accent rounded-full mr-3 group-hover/item:bg-section-about-accent/80 transition-colors"></span>
                        <span className="group-hover/item:text-section-about-text-primary transition-colors">AWS cloud services proficient</span>
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-section-about-accent rounded-full mr-3 group-hover/item:bg-section-about-accent/80 transition-colors"></span>
                        <span className="group-hover/item:text-section-about-text-primary transition-colors">Distributed systems enthusiast</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="scroll-animate">
                  <div className="bg-section-about-card-bg/80 backdrop-blur-sm p-6 rounded-xl border border-section-about-border/50 hover:border-section-about-accent/70 transition-all duration-500 hover:shadow-xl hover:shadow-section-about-accent/10 group">
                    <h3 className="text-xl font-semibold mb-4 text-section-about-accent group-hover:scale-105 transition-transform inline-block">Education</h3>
                    <div className="text-section-about-card-foreground group-hover:text-section-about-text-primary transition-colors">
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
      </div>
    </section>
  );
};

export default AboutSection;
