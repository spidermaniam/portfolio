
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or just having a chat about technology and software development. Feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a
                href="mailto:dhruvpuri00766@gmail.com"
                className="group bg-card p-8 rounded-lg border border-border hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mx-auto mb-6 group-hover:bg-purple-500/30 transition-colors">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Let's discuss your project</p>
                <p className="text-purple-400 font-medium">dhruvpuri00766@gmail.com</p>
              </a>
              
              <a
                href="https://linkedin.com/in/dhruv-puri"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card p-8 rounded-lg border border-border hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mx-auto mb-6 group-hover:bg-purple-500/30 transition-colors">
                  <Linkedin className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground mb-4">Connect with me professionally</p>
                <p className="text-purple-400 font-medium">+917007228013</p>
              </a>
            </div>
            
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground">
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
