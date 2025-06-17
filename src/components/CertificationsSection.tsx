
const CertificationsSection = () => {
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
    <section id="certifications" className="section-padding bg-section-certifications-bg text-section-certifications-text-primary relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-section-certifications-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-section-certifications-accent/70 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-section-certifications-accent">
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
            {certifications.map((cert, index) => (
              <div key={index} className="scroll-animate">
                <div className="bg-section-certifications-card-bg/80 text-section-certifications-card-foreground backdrop-blur-sm p-6 rounded-xl border border-section-certifications-border/50 hover:border-section-certifications-accent/70 transition-all duration-500 hover:shadow-xl hover:shadow-section-certifications-accent/10 group h-full halo-effect">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-section-certifications-accent/20 to-section-certifications-accent/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl text-section-certifications-accent">🎓</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 group-hover:text-section-certifications-accent transition-colors">{cert.title}</h4>
                  <p className="text-section-certifications-accent font-medium mb-2">{cert.provider}</p>
                  <p className="text-sm text-section-certifications-text-secondary">{cert.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
