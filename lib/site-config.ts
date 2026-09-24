export const brand = {
  name: "Tech Bagwitty",
  fullName: "Ankita Bhagawati",
  location: "Sivasagar, Assam",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#mentoring", label: "Mentoring" },
  { href: "#published", label: "Published" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const social = {
  email: "ankitabhagawati21@gmail.com",
  linkedin: "https://linkedin.com/in/ankita-bhagawati16",
  github: "https://github.com/ankitabhagawati",
  instagram: "https://instagram.com/tech_bagwitty",
  x: "https://x.com/sheisnotboring",
};

// Real posts from instagram.com/tech_bagwitty. Thumbnails are self-hosted
// copies of the real cover images (Instagram's CDN links expire, so they're
// saved to public/instagram/ instead of hotlinked). Swap for newer posts by
// updating the url and re-saving that reel's cover image over the thumb.
export const instagramPosts = [
  { url: "https://www.instagram.com/tech_bagwitty/reel/DdBsMKLBkfF/", thumb: "/instagram/reel-6.jpg" },
  { url: "https://www.instagram.com/tech_bagwitty/reel/DdL_YU3hiDJ/", thumb: "/instagram/reel-2.jpg" },
  { url: "https://www.instagram.com/tech_bagwitty/reel/DcvuErxhAuK/", thumb: "/instagram/reel-3.jpg" },
  { url: "https://www.instagram.com/tech_bagwitty/reel/Dcn_DaZhbuT/", thumb: "/instagram/reel-7.jpg" },
  { url: "https://www.instagram.com/tech_bagwitty/reel/DcPiK7rT0nB/", thumb: "/instagram/reel-8.jpg" },
  { url: "https://www.instagram.com/tech_bagwitty/reel/DbbiAvpT4D9/", thumb: "/instagram/reel-4.jpg" },
  { url: "https://www.instagram.com/tech_bagwitty/reel/DZUzIAETqK6/", thumb: "/instagram/reel-5.jpg" },
  { url: "https://www.instagram.com/tech_bagwitty/reel/DXZml35Etpc/", thumb: "/instagram/reel-1.jpg" },
];

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "Fullstack + AI", label: "Systems & Tooling" },
  { value: "10+", label: "Startups Guided" },
  { value: "50+", label: "Students Mentored" },
];

// Shown on the back of the "For Startup Founders" card in Mentoring.
export const founderApproach = [
  {
    num: "01",
    title: "Discovery & Requirements",
    desc: "We start with what you actually need, not what sounds impressive. Clear goals, constraints, and success criteria before a line of code.",
  },
  {
    num: "02",
    title: "Architecture & AI Strategy",
    desc: "The right stack and structure for your stage. Where AI genuinely helps, we use it; where it doesn't, we skip it.",
  },
  {
    num: "03",
    title: "Development & Iteration",
    desc: "Short cycles, visible progress. You see working software early and steer as we go, no six-month black boxes.",
  },
  {
    num: "04",
    title: "Testing & Launch",
    desc: "Solid testing, clean deploys, and a launch plan that doesn't fall over on day one.",
  },
  {
    num: "05",
    title: "Support & Optimization",
    desc: "Post-launch monitoring, performance tuning, and a roadmap for what to build next.",
  },
];

// Shown on the back of the "For Students & Freshers" card in Mentoring.
export const studentApproach = [
  {
    num: "01",
    title: "Understand Where You Are",
    desc: "Background, current skills, and the specific goal, before deciding what to work on first.",
  },
  {
    num: "02",
    title: "Build a Learning Plan",
    desc: "A focused plan on the skills and projects that actually move the needle for the roles you want.",
  },
  {
    num: "03",
    title: "Practice & Mock Interviews",
    desc: "Real mock interviews and structured practice, not just theory.",
  },
  {
    num: "04",
    title: "Portfolio & Resume",
    desc: "Turn your work into a portfolio and resume that actually gets you interviews.",
  },
  {
    num: "05",
    title: "Interview & Offer Support",
    desc: "Support through the interview process until you land the offer.",
  },
];

export const whatIDo =
  "Software Engineer focused on fullstack development and AI-driven tooling. I ship working software, not proposals.";

export const workHistory = {
  current: {
    company: "Numerator",
    role: "Software Engineer",
    period: "Feb 2026 - Present",
    type: "Full-time",
    href: "https://numerator.com",
    logo: "/logos/numerator.svg",
  },
  previous: [
    {
      company: "Doodleblue Innovations",
      role: "Senior Software Engineer",
      period: "Mar 2025 - Jan 2026",
      type: "Full-time",
      href: "https://doodleblue.com",
      logo: "/logos/doodleblue.png",
    },
    {
      company: "i2e Consulting",
      role: "Software Developer",
      period: "Sep 2021 - Feb 2025",
      href: "https://i2econsulting.com",
      logo: "/logos/i2econsulting.png",
    },
  ],
};

// Shown right after the "Where I Work" block on the About section.
export const sideWork = {
  title: "Outside of work",
  items: [
    {
      key: "freelance",
      title: "Freelance",
      desc: "Software projects for clients.",
    },
    {
      key: "consult",
      title: "Consult businesses on tech",
      desc: "Helping businesses make the right technical calls.",
    },
    {
      key: "mentor",
      title: "Mentor students",
      desc: "Guiding students and freshers into tech careers.",
    },
  ],
};

export const builtProjects = [
  {
    name: "Axom Relief",
    desc: "Social-tech initiative coordinating flood relief in Assam. Partnered with the Sivasagar district administration to help an estimated 2,000 people access aid.",
    href: "https://axomrelief.com",
    logo: "/logos/axomrelief.webp",
    instagram: "https://www.instagram.com/axom.relief/",
    instagramHandle: "axom.relief",
  },
  {
    name: "Jabor - Garbage Tracker",
    desc: "A citizen-first platform for reporting civic issues like garbage dumped in public places, making it easier for people to raise complaints and hold authorities accountable.",
    href: "https://jabor.in",
    logo: "/logos/jabor.png",
    x: "https://x.com/JaborAssam",
    xHandle: "JaborAssam",
  },
];

export const keySkills = [
  "Startup tech strategy",
  "Career mentoring & interview prep",
  "AI-driven development & tooling",
  "Database design & SQL",
  "Communication & Public Speaking",
  "Project management",
];

export const publishedItems = [
  {
    outlet: "Assam Tribune",
    title:
      "Unable to join flood relief, GU student builds website linking aid survivors",
    href: "https://assamtribune.com/guwahati/unable-to-join-flood-relief-gu-student-builds-website-linking-aid-survivors-1615119",
  },
  {
    outlet: "India Today NE",
    title:
      "Two kilometres from help: how Assam's young techies tried to bridge a flood relief gap",
    href: "https://www.indiatodayne.in/assam/story/two-kilometres-from-help-how-assams-young-techies-tried-to-bridge-a-flood-relief-gap-1435105-2026-08-09",
  },
  {
    outlet: "North East Publish",
    title: "Sivasagar engineer develops civic reporting platform: Jabor",
    href: "https://www.facebook.com/northeastpublish/posts/sivasagar-engineer-develops-civic-reporting-platform-jaborsoftware-engineer-anki/1488183033326452/",
  },
  {
    outlet: "moi.sivasagar",
    title:
      "Software engineer Ankita Bhagawati develops Jabor, a citizen-first civic reporting platform",
    href: "https://www.instagram.com/p/Da70FmXif2l/",
  },
];

export const studentTrack = [
  { num: "01", label: "Interview preparation & mock interviews" },
  { num: "02", label: "Project guidance & portfolio building" },
  { num: "03", label: "Resume & profile review" },
  { num: "04", label: "Career direction & role targeting" },
];

export const founderTrack = [
  { num: "01", label: "Tech strategy & roadmap" },
  { num: "02", label: "Architecture decisions" },
  { num: "03", label: "Build-vs-buy guidance" },
  { num: "04", label: "Hands-on technical direction" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  // Leave out when the person has no LinkedIn: a grey, non-clickable icon is shown.
  linkedin?: string;
  // Optional profile picture, e.g. "/testimonials/tonmoy.jpg" (saved in
  // public/testimonials/). Without it, an initials circle is shown.
  photo?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Ankita was a really good experience. She is quick with development, and has a clear understanding of what she wants her code to achieve. Along with coding her another major skill is working together with multiple people and making them all feel like valued members of the team. Would love to work with her again",
    name: "Tonmoy Mahanta",
    role: "Consultant",
    linkedin: "https://www.linkedin.com/in/tonmoy-mahanta-b09367188/",
  },
  {
    quote:
      "She has been such an incredible workmate to build with. She brings thoughtful insights from across different fields and domains, and always adds a unique perspective to the work. Working together was genuinely enjoyable. Honestly, she\u2019s a creative design team\u2019s dream developer.",
    name: "Mrigakshee K",
    role: "UI UX designer",
    linkedin:
      "https://www.linkedin.com/in/mrigakshee-krishnatreya-4419651b6/",
  },
  {
    quote:
      "Being a team mate of Ankita, my observations and follow ups had spoken up to the fact that working with Ankita has always been a good experience. She is a nice girl with a lot of knowledge in tech.",
    name: "Mousikhi Maity",
    role: "Founder, TrulyUr's",
  },
  {
    quote:
      "I really enjoyed working with her. She taught me everything with so much patience and kindness, and explained everything so well. She has a very friendly and supportive nature. I\u2019m genuinely happy that I got the opportunity to work with her. It was a great experience!",
    name: "Farnaz Begum",
    role: "Team mate (AxomRelief)",
  },
  {
    quote:
      "Ankita is a very dedicated and hardworking person. We conducted a session with her under the banner of Open Engineering and she was really good at explaining complex concepts in a simple and easy-to-understand way. She is also doing great work in terms of social contribution through Axom Relief. I truly appreciate her dedication and efforts.",
    name: "Rubul Hoque Choudhury",
    role: "Founder, Open Engineering",
    linkedin: "https://www.linkedin.com/in/rubulhoquechoudhury",
  },
  {
    quote:
      "I had a really good experience learning from Ankita. What I appreciated most was her ability to explain things clearly and patiently, while also encouraging me to think through problems on my own. She has a practical understanding of her domain of work and a genuine willingness to help others learn and grow. Her guidance gave me more clarity and confidence in approaching technical problems, and I\u2019m grateful for the time and effort she put into helping me.",
    name: "Rajdeep Borthakur",
    role: "Colleague",
  },
];

export const faqs = [
  {
    q: "Do you help with interview prep or only technical consulting?",
    a: "Both. For students and freshers I run mock interviews, review resumes, and help build a preparation plan. For founders and teams, I focus on technical consulting: architecture, stack decisions, and hands-on direction.",
  },
  {
    q: "How long is a typical mentoring engagement?",
    a: "It depends on your goals. Some mentees need a single session to unblock a decision; most engagements run 4–8 weeks with weekly check-ins. We'll define the scope together on the first call.",
  },
  {
    q: "What's your tech stack focus?",
    a: "Fullstack development with Angular, .NET, and React, plus AI-driven development and tooling: Python and FastAPI on the backend, with strong database design and SQL foundations.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes, early-stage is my sweet spot. I help founders make build-vs-buy calls, design architecture that won't need a rewrite at scale, and set up pragmatic AI strategies before hiring a full team.",
  },
  {
    q: "Do you work with existing teams, or only new projects?",
    a: "Both. I join existing teams for architecture reviews, stack decisions, and hands-on delivery, and I also take on greenfield builds from scratch.",
  },
  {
    q: "Is this a one-off engagement, or do you offer ongoing advisory?",
    a: "Either. Some founders need a single strategy session to unblock a decision, others keep me on as an ongoing technical advisor. We scope this on the first call.",
  },
  {
    q: "How are fees structured?",
    a: "Mentoring is priced per session or as a package, and startup consulting is scoped per engagement, hourly or fixed-scope. No surprises; everything is agreed upfront.",
  },
];
