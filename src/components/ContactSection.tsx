
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const handleCardClick = (url: string, text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy to clipboard:", err);
    });
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="section-padding relative pb-16">
      {/* Halo background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-foreground rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="scroll-animate text-reveal halo-effect">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 font-mono">
            Get In <span className="text-foreground">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-mono">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or just having a chat about technology and software development. Feel free to reach out!
            </p>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 stagger-animate items-stretch">
              {/* Email Card */}
              <div className="scroll-animate">
                <div
                  onClick={() =>
                    handleCardClick(
                      "mailto:dhruvpuri00766@gmail.com",
                      "dhruvpuri00766@gmail.com"
                    )
                  }
                  className="group bg-card p-8 min-h-[260px] flex flex-col justify-between rounded-lg border border-border hover:border-foreground transition-all duration-500 cursor-pointer hover-lift halo-effect"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-mono">Email</h3>
                  <p className="text-muted-foreground font-mono">Let's discuss your project</p>
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
                  className="group bg-card p-8 min-h-[260px] flex flex-col justify-between rounded-lg border border-border hover:border-foreground transition-all duration-500 cursor-pointer hover-lift halo-effect"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-mono">LinkedIn</h3>
                  <p className="text-muted-foreground font-mono">Connect with me professionally</p>
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
                  className="group bg-card p-8 min-h-[260px] flex flex-col justify-between rounded-lg border border-border hover:border-foreground transition-all duration-500 cursor-pointer hover-lift halo-effect"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Github className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-mono">GitHub</h3>
                  <p className="text-muted-foreground font-mono">Check out my code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

