
import { Mail, Linkedin, Github, Download, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = ({ onOpenModal }: { onOpenModal: (open: boolean) => void }) => {
  const handleCardClick = (url: string, text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy to clipboard:", err);
    });
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="section-padding relative pb-16 bg-section-contact-bg text-section-contact-text-primary">
      {/* Halo background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-section-contact-accent rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="scroll-animate text-reveal halo-effect">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 font-mono text-section-contact-text-primary">
            Get In <span className="text-section-contact-accent">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-section-contact-text-secondary mb-12 leading-relaxed font-mono">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or just having a chat about technology and software development. Feel free to reach out!
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 stagger-animate items-stretch">
              {/* Email Card */}
              <div className="scroll-animate">
                <div
                  onClick={() =>
                    handleCardClick(
                      "mailto:dhruvpuri00766@gmail.com",
                      "dhruvpuri00766@gmail.com"
                    )
                  }
                  className="group bg-section-contact-card-bg text-section-contact-card-foreground p-8 min-h-[260px] flex flex-col justify-between rounded-lg border border-section-contact-border hover:border-section-contact-accent transition-all duration-500 cursor-pointer hover-lift halo-effect"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-section-contact-accent/10 text-section-contact-accent rounded-full mx-auto mb-6 group-hover:bg-section-contact-accent group-hover:text-section-contact-accent-foreground transition-colors">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-mono">Email</h3>
                  <p className="text-section-contact-text-secondary font-mono">Let's discuss your project</p>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="scroll-animate">
                <div
                  onClick={() =>
                    handleCardClick(
                      "https://www.linkedin.com/in/dhruv-puri-c0d3r/",
                      "https://www.linkedin.com/in/dhruv-puri-c0d3r/"
                    )
                  }
                  className="group bg-section-contact-card-bg text-section-contact-card-foreground p-8 min-h-[260px] flex flex-col justify-between rounded-lg border border-section-contact-border hover:border-section-contact-accent transition-all duration-500 cursor-pointer hover-lift halo-effect"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-section-contact-accent/10 text-section-contact-accent rounded-full mx-auto mb-6 group-hover:bg-section-contact-accent group-hover:text-section-contact-accent-foreground transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-mono">LinkedIn</h3>
                  <p className="text-section-contact-text-secondary font-mono">Connect with me professionally</p>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="scroll-animate">
                <div
                  onClick={() =>
                    handleCardClick(
                      "https://github.com/dhruvpuri",
                      "https://github.com/dhruvpuri"
                    )
                  }
                  className="group bg-section-contact-card-bg text-section-contact-card-foreground p-8 min-h-[260px] flex flex-col justify-between rounded-lg border border-section-contact-border hover:border-section-contact-accent transition-all duration-500 cursor-pointer hover-lift halo-effect"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-section-contact-accent/10 text-section-contact-accent rounded-full mx-auto mb-6 group-hover:bg-section-contact-accent group-hover:text-section-contact-accent-foreground transition-colors">
                    <Github className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-mono">GitHub</h3>
                  <p className="text-section-contact-text-secondary font-mono">Check out my code</p>
                </div>
              </div>
              
              {/* Resume Card */}
              <div className="scroll-animate">
                <div
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1Wl1G-UTjiRkHgfGJn29LfvenKlkF9ZDe/view?usp=sharing",
                      "_blank"
                    )
                  }
                  className="group bg-section-contact-card-bg text-section-contact-card-foreground p-8 min-h-[260px] flex flex-col justify-between rounded-lg border border-section-contact-border hover:border-section-contact-accent transition-all duration-500 cursor-pointer hover-lift halo-effect"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-section-contact-accent/10 text-section-contact-accent rounded-full mx-auto mb-6 group-hover:bg-section-contact-accent group-hover:text-section-contact-accent-foreground transition-colors">
                    <Download className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-mono">Resume</h3>
                  <p className="text-section-contact-text-secondary font-mono">Download my CV</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-lg text-section-contact-text-secondary mb-6 font-mono">
                Alternatively, just want to send a quick message?
              </p>
              <Button
                onClick={() => onOpenModal(true)}
                size="lg"
                className="font-mono bg-section-contact-accent text-section-contact-accent-foreground hover:bg-section-contact-accent/90"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Leave a Message
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
