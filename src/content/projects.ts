/**
 * Your case studies live here. Each object becomes a row on the home page
 * and a page at /work/<slug>. The order here is the order on the site.
 *
 * Fields marked TODO are placeholders — replace them with your real story.
 * Media lives in /public/work/<slug>/.
 */

export type Media =
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      /** Long full-page screenshots: shown in a scrollable browser frame */
      tall?: boolean;
      caption?: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      label: string; // describes the video for screen readers
      caption?: string;
    };

export type CaseSection = {
  heading: string;
  body: string[];
  media?: Media[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  platform: string;
  /** What you did on the project, shown as small tags on the home page */
  tags?: string[];
  year: string;
  cover?: { src: string; alt: string };
  /** Featured projects get a large row on the home page; the rest go in "More work" */
  featured?: boolean;
  /** Under NDA: listed on the home page, but no case study page */
  confidential?: boolean;
  sections: CaseSection[];
};

const img = (
  slug: string,
  file: string,
  alt: string,
  width: number,
  height: number,
  extra: { tall?: boolean; caption?: string } = {},
): Media => ({ type: "image", src: `/work/${slug}/${file}`, alt, width, height, ...extra });

export const projects: Project[] = [
  {
    slug: "gabaysakuna",
    featured: true,
    title: "GabaySakuna",
    tagline:
      "A web and mobile disaster management system for the Legazpi City DRRMO, with an Adopt-a-Neighbor feature that connects evacuees with verified temporary shelters.",
    role: "Lead UI/UX Designer, Lead Developer & Project Manager",
    platform: "Web and mobile (Android)",
    tags: ["UX research", "Design system", "Web + mobile", "Project lead"],
    year: "2025",
    cover: {
      src: "/work/gabaysakuna/cover.webp",
      alt: "GabaySakuna homepage showing the live evacuation map of Legazpi City",
    },
    sections: [
      {
        heading: "The problem",
        body: [
          "Legazpi City sits on Albay's eastern seaboard, below Mayon Volcano. Its 209,533 residents face three to five typhoons a year, plus tsunami and eruption risk.",
          "When we started, the city's disaster office (DRRMO) shared announcements on its Facebook page and relayed them to barangays through Messenger group chats, falling back to two-way radios when power and internet went down. Evacuation centers reported headcounts by email, group chat, and paper, often only after the disaster had passed.",
          "Two problems made this worse. Some residents wouldn't leave home until a disaster was already underway, because they feared losing their property. And evacuation centers didn't have room for everyone when they did.",
        ],
      },
      {
        heading: "My role",
        body: [
          "This was our capstone project at FEU Institute of Technology, built for the Legazpi City DRRMO by a team of five. I was the lead UI/UX designer, lead developer, and project manager.",
          "I designed the web and mobile interfaces in Figma and built the design system they share. I also ran the project in Agile Scrum sprints (backlog refinement, sprint planning, development, and reviews) and facilitated meetings with our client.",
        ],
      },
      {
        heading: "Research",
        body: [
          "We started with interviews and follow-ups with the DRRMO to understand how information and evacuation data actually moved during a disaster, then mapped the root causes in an Ishikawa diagram. Surveys with potential users covered their experience with disasters, what they do before, during, and after one, the challenges they face during evacuation, and the tools they already rely on.",
          "That gave us three users with very different jobs: residents who need to stay informed and get help, barangay officials who run evacuation centers, and DRRMO staff who coordinate the whole city.",
        ],
      },
      {
        heading: "Designing for the worst day",
        body: [
          "A disaster app gets used when the power is out, the signal is weak, and people are scared. That shaped four decisions:",
          "**Split the product by role.** Residents get a focused Android app. Barangay officials and DRRMO staff work on the web, where they have room for maps, tables, and records. Anyone can open the public homepage to see announcements and the evacuation and incident maps without an account.",
          "**Make offline the default for critical content.** Preparedness guides, emergency hotlines, and the evacuation center map are cached on the phone after the first visit, so they still open when the internet doesn't.",
          "**Make reports trustworthy.** Incident reports only accept a live camera photo, the photo's location has to match where the user is, and nearby reports of the same incident are clustered together. Responders see one verified incident instead of a pile of duplicates.",
          "**Turn neighbors into shelter.** Adopt-a-Neighbor lets owners of disaster-resilient private buildings volunteer as temporary shelters. The DRRMO approves each one, both sides verify the match, and chat is limited to users in the same barangay. It adds capacity when evacuation centers fill up, and gives hesitant residents a closer place to go.",
        ],
      },
      {
        heading: "The web platform",
        body: [
          "The public homepage shows announcements, incident reports, and evacuation shelter capacity on live maps. Admins, super admins, and barangay users each get a role-based dashboard to manage incidents and responders, publish announcements to the whole city or a single barangay, and moderate the missing persons and pets hub.",
          "Evacuation center monitoring replaced the email and paper headcounts. Barangay officials check evacuees in and out, and each center's capacity updates on the map in real time.",
        ],
        media: [
          {
            type: "video",
            src: "/work/gabaysakuna/website-demo.mp4",
            poster: "/work/gabaysakuna/web-poster.webp",
            label: "Walkthrough of the GabaySakuna web platform: homepage maps, admin dashboard, incident management, announcements, and missing persons",
            caption: "Web platform walkthrough",
          },
        ],
      },
      {
        heading: "The mobile app",
        body: [
          "Residents sign up with a national ID and their barangay, then get push notifications for city and barangay announcements. From the home screen they can call emergency hotlines, report an incident with a live photo, post or search for missing persons and pets, view the incident and evacuation maps, and request or offer shelter through Adopt-a-Neighbor.",
        ],
        media: [
          {
            type: "video",
            src: "/work/gabaysakuna/mobile-demo.mp4",
            poster: "/work/gabaysakuna/mobile-poster.webp",
            label: "Walkthrough of the GabaySakuna mobile app: sign-up, home, incident reports, missing persons and pets, and Adopt-a-Neighbor",
            caption: "Mobile app walkthrough",
          },
        ],
      },
      {
        heading: "Testing and results",
        body: [
          "We ran three rounds of testing between April and June 2025. Announcements, live chat, and ID verification failed the first round and passed the second; offline access took until the third.",
          "For the final evaluation, 30 residents, 5 barangay officials, and 5 IT experts used the system face to face or over video call, then rated it on the FURPS model (functionality, usability, reliability, performance, and supportability). GabaySakuna scored 4.28 out of 5 overall. Usability was rated 4.59 (Excellent) by residents, 4.40 by barangay officials, and 4.16 by IT experts.",
        ],
      },
      {
        heading: "What I'd improve next",
        body: [
          "The lowest scores point to the next round of work. Residents gave 3.43 for the app working correctly every time, so stability comes first. IT experts gave 3.80 for completing tasks without instructions, which matches feedback that the admin dashboard is hard to navigate.",
          "Next, I'd redesign the dashboard with clearer hierarchy, color-coded priority labels, and filters by date, incident type, status, and evacuation center, plus a guided first run for new admins. Beyond that: an iOS version, and smarter Adopt-a-Neighbor matching that accounts for family size, special needs, pets, and distance.",
        ],
      },
    ],
  },
  {
    slug: "whimsy-game-cafe",
    featured: true,
    title: "Whimsy Game Cafe",
    tagline:
      "A website for a tabletop gaming cafe in Mandaluyong: events, table reservations, menu, and an admin side for staff.",
    role: "UI/UX Designer",
    platform: "Responsive web",
    tags: ["UX research", "Wireframes", "UI design", "Prototype"],
    year: "2025",
    cover: {
      src: "/work/whimsy/cover.webp",
      alt: "Whimsy Game Cafe homepage hero reading Something a bit more whimsical",
    },
    sections: [
      {
        heading: "Overview",
        body: [
          "A concept website for Whimsy Game Cafe, designed to showcase its tabletop games, card game events, miniatures, food and drinks, and table reservations in one experience.",
        ],
      },
      {
        heading: "The problem",
        body: [
          "Gaming cafés need to communicate a wide range of information, from games and events to reservations and menus, while also reflecting the atmosphere that makes the space inviting. Many websites either prioritize function over personality or become visually cluttered.",
          "This project explores how a whimsical visual identity can be combined with clear, intuitive navigation.",
        ],
      },
      {
        heading: "Goal",
        body: [
          "Help visitors understand the cafe, discover events, reserve a table, and find essential information quickly.",
        ],
      },
      {
        heading: "My role",
        body: ["UI/UX designer: UX research, wireframing, UI design, prototyping, and the design system."],
      },
      {
        heading: "The customer site",
        body: [
          "The homepage leads with the cafe itself, then the things people come for: upcoming events, reserving a table, the menu, and how to get there. The events page separates today's events, upcoming ones, and past events so regulars can find what's next without scrolling through history.",
        ],
        media: [
          img("whimsy", "home.webp", "Full Whimsy homepage: hero, game brands, upcoming events, table reservation, about, gallery, menu, and contact", 1440, 4794, { tall: true, caption: "Homepage — scroll inside the frame" }),
          img("whimsy", "events.webp", "Events page with events for today, upcoming events, and old events", 1440, 1912, { tall: true, caption: "Events" }),
        ],
      },
      {
        heading: "The admin side",
        body: [
          "Staff get a dashboard with table availability and today's reservations at a glance, a floor plan for assigning tables, and an event list with status tags for finished, upcoming, and canceled events.",
        ],
        media: [
          img("whimsy", "admin-dashboard.webp", "Admin dashboard with table counts, a calendar, and today's reservations", 1600, 900),
          img("whimsy", "table-reservation.webp", "Table reservation screen with a first-floor plan and selected table 10G", 1600, 900),
          img("whimsy", "event-management.webp", "Event management table with status tags and edit actions", 1600, 900),
        ],
      },
      {
        heading: "Design system",
        body: [
          "A purple brand palette with an accent yellow for calls to action, and status colors (orange for reserved, green for available, blue for events) reused across the dashboard. Trend Sans One carries headlines and navigation; Roboto Mono handles event details and data.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "A polished concept demonstrating an end-to-end experience for a gaming cafe, focused on usability, visual consistency, and easy access to high-priority actions.",
        ],
      },
    ],
  },
  {
    slug: "trabawho",
    featured: true,
    title: "TrabaWHO",
    tagline:
      "A mobile marketplace that matches clients with verified workers for on-demand jobs like cooking, housekeeping, and repairs.",
    role: "UI/UX Designer",
    platform: "Mobile app",
    tags: ["User flows", "Prototype", "Design system"],
    year: "2024",
    cover: {
      src: "/work/trabawho/cover.webp",
      alt: "Three TrabaWHO screens: the Need a job done welcome screen, the list of nearby job profiles, and a worker's profile",
    },
    sections: [
      {
        heading: "The problem",
        body: [
          "TODO: Why is finding someone for a small, short-term job hard today? Think about how people find a cook, gardener, or electrician now, and what goes wrong (trust, pricing, getting paid).",
        ],
      },
      {
        heading: "Two sides, one app",
        body: [
          "TrabaWHO serves two people with different goals: clients who need a job done, and service providers looking for work. After onboarding, a single question splits the app into two experiences: find a job, or find someone for the job.",
          "Sign-up includes a profile setup with document uploads (a valid government ID, CV, and police clearance) so workers can be verified before clients book them.",
        ],
        media: [
          img("trabawho", "onboarding.webp", "Onboarding: the welcome screen, the choice between finding a job or finding someone, and profile setup with document uploads", 2000, 1384, { caption: "Onboarding and verification" }),
        ],
      },
      {
        heading: "Hiring a worker",
        body: [
          "Clients browse job profiles sorted by distance, each showing the role, location, experience, and hourly rate. A worker's profile collects what a client needs to decide: highlights, skills, experience, a career portfolio, rates, and feedback from past clients. Booking happens on one screen: pick the dates and times, set the offered rate, and describe the job.",
        ],
        media: [
          img("trabawho", "client-hiring.webp", "Client flow: job profiles list, a worker's profile, and the booking details form", 2000, 1384, { caption: "Browse, review, book" }),
        ],
      },
      {
        heading: "Paying and tracking the job",
        body: [
          "Payment is split into a 50% down payment and the remaining balance, with the commission shown in the invoice so there are no surprises. Clients can pay with the TrabaWHO wallet, GCash, Maya, bank transfer, or card. A three-step tracker (job accepted, down payment, job completed) shows where the job stands, and the final payment is released when the work is done.",
          "TODO: Why split payments this way? What problem does it solve for clients and for workers?",
        ],
        media: [
          img("trabawho", "payment-status.webp", "Payment page with invoice and payment options, and the job status tracker after payment is released", 1900, 1912, { caption: "Payment and job status" }),
        ],
      },
      {
        heading: "The service provider side",
        body: [
          "Workers see nearby listings with an Apply Now button, a dashboard with their earnings, current job progress, and calendar, and Boosts they can subscribe to for more job slots. A carabao mascot appears in confirmations and empty moments to keep the tone friendly and local.",
        ],
        media: [
          img("trabawho", "service-provider.webp", "Service provider screens: job listings, the earnings dashboard, and Boosts subscriptions", 2000, 1384, { caption: "Listings, dashboard, and Boosts" }),
        ],
      },
      {
        heading: "Outcome",
        body: ["TODO: Was it tested with users? Presented or awarded? What would you change next?"],
      },
    ],
  },
  {
    slug: "bantay-bata-163",
    title: "Bantay Bata 163 app",
    tagline: "A mobile app for donors and concerned citizens: donate, report a case, or call the hotline in a few taps.",
    role: "UI/UX Designer",
    platform: "Mobile app",
    tags: ["Mobile UI", "Dashboard"],
    year: "TODO",
    cover: {
      src: "/work/bantay-bata/cover.webp",
      alt: "Three Bantay Bata 163 app screens: login, home with quick actions, and donor dashboard",
    },
    sections: [
      {
        heading: "Context",
        body: ["TODO: Was this a concept, a class project, or a client brief? Who is the app for?"],
      },
      {
        heading: "The problem",
        body: ["TODO: What's hard today about donating, reporting a case, or reaching the hotline?"],
      },
      {
        heading: "What I designed",
        body: [
          "The home screen puts four actions up front: donor dashboard, quick report, emergency hotline, and donate. The donor dashboard shows total donations, children helped, and a donation trend so donors can see their impact.",
        ],
        media: [img("bantay-bata", "screens.webp", "Login, home, and donor dashboard screens", 500, 500)],
      },
      { heading: "Outcome", body: ["TODO"] },
    ],
  },
  {
    slug: "onerepmax",
    title: "OneRepMax PH",
    tagline: "A landing page for a Filipino sports supplement brand.",
    role: "UI/UX Designer",
    platform: "Web",
    tags: ["Landing page", "Visual design"],
    year: "TODO",
    cover: {
      src: "/work/onerepmax/cover.webp",
      alt: "OneRepMax PH landing page hero reading Push your one rep max",
    },
    sections: [
      {
        heading: "Context",
        body: ["TODO: Concept or client? Who's the target customer?"],
      },
      {
        heading: "The design",
        body: [
          "A dark, high-contrast page with yellow for calls to action. The page moves from the hero to best sellers, then reasons to trust the brand, then athlete testimonials. TODO: explain why you chose this order.",
        ],
        media: [img("onerepmax", "landing.webp", "Full OneRepMax PH landing page", 1440, 3216, { tall: true, caption: "Landing page — scroll inside the frame" })],
      },
      { heading: "Outcome", body: ["TODO"] },
    ],
  },
  {
    slug: "headphones-product-page",
    title: "Headphones product page",
    tagline: "An e-commerce product page for premium noise-cancelling headphones.",
    role: "UI/UX Designer",
    platform: "Web",
    tags: ["E-commerce", "UI design"],
    year: "TODO",
    cover: {
      src: "/work/headphones/cover.webp",
      alt: "Product page with a headphone gallery, price, color options, and add to cart",
    },
    sections: [
      {
        heading: "Context",
        body: ["TODO: What was the brief?"],
      },
      {
        heading: "The design",
        body: [
          "The page keeps the buying decision above the fold: gallery, price, rating, color, and add to cart. Below are feature highlights, shipping and warranty tabs, and reviews with customer photos. TODO: explain one decision in detail.",
        ],
        media: [img("headphones", "product-page.webp", "Full headphones product page", 1440, 4087, { tall: true, caption: "Product page — scroll inside the frame" })],
      },
      { heading: "Outcome", body: ["TODO"] },
    ],
  },
  {
    slug: "calcmenu",
    title: "CalcMenu",
    tagline:
      "End-to-end SaaS features and a reusable design system, designed during my internship. Details are under NDA, and I'm happy to walk through my process in an interview.",
    role: "UI/UX Design Intern",
    platform: "SaaS web app",
    tags: ["SaaS", "Design system", "Developer handoff"],
    year: "2026",
    confidential: true,
    sections: [],
  },
];

/** Projects that have a public case study page */
export const publicProjects = projects.filter((p) => !p.confidential);

export function getProject(slug: string) {
  return publicProjects.find((p) => p.slug === slug);
}
