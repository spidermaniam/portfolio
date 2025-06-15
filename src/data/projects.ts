
export const projects = [
  {
    id: "cardhint",
    title: "CardHint",
    description:
      "CardHint offers real-time suggestions, probability calculations, and a user-friendly interface to help players of all skill levels improve their game. It features a responsive design for seamless use on desktop and mobile devices. The backend is powered by a custom algorithm that analyzes game states to provide optimal moves, all built with a modern React and TypeScript stack.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop&crop=center",
    link: "https://cardhint.com/",
    github: "#",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    featured: true,
    keyFeatures: [
      "Real-time Hints",
      "Probability Analysis",
      "Responsive Design",
      "Custom Game Algorithm",
    ],
  },
  {
    id: "3d-printer-hmi",
    title: "3D Printer HMI",
    description:
      "A full-stack Human Machine Interface providing a sleek web dashboard to manage 3D printers. Key features include live camera feeds via MJPEG-streamer, real-time temperature and progress monitoring, G-code file management, and remote print control. The responsive frontend is built with React, communicating with a Flask backend that interfaces with the Moonraker API for seamless printer control.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop&crop=center",
    link: "#",
    github: "#",
    technologies: ["React", "Flask", "Python", "Moonraker API"],
    featured: true,
    keyFeatures: [
      "Live Camera Feed",
      "Remote Print Control",
      "Real-time Monitoring",
      "Flask & Moonraker API",
    ],
  },
  {
    id: "test-automation-framework",
    title: "Test Automation Framework",
    description:
      "A robust framework to automate end-to-end testing for hardware devices. Using Python with Selenium and Pytest, it orchestrates complex test scenarios, validates hardware-software interactions, and generates detailed reports. Integrated with AWS for scalable, parallel test execution, this framework significantly improved test coverage and reduced manual testing cycles by over 50%.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center",
    link: "#",
    github: "#",
    technologies: ["Python", "Selenium", "Pytest", "AWS"],
    featured: false,
    keyFeatures: [
      "End-to-end Automation",
      "Detailed Reporting",
      "Scalable AWS Integration",
      "Pytest & Selenium",
    ],
  },
];

export type Project = (typeof projects)[number];
