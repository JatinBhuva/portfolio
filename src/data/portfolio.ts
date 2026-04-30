import type { PortfolioData } from "./types";

export const portfolio: PortfolioData = {
  brand: { name: "JATIN BHUVA" },
  nav: [
    { id: "expertise", label: "Expertise", href: "#expertise" },
    { id: "work", label: "Work", href: "#work" },
    { id: "community", label: "Community", href: "#community" },
    { id: "blog", label: "Blog", href: "#blog" },
  ],
  hero: {
    badge: "REACT NATIVE DEVELOPER",
    heading: "Building high-performance mobile experiences.",
    highlight: "high-performance",
    description:
      "A passionate and results-driven mobile app developer with 3+ years of experience designing, developing, and deploying high-quality React Native applications. I thrive in agile teams and love building scalable, user-first experiences across domains like social, finance, education, IoT, and healthcare.",
    primaryCta: { label: "View my work", href: "#work" },
    secondaryCta: { label: "About me", href: "#expertise" },
    image: {
      src: `${import.meta.env.BASE_URL}20260419_102433-IMG_STYLE~2.jpg`,
      alt: "Portrait of Jatin Bhuva",
    },
  },
  stack: {
    title: "Core Stack",
    description:
      "My engineering focus lies at the intersection of performance and developer experience.",
    items: [
      {
        title: "React Native",
        description:
          "Building complex UI/UX with smooth 60fps animations and platform-aware optimizations.",
        logo: {
          src: "https://reactnative.dev/img/header_logo.svg",
          alt: "React Native logo",
        },
      },
      {
        title: "TypeScript",
        description:
          "End-to-end type safety to reduce runtime errors and improve codebase health.",
        icon: "code",
      },
      {
        title: "Kotlin",
        description:
          "Native Android integrations, performance-sensitive modules, and clean platform abstractions.",
        icon: "android",
      },
      {
        title: "Redux Toolkit",
        description:
          "Predictable state management for complex flows, offline data, and scalable feature ownership.",
        logo: {
          src: "https://redux-toolkit.js.org/img/redux_white.svg",
          alt: "Redux Toolkit (Redux) logo",
          mode: "light",
        },
      },
    ],
  },
  workHistory: {
    title: "Work history",
    description:
      "A snapshot of the roles and responsibilities that shaped my approach to building reliable mobile products.",
    items: [
      {
        company: "TatvaSoft",
        role: "Software Engineer",
        start: "May 2023",
        end: "Present",
        location: "Ahmedabad, India",
        summary: [
          "Built and scaled mobile products used in healthcare and enterprise domains, focusing on seamless user journeys and reliability.",
          "Delivered features like secure digital identity (UAE PASS), real-time chat, and appointment flows, improving user onboarding and engagement.",
          "Translated product requirements into intuitive mobile experiences, ensuring high usability and consistent UX across platforms.",
          "Improved app performance and stability, reducing crashes and enhancing overall user satisfaction and retention.",
          "Collaborated closely with product managers and designers to iterate quickly based on feedback and business goals.",
        ],
        projects: [
          {
            title: "Healthcare Platform",
            subtitle: "Mobile app development",
            images: [
              {
                src: `${import.meta.env.BASE_URL}work/healthcare/epic-hospital-collage.png`,
                alt: "Epic Hospital mobile app screens collage (UAE PASS, appointments, alerts, and patient records)",
              },
            ],
            bullets: [
              "Mobile UI development and product iteration in sprint cycles.",
              "API integrations, unit test writing, and R&D on third‑party integrations.",
              "Core modules: authentication (email/phone/UAE PASS), patient & doctor, appointments, prescriptions.",
            ],
          },
        ],
      },
      {
        company: "Creole Studios",
        role: "Jr. Software Engineer",
        start: "May 2022",
        end: "May 2023",
        summary: [
          "Contributed to building client-facing mobile applications with a focus on delivering business value and smooth user experiences.",
          "Implemented core features and UI flows that improved user interaction and feature adoption.",
          "Worked with cross-functional teams to ensure timely delivery of features aligned with product timelines and priorities.",
          "Supported continuous improvements by fixing bugs and refining flows based on user feedback and testing insights.",
        ],
      },
    ],
  },
  work: {
    title: "Selected Work",
    description: "A curated showcase of mobile engineering excellence.",
    projects: [
      {
        title: "Oncology Intelligence Platform",
        description:
          "Mobile-first oncology intelligence platform enabling researchers and healthcare professionals to explore clinical trials, research insights, and data-driven analytics.",
        tags: ["HEALTHCARE", "DATA ANALYTICS", "REACT NATIVE"],
        image: {
          src: `${import.meta.env.BASE_URL}work/oncology-intelligence/oncology-collage.png`,
          alt: "Oncology intelligence platform mobile screens collage",
        },
        highlights: [
          "Built advanced analytics dashboards with charts, comparisons, and insights.",
          "Developed powerful search & filtering across large clinical datasets.",
          "Built custom native modules for SVG rendering for high-performance visuals.",
          "Worked across Expo and React Native CLI environments; integrated Altcha for secure, bot-protected interactions.",
        ],
        impact: [
          "📊 Simplified complex clinical data exploration.",
          "🔍 Enabled faster research decision-making.",
          "⚡ Improved performance for data-heavy analytics screens.",
        ],
      },
      {
        title: "Healthcare Platform",
        description:
          "Scalable healthcare mobile app focused on secure patient experiences and seamless hospital interaction.",
        tags: ["HEALTHCARE", "REACT NATIVE", "SECURE AUTH"],
        image: {
          src: `${import.meta.env.BASE_URL}work/healthcare/epic-hospital-collage.png`,
          alt: "Epic Hospital mobile app screens collage (UAE PASS, appointments, alerts, and patient records)",
        },
        highlights: [
          "Built flows for appointment booking, prescriptions, and doctor discovery.",
          "Integrated UAE PASS for secure digital identity authentication.",
          "Developed custom native modules for platform-specific capabilities; integrated video consultations using Microsoft Teams.",
          "Designed feature-based modular architecture for scalability.",
        ],
        impact: [
          "⏱️ Reduced feature development time by ~20%.",
          "🔒 Strengthened security for sensitive healthcare data.",
          "🧩 Improved maintainability and reduced duplication.",
        ],
      },
      {
        title: "IoT Smart Energy Platform",
        description:
          "Smart energy management system to monitor solar output, battery usage, and remotely control appliances like AC and geyser.",
        image: {
          src: `${import.meta.env.BASE_URL}work/iot/solarmate-collage.png`,
          alt: "SolarMate IoT smart energy mobile app screens collage",
        },
        tags: ["IOT", "REAL-TIME", "ENERGY"],
        highlights: [
          "Built real-time dashboard for energy flow (solar, grid, battery).",
          "Implemented MQTT-based communication for live device updates.",
          "Used React Native Skia for high-performance custom visualizations.",
          "Enabled remote control and automation of connected devices.",
        ],
        impact: [
          "⚡ Improved visibility into real-time energy consumption.",
          "🔌 Enabled remote device control and automation.",
          "🌱 Supported efficient energy usage.",
        ],
      },
      {
        title: "Finance Management App",
        description:
          "All-in-one financial platform helping users manage learning, planning, banking, and investments.",
        tags: ["FINTECH", "PLANNING", "INVESTMENT"],
        image: {
          src: `${import.meta.env.BASE_URL}work/finance-management/finance-collage.png`,
          alt: "Finance management mobile screens collage",
        },
        highlights: [
          "Built financial planning and transaction modules.",
          "Implemented secure authentication with biometrics and PIN.",
          "Used XState for managing complex financial workflows.",
          "Designed scalable architecture for banking and investment features.",
        ],
        impact: [
          "💰 Simplified financial decision-making.",
          "🔐 Enhanced security for financial data.",
          "📈 Improved user engagement with structured flows.",
        ],
      },
      {
        title: "Event & Appointment Platform",
        description:
          "Smart scheduling platform enabling users to manage appointments, events, reminders, and real-time communication.",
        tags: ["SOCIAL", "REAL-TIME", "SCHEDULING"],
        image: {
          src: `${import.meta.env.BASE_URL}work/event-appointment/event-collage.png`,
          alt: "Event and appointment platform mobile screens collage",
        },
        highlights: [
          "Built event scheduling and reminder systems.",
          "Integrated real-time chat functionality.",
          "Enabled contact-based invitations and interactions.",
          "Focused on engagement-driven UX design.",
        ],
        impact: [
          "📅 Increased user engagement.",
          "💬 Improved real-time communication.",
          "🚀 Delivered scalable scheduling solution.",
        ],
      },
      {
        title: "Sports Social Platform",
        description:
          "Sports-focused social network enabling fan engagement, real-time interaction, and gaming experiences.",
        tags: ["SOCIAL", "GAMING", "CONTENT"],
        image: {
          src: `${import.meta.env.BASE_URL}work/sports-social/sports-social-collage.png`,
          alt: "Sports social platform mobile screens collage",
        },
        highlights: [
          "Built chat, news, and subscription modules.",
          "Developed fantasy gaming and engagement features.",
          "Integrated payments and authentication systems.",
          "Designed for high user interaction and scalability.",
        ],
        impact: [
          "📱 Boosted engagement through gamification.",
          "💬 Enabled active community interaction.",
          "💸 Supported monetization via subscriptions.",
        ],
      },
      {
        title: "PDF Scanner App",
        description:
          "Mobile productivity app for scanning, editing, and generating PDFs from images.",
        tags: ["PRODUCTIVITY", "UTILITY"],
        image: {
          src: `${import.meta.env.BASE_URL}work/pdf-scanner/pdf-scanner-collage.png`,
          alt: "PDF scanner mobile screens collage",
        },
        highlights: [
          "Built document scanning and processing pipeline.",
          "Added filters, signatures, and editing tools.",
          "Implemented PDF export and sharing features.",
          "Optimized performance for fast document handling.",
        ],
        impact: [
          "📄 Simplified document digitization.",
          "⚡ Delivered fast and reliable scanning.",
          "✍️ Improved usability with editing features.",
        ],
      },
      {
        title: "Process Tracking System",
        description:
          "Enterprise system to track multi-stage operational workflows and process lifecycle data.",
        tags: ["ENTERPRISE", "DASHBOARD", "TRACKING"],
        image: {
          src: `${import.meta.env.BASE_URL}work/process-tracking/process-tracking-collage.png`,
          alt: "Process tracking system dashboard screens collage",
        },
        highlights: [
          "Built process tracking dashboards and reporting tools.",
          "Managed multi-stage lifecycle data flows.",
          "Implemented role-based modules for operations.",
          "Focused on data visibility and system reliability.",
        ],
        impact: [
          "📊 Improved operational visibility.",
          "🔄 Streamlined workflow tracking.",
          "🏭 Reduced manual process overhead.",
        ],
      },
    ],
  },
  community: {
    title: "Open Source & Community",
    description:
      "I believe in open-source as the engine of innovation. Beyond client work, I contribute to libraries and maintain specialized utilities.",
    stats: [
      { value: "3+ yrs", label: "Experience" },
      { value: "1800+", label: "Stack Overflow reputation" },
    ],
    items: [
      {
        title: "React Native Code Snippets (VS Code)",
        subtitle: "Microsoft VS Code extension",
        description:
          "VS Code extension designed to accelerate React Native development with reusable snippets, reducing boilerplate and improving workflow efficiency.",
        tags: ["Open Source", "Developer Tool", "VS Code Extension"],
        meta: "⭐ 5 · 6K+ installs",
        linkLabel: "View Extension",
        ctaLabel: "View Extension",
        href: "https://marketplace.visualstudio.com/items?itemName=JatinBhuva.react-native-custom-snippets",
        icon: "terminal",
        emoji: "🧩",
      },
      {
        title: "react-native-svg-render",
        subtitle: "Package for rendering SVGs in React Native workflows",
        description:
          "Lightweight utility package for handling SVG rendering in React Native, enabling better performance and flexibility for custom UI components and visualizations.",
        metaLeft: "Package",
        linkLabel: "View Package",
        ctaLabel: "View Package",
        href: "https://www.npmjs.com/package/react-native-svg-render",
        icon: "deployed_code",
        emoji: "📦",
      },
      {
        title: "Stack Overflow",
        subtitle: "Helping devs by answering and sharing solutions",
        description:
          "Actively contribute by solving real-world development problems, sharing knowledge around React Native, performance optimization, and mobile architecture.",
        metaLeft: "Community",
        meta: "1900+ rep",
        linkLabel: "View Profile",
        ctaLabel: "View Profile",
        href: "https://stackoverflow.com/users/19572222/jatin-bhuva",
        icon: "forum",
        emoji: "💬",
      },
      {
        title: "GitHub",
        subtitle: "Projects, experiments, and open-source contributions",
        description:
          "Actively build and maintain projects focused on React Native, performance optimizations, and reusable architectures. Contribute utilities and experiments that improve developer productivity and app scalability.",
        metaLeft: "Code",
        meta: "Open source",
        linkLabel: "View Profile",
        href: "https://github.com/JatinBhuva",
        icon: "code",
        emoji: "🐙",
      },
    ],
  },
  blog: {
    title: "Latest technical insights",
    description: "Deep dives into the React Native ecosystem.",
    viewAllHref: "https://medium.com/@jatinbhuva",
    posts: [
      {
        category: "VS Code",
        title: "Creating custom snippets of react-native for VS-Code",
        description:
          "Create your own React Native snippets in VS Code to speed up repetitive UI and boilerplate work.",
        href: "https://medium.com/@jatinbhuva/creating-custom-snippets-of-react-native-for-vs-code-35bd01de1504",
        image: {
          src: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*UtlExBvq-N9MjZEd_6TQMw.png",
          alt: "Blog thumbnail: Creating custom snippets of react-native for VS-Code",
        },
      },
      {
        category: "React",
        title:
          "Exploring the power of React: Calling the child component’s function from the Parent component",
        description:
          "How to call a child component function from a parent using `forwardRef` + `useImperativeHandle`.",
        href: "https://medium.com/@jatinbhuva/exploring-the-power-of-react-calling-the-child-components-function-from-the-parent-component-5fc2fb4afd33",
        image: {
          src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4rkmlmmAxXGsjBNlEgmQQA.png",
          alt: "Blog thumbnail: Calling child component functions from a parent component",
        },
      },
      {
        category: "Security",
        title:
          "Securing Android React Native Apps: Detect USB Debugging & Developer Options using TurboModules + JSI + Codegen",
        description:
          "Detect Developer Options and USB Debugging on Android with React Native New Architecture (TurboModules + JSI + Codegen).",
        href: "https://medium.com/@jatinbhuva/securing-android-react-native-apps-detect-usb-debugging-developer-options-using-turbomodules-1d0a2cb3cd45",
        image: {
          src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*pTsqnVJlWGlwTkdCSk8dyg.png",
          alt: "Blog thumbnail: Securing Android React Native apps using TurboModules",
        },
      },
    ],
  },
  contact: {
    title: "Ready to build something amazing?",
    description:
      "I'm currently available for freelance projects and high-impact full-time roles in mobile engineering.",
    email: "bhuvajatin252@gmail.com",
    emailjs: {
      serviceId: "jatin_mobile",
      templateId: "template_okjka8k",
      publicKey: "snKY5dHm9cA6QNvep",
    },
    links: [
      { label: "GitHub", href: "https://github.com/JatinBhuva", icon: "code" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/jatin-bhuva",
        icon: "person",
      },
      {
        label: "Medium",
        href: "https://medium.com/@jatinbhuva",
        icon: "article",
      },
    ],
  },
  footer: {
    tagline: "ARCHITECTURAL CURATOR",
    links: [
      { label: "GitHub", href: "https://github.com/JatinBhuva" },
      { label: "LinkedIn", href: "https://linkedin.com/in/jatin-bhuva" },
      { label: "Medium", href: "https://medium.com/@jatinbhuva" },
      { label: "Email", href: "mailto:bhuvajatin252@gmail.com" },
    ],
    copyright: `© ${new Date().getFullYear()} JATIN BHUVA. ALL RIGHTS RESERVED.`,
  },
};
