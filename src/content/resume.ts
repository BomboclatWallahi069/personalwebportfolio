/**
 * Resume content, from FALCULAN_RESUME_SEPT2026.pdf.
 * Phone number and home address are left off the web page on purpose
 * (they're in the downloadable PDF in /public/resume.pdf).
 */

export const resume = {
  pdf: "/resume.pdf",
  pdfDownloadName: "Johnlien-Falculan-Resume.pdf",
  summary:
    "UI/UX designer experienced in SaaS and digital product design using Figma. Skilled in user research, wireframing, prototyping, UI design, design systems, responsive design, and developer handoff. Experienced in translating user and business requirements into functional interfaces.",

  experience: [
    {
      org: "CalcMenu Philippines",
      place: "Pasig City",
      role: "UI/UX Designer",
      period: "Jan 2026 – Jul 2026",
      points: [
        "Designed end-to-end SaaS features by translating business requirements into wireframes, high-fidelity mockups, and interactive prototypes, enabling faster feature validation.",
        "Built and maintained a reusable design system that improved design consistency and accelerated collaboration across product teams.",
        "Collaborated with developers through detailed design handoff and iterative feedback, ensuring accurate implementation and reducing design revisions.",
        "Redesigned user flows and interfaces to improve usability while aligning user needs with business and technical requirements.",
      ],
    },
  ],

  education: [
    {
      org: "FEU Institute of Technology",
      place: "Sampaloc, Manila",
      role: "BS Information Technology, specialized in Web and Mobile Applications",
      period: "Aug 2022 – Sep 2026",
      points: [
        "President's Scholarship for exceptional academic merit at the time of university entry",
        "TICAP Student's Choice Award",
        "Top 10 Finalist, Philippine Startup Challenge X (NCR)",
        "Best Pitch Presentation, Philippine Startup Challenge X (NCR)",
      ],
    },
  ],

  projects: [
    {
      name: "GabaySakuna",
      description: "Disaster risk management platform",
      role: "Lead UI/UX Designer, Lead Developer & Project Manager",
      href: "/work/gabaysakuna",
      points: [
        "Designed responsive web and mobile interfaces in Figma, creating intuitive user flows for disaster reporting and community response features.",
        "Developed reusable components and a scalable design system, ensuring consistency across multiple application screens.",
        "Led project planning by facilitating stakeholder meetings, organizing Agile sprints, and coordinating a multidisciplinary team to deliver project milestones on schedule.",
      ],
    },
    {
      name: "TrabaWHO",
      description: "Job finding platform focused on small gigs and work",
      role: "UI/UX Designer",
      href: "/work/trabawho",
      points: [
        "Designed responsive web and mobile interfaces based on user requirements, improving navigation and overall user experience.",
        "Created wireframes, high-fidelity mockups, and interactive prototypes to validate workflows before development.",
        "Established reusable UI components and design system elements to maintain consistency across the platform.",
      ],
    },
    {
      name: "Whimsy Game Cafe",
      description: "Table management and reservation website",
      role: "UI/UX Designer",
      href: "/work/whimsy-game-cafe",
      points: [
        "Designed a responsive reservation and table management interface that simplified customer booking workflows.",
        "Produced wireframes, high-fidelity mockups, and interactive prototypes to validate usability before development.",
        "Built reusable UI components to maintain visual consistency and improve design efficiency.",
      ],
    },
  ],

  skills: [
    {
      group: "UI/UX design",
      items: [
        "UI design",
        "UX design",
        "User-centered design",
        "User research",
        "Wireframing",
        "High-fidelity mockups",
        "Interactive prototyping",
        "Responsive design",
        "Design systems",
        "UI components",
        "User flows",
      ],
    },
    { group: "Tools", items: ["Figma", "Framer", "Figma Make", "Figma Motion", "Canva"] },
    {
      group: "Additional",
      items: ["Developer handoff", "Agile project coordination", "Stakeholder collaboration", "Project management"],
    },
  ],

  certifications: [
    "PMI Project Management Ready",
    "Cisco Certified DevNet Associate",
    "IT Specialist – JavaScript",
    "IT Specialist – Python",
    "IT Specialist – Networking",
  ],
};
