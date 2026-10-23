export type ResumeJob = {
  org: string;
  title?: string;
  dates: string;
  href?: string;
  blurb?: string;
  bullets: string[];
};

export type ResumeEducation = {
  left: string;
  dates?: string;
  bullets: string[];
};

export type ResumeSkillGroup = {
  label: string;
  items: string;
};

export const resume = {
  name: "Ariella Wolpin",
  location: "Seattle, WA",
  linkedin: "https://www.linkedin.com/in/ariellawolpin",
  summary:
    "Full-stack Software Engineer with 7+ years of experience translating ambiguous problems into intuitive customer experiences through strong technical judgment, creative thinking, and cross-functional collaboration.",
  skills: [
    {
      label: "Languages/Frameworks",
      items: "Python, TypeScript, JavaScript, C#, SQL, Django, React, Node.js",
    },
    {
      label: "APIs/Integrations",
      items: "REST, GraphQL, gRPC, OAuth2, SAML, SSO, Webhooks",
    },
    {
      label: "Cloud/Infra",
      items: "AWS, Lambda, SNS, S3, Kubernetes, Redis, Celery",
    },
    {
      label: "Testing & Reliability",
      items:
        "Pytest, Cypress, Jest, Unit/E2E Testing, Sentry, production debugging",
    },
    {
      label: "AI-Assisted Development",
      items: "Claude Code, Github Copilot, Cursor",
    },
  ],
  experience: [
    {
      org: "Personal Sabbatical",
      dates: "April 2025 - May 2026",
      bullets: [
        "Intentional time off to pursue creative work and reboot! Completed and substantially revised my first novel while developing a deeper practice of iterative learning and problem-solving. Built Trial & Eclair, a recipe development application with role-based workflows, using AI-assisted code generation.",
      ],
    },
    {
      org: "Zapier",
      href: "https://zapier.com",
      title: "Full-stack Software Engineer | Remote",
      dates: "October 2022 - March 2025",
      blurb:
        "Automated workflows platform with 7,000+ integrations that support 3M+ users",
      bullets: [
        "Resolved 2,000+ failed user-data deletion requests ahead of a SOC 2 audit by tracing errors across deleted database tables, Django Signals, billing domain, and third-party services",
        "Built full-stack identity management using Python and Typescript, improving reliability and usability of authentication and authorization workflows across the entire product",
        "Owner for IdP-initiated SSO integrations: evaluated vendor constraints, implemented integrations, and served as a technical bridge between Engineering and Community Marketing",
        "Led an invite email redesign that increased average invitation acceptance by 3.7%; identified a design constraint early that would have degraded performance and partnered with Design and Product to reduce risk while preserving the core value of the redesign",
        "Mentored a junior engineer transitioning from support by helping them develop full-stack skills, take technical ownership, and build confidence in engineering discussions",
      ],
    },
    {
      org: "Carta",
      href: "https://carta.com",
      title: "Software Engineer | Hybrid",
      dates: "October 2020 - May 2022",
      blurb: "Equity and ownership management platform serving 2.5M+ users",
      bullets: [
        "Designed and built a third-party financial-data pipeline that replaced manual quarterly collection and review by fitting external financial data into the platform's existing data model",
        "Developed a company-merge workflow that preserved source data and audit trails, reducing a three-hour manual process to one click, saving approximately 1,080 associate hours annually",
      ],
    },
    {
      org: "Lighter Capital",
      href: "https://www.lightercapital.com",
      title: "Software Engineer | Seattle, WA",
      dates: "January 2019 - October 2020",
      blurb: "Web application for non-dilutive financing and revenue-based loans",
      bullets: [
        "Led the design and implementation of a modular AWS-based data pipeline using Lambda, SNS, and S3 to establish a reusable foundation for future financial-data integrations",
        "Redesigned a third-party API integration to use webhooks, reducing errors by 60% and improving reliability of downstream workflows",
      ],
    },
    {
      org: "Microsoft",
      title: "Software Engineer | Redmond, WA",
      dates: "January 2018 - December 2018",
      bullets: [
        "Developed APIs to pull, store and process data from 20+ teams into a C# and JavaScript dashboard used to manage the Windows Update pipeline which received 14K+ views/month",
      ],
    },
  ] satisfies ResumeJob[],
  education: [
    {
      left: "Lewis & Clark College | B.A., German Studies | Portland, OR",
      bullets: [],
    },
  ] satisfies ResumeEducation[],
  interests:
    "learning how to write novels, baking elaborate birthday cakes, my dog, making people laugh",
} as const;
