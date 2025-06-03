
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center stagger-animate">
              <div className="space-y-6 scroll-animate">
                <div className="scroll-animate">
                  <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                    I'm a passionate Full-Stack Engineer with over 2 years of experience in building 
                    scalable applications, automation frameworks, and modern web solutions. My journey 
                    in software development has been driven by a love for solving complex problems and 
                    creating efficient, user-friendly systems.
                  </p>
                </div>
                
                <div className="scroll-animate">
                  <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                    Currently working at SYTOLAB/KREATOR3D, I lead full-stack development of 3D printer 
                    HMI systems, architecting React frontends and Flask backends. My experience spans 
                    from reducing user setup time by 30% to improving print accuracy by 50% through 
                    real-time integration.
                  </p>
                </div>
                
                <div className="scroll-animate">
                  <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                    Previously at Paytm, I automated device testing using Python, reducing testing cycles 
                    by 50% and eliminating 25 hours/week of manual effort. I've also worked at Terribly 
                    Tiny Tales, where I revamped frontend UI/UX, boosting website traffic by 20%.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 stagger-animate">
                <div className="scroll-animate">
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 group">
                    <h3 className="text-xl font-semibold mb-4 gradient-text group-hover:scale-105 transition-transform inline-block">Quick Facts</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover/item:bg-blue-500 transition-colors"></span>
                        <span className="group-hover/item:text-foreground transition-colors">2+ years of professional experience</span>
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover/item:bg-blue-500 transition-colors"></span>
                        <span className="group-hover/item:text-foreground transition-colors">Full-stack development expertise</span>
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover/item:bg-blue-500 transition-colors"></span>
                        <span className="group-hover/item:text-foreground transition-colors">Test automation specialist</span>
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover/item:bg-blue-500 transition-colors"></span>
                        <span className="group-hover/item:text-foreground transition-colors">AWS cloud services proficient</span>
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover/item:bg-blue-500 transition-colors"></span>
                        <span className="group-hover/item:text-foreground transition-colors">Distributed systems enthusiast</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="scroll-animate">
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 group">
                    <h3 className="text-xl font-semibold mb-4 gradient-text group-hover:scale-105 transition-transform inline-block">Education</h3>
                    <div className="text-muted-foreground group-hover:text-foreground transition-colors">
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
