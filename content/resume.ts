export type ResumeJob = {
  org: string;
  title: string;
  dates: string;
  href?: string;
  blurb?: string;
  bullets: string[];
};

export type ResumeEducation = {
  left: string;
  dates: string;
  bullets: string[];
};

export type ResumeSkillGroup = {
  label: string;
  items: string;
};

export const resume = {
  name: "Ariella Wolpin",
  email: "ariwolpin@gmail.com",
  location: "Seattle, WA",
  linkedin: "https://www.linkedin.com/in/ariellawolpin",
  summary:
    "Tenacious and adaptive problem solver, thrilled to write maintainable, readable and scalable code. Able to communicate across teams effectively, ensuring technical clarity of requirements and quick resolutions, while sharing a laugh or pet picture. Deep focus on the customer with a strong aptitude to consider multiple perspectives. Passionate about fostering inclusive team cohesion and morale.",
  skills: [
    {
      label: "Languages/Protocols",
      items: "Python, Typescript, Javascript, SQL, Django, React, Node.js, C#",
    },
    {
      label: "Software/Tools",
      items:
        "API integrations, REST, GraphQL, Git, Jira, Kubernetes, Looker, OAuth2, SAML, SSO, Redis, AWS, Unit and E2E testing (Pytest, Cypress, Jest), Sentry, Celery",
    },
    {
      label: "Soft",
      items:
        "documentation, translating technical speak, glue work, navigating (and improving) legacy code",
    },
  ],
  experience: [
    {
      org: "Zapier",
      href: "https://zapier.com",
      title: "Full-stack Software Engineer",
      dates: "October 2022 - March 2025",
      blurb:
        "Automated workflows platform with 7000+ integrations that support 3M+ unique users",
      bullets: [
        "Full-stack development using Python, React, Typescript, and Node.js to increase reliability and usability for identity management access across entire product for internal and external use",
        "Resolved 2000+ user deletion failures, implementing improvements which allowed the company to pass audits under the SOC2 framework ensuring compliance with the GDPR/CCPA.",
        "Collaborated with product and design to iteratively plan new features and prioritize improvements while considering user experience, security risks, and potential blockers",
      ],
    },
    {
      org: "Carta",
      href: "https://carta.com",
      title: "Software Engineer",
      dates: "October 2020 - May 2022",
      blurb:
        "Global ownership management platform to manage equity with 2.5+ million users",
      bullets: [
        "Full-stack development using Python, React, Typescript, Django and Postgres to automate processes in an investment portfolio product",
        "Designed and developed a company merge feature with full test coverage, automating a 3 hour manual process with a single click, resulting in 1080 associate hours saved per year",
        "Designed and implemented third party API integration to fit into existing database structure and replace manual quarterly data collection and review process",
      ],
    },
    {
      org: "Lighter Capital",
      href: "https://www.lightercapital.com",
      title: "Software Engineer",
      dates: "January 2019 - October 2020",
      blurb: "Web application for non-dilutive financing and revenue based loans",
      bullets: [
        "Full-stack development using React/Redux, C#, and SQL to create data driven customer platform",
        "Designed and led development of modular feature to pull and transform third party financial data utilizing multiple AWS services including SNS, Lambdas and S3 buckets",
        "Redesigned third party API integration to utilize webhooks resulting in 60% reduction in errors",
      ],
    },
    {
      org: "Microsoft",
      title: "Software Engineer",
      dates: "January 2018 - December 2018",
      bullets: [
        "Developed and maintained dashboard in C# and Javascript used to manage entire pipeline of Windows updates, from initial bug to post-release monitoring, with 14K+ views/month",
        "Consumed and created internal Web APIs to pull, store and process raw data from 20+ teams",
      ],
    },
  ] satisfies ResumeJob[],
  education: [
    {
      left: "Registered Apprenticeship via Washington Technology\nIndustry Association – Seattle, WA",
      dates: "Fall 2017",
      bullets: [
        "Classroom and on-the-job SWE training w/focus on Python and C#",
      ],
    },
    {
      left: "Lewis & Clark College – Portland, OR",
      dates: "B.A. May 2010",
      bullets: ["German Studies Major, Religious Studies Minor"],
    },
  ] satisfies ResumeEducation[],
  interests:
    "learning how to write a novel, arts & crafts projects (mostly gluing things together), walking my dog, rearranging my plant wall, making people laugh",
} as const;
