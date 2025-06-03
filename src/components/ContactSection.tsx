
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-animate text-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 font-mono">
            Get In <span className="text-foreground">Touch</span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-mono">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or just having a chat about technology and software development. Feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12 stagger-animate">
              <div className="scroll-animate">
                <a
                  href="mailto:dhruvpuri00766@gmail.com"
                  className="group bg-card p-8 rounded-lg border border-border hover:border-foreground transition-all duration-500 block hover-lift"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-mono">Email</h3>
                  <p className="text-muted-foreground mb-4 font-mono">Let's discuss your project</p>
                  <p className="text-foreground font-medium font-mono">dhruvpuri00766@gmail.com</p>
                </a>
              </div>
              
              <div className="scroll-animate">
                <a
                  href="https://linkedin.com/in/dhruv-puri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card p-8 rounded-lg border border-border hover:border-foreground transition-all duration-500 block hover-lift"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-mono">LinkedIn</h3>
                  <p className="text-muted-foreground mb-4 font-mono">Connect with me professionally</p>
                  <p className="text-foreground font-medium font-mono">linkedin.com/in/dhruv-puri</p>
                </a>
              </div>
            </div>
            
            <div className="border-t border-border pt-8 scroll-animate text-reveal">
              <p className="text-muted-foreground font-mono">
                © 2024 Dhruv Puri. Built with React, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
