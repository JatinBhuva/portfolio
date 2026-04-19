import type { PortfolioData } from './types'

export const portfolio: PortfolioData = {
  brand: { name: 'JATIN BHUVA' },
  nav: [
    { id: 'expertise', label: 'Expertise', href: '#expertise' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'community', label: 'Community', href: '#community' },
    { id: 'blog', label: 'Blog', href: '#blog' },
  ],
  hero: {
    badge: 'REACT NATIVE DEVELOPER',
    heading: 'Building high-performance mobile experiences.',
    highlight: 'high-performance',
    description:
      'A passionate and results-driven mobile app developer with 3+ years of experience designing, developing, and deploying high-quality React Native applications. I thrive in agile teams and love building scalable, user-first experiences across domains like social, finance, education, IoT, and healthcare.',
    primaryCta: { label: 'View my work', href: '#work' },
    secondaryCta: { label: 'About me', href: '#expertise' },
    image: {
      src: `${import.meta.env.BASE_URL}20260419_102433-IMG_STYLE~2.jpg`,
      alt: 'Portrait of Jatin Bhuva',
    },
  },
  stack: {
    title: 'Core Stack',
    description:
      'My engineering focus lies at the intersection of performance and developer experience.',
    items: [
      {
        title: 'React Native',
        description:
          'Building complex UI/UX with smooth 60fps animations and platform-aware optimizations.',
        logo: {
          src: 'https://reactnative.dev/img/header_logo.svg',
          alt: 'React Native logo',
        },
      },
      {
        title: 'TypeScript',
        description:
          'End-to-end type safety to reduce runtime errors and improve codebase health.',
        icon: 'code',
      },
      {
        title: 'Kotlin',
        description:
          'Native Android integrations, performance-sensitive modules, and clean platform abstractions.',
        icon: 'android',
      },
      {
        title: 'Redux Toolkit',
        description:
          'Predictable state management for complex flows, offline data, and scalable feature ownership.',
        logo: {
          src: 'https://redux-toolkit.js.org/img/redux_white.svg',
          alt: 'Redux Toolkit (Redux) logo',
          mode: 'light',
        },
      },
    ],
  },
  workHistory: {
    title: 'Work history',
    description:
      'A snapshot of the roles and responsibilities that shaped my approach to building reliable mobile products.',
    items: [
      {
        company: 'TatvaSoft',
        role: 'Software Engineer',
        start: 'May 2023',
        end: 'Present',
        location: 'Ahmedabad, Gujarat, India',
        summary: [
          'Designing and developing a React Native application with various third‑party tools and libraries.',
          'Spearheaded integrations including CometChat, Stream Chat, UAE PASS, and Firebase; worked with GraphQL, XState, MQTT, Skia, and AWS AppSync.',
          'Collaborated in Agile sprints with cross‑functional teams to scope work and ship features on schedule.',
        ],
        projects: [
          {
            title: 'Healthcare Platform',
            subtitle: 'Mobile app development',
            images: [
              {
                src: `${import.meta.env.BASE_URL}work/healthcare/uae-pass-login.jpeg`,
                alt: 'Healthcare platform login screen with UAE PASS sign-in',
              },
              {
                src: `${import.meta.env.BASE_URL}work/healthcare/uae-pass-splash.jpeg`,
                alt: 'UAE PASS splash screen',
              },
              {
                src: `${import.meta.env.BASE_URL}work/healthcare/uae-pass-staging.jpeg`,
                alt: 'UAE PASS staging sandbox verification screen',
              },
              {
                src: `${import.meta.env.BASE_URL}work/healthcare/uae-pass-alert.jpeg`,
                alt: 'UAE PASS login request alert screen',
              },
            ],
            bullets: [
              'Mobile UI development and product iteration in sprint cycles.',
              'API integrations, unit test writing, and R&D on third‑party integrations.',
              'Core modules: authentication (email/phone/UAE PASS), patient & doctor, appointments, prescriptions.',
            ],
          },
        ],
      },
      {
        company: 'Creole Studios',
        role: 'Jr. Software Engineer',
        start: 'May 2022',
        end: 'May 2023',
      },
    ],
  },
  work: {
    title: 'Selected Work',
    description: 'A curated showcase of mobile engineering excellence.',
    projects: [
      {
        title: 'Healthcare Platform',
        description:
          'React Native healthcare platform with UAE PASS authentication, third‑party chat integration, and a scalable module-based architecture for patient/doctor flows.',
        tags: ['HEALTHCARE', 'REACT NATIVE', 'UAE PASS'],
        image: {
          src: `${import.meta.env.BASE_URL}work/healthcare/uae-pass-login.jpeg`,
          alt: 'Healthcare platform login screen with UAE PASS sign-in',
        },
      },
      {
        title: 'Secure React Native App',
        description:
          'Implemented USB Debugging & Developer Option detection using TurboModules + Codegen.',
        tags: ['SECURITY', 'REACT NATIVE'],
        image: {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-RytPCKY-npzqg8vctgT7zbLqJdNOaJBHciuqRYE8JPHssnjKeiS7SB7mEV-F3nm-snKserbHGKq3CFoqMWVtGcnZqTn2XzWZ0Tl82ANb6Sp-TlBZMoBOEcCwisIw2AyieFYbt3msIVhpp0fsJu-8boSsd-WF0mqhHEChYPQx7t3qD2JmsydCM03DcprwMhiDJjRq-iWls-NkypTSiXWDO3_Kql6TN-GIO21Zvsal3qa4ew387dgpqqz3Eho9bnLiZkz8p77blLg',
          alt: 'Mobile UI preview for a secure React Native application',
        },
      },
      {
        title: 'Finance Management App',
        description:
          'Banking + Investing + Financial Education app with auto investment features.',
        tags: ['FINTECH', 'MOBILE'],
        image: {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEmZtYjIzFAgF-A2VetbMhaImEyeXtNDjwhBGiW4eiKgzZAGF1bej1P0sR6XLfu0fKpApmJ7zHGOuR3f-wAhra0JYweM5XTL_KrSM4pEOsfdlbpw3g75Eyn5EsbR4m3ELKLnpOeSGhLHjx00DHPqqrCjchpfNRHY0wewfCGa-MQKMtotDdmCglErIZLrak3UYZDIxUwHBSXnlT5xks6IXyCf3jXvq5mFSxouvaVyeSV0NX-VfZbo6zEEKo_zS_O7pYJ69Ctk0VEiU',
          alt: 'Mobile UI preview for a finance management application',
        },
      },
      {
        title: 'IoT Smart Home',
        description:
          'Monitors solar output, remotely controls AC/geyser, and manages battery sharing.',
        tags: ['IOT', 'AUTOMATION'],
      },
      {
        title: 'Event & Appointment',
        description:
          'Scheduling for digital & physical events, reminders, chat, and phonebook sync.',
        tags: ['SCHEDULING', 'CHAT'],
      },
      {
        title: 'Logistics Tracker',
        description:
          'Shipment tracking, contract management, and instant delivery updates.',
        tags: ['LOGISTICS', 'TRACKING'],
      },
      {
        title: 'PDF Generator',
        description:
          'Converts images to PDF with filters, orientation, and digital signature support.',
        tags: ['TOOLS', 'DOCUMENTS'],
      },
    ],
  },
  community: {
    title: 'Open Source & Community',
    description:
      'I believe in open-source as the engine of innovation. Beyond client work, I contribute to libraries and maintain specialized utilities.',
    stats: [
      { value: '3+ yrs', label: 'Experience' },
      { value: '1800+', label: 'Stack Overflow reputation' },
    ],
    items: [
      {
        title: 'React Native Code Snippets (VS Code)',
        subtitle: 'Microsoft VS Code extension',
        description:
          'VS Code extension designed to speed up React Native development with reusable snippets, reducing boilerplate and improving workflow efficiency.',
        tags: ['Open Source', 'Developer Tool', 'VS Code Extension'],
        meta: '⭐ 4.8 · 6K+ installs',
        linkLabel: 'View Extension',
        ctaLabel: 'View Extension',
        href: 'https://marketplace.visualstudio.com/items?itemName=JatinBhuva.react-native-custom-snippets',
        icon: 'terminal',
      },
      {
        title: 'react-native-svg-render',
        subtitle: 'Package for rendering SVGs in React Native workflows',
        metaLeft: 'Package',
        linkLabel: 'View package',
        icon: 'deployed_code',
      },
      {
        title: 'Stack Overflow',
        subtitle: 'Helping devs by answering and sharing solutions',
        metaLeft: 'Community',
        linkLabel: 'View profile',
        icon: 'forum',
      },
      {
        title: 'GitHub',
        subtitle: 'Projects, experiments, and open-source contributions',
        metaLeft: 'Code',
        linkLabel: 'View profile',
        href: 'https://github.com/JatinBhuva',
        icon: 'code',
      },
    ],
  },
  blog: {
    title: 'Latest technical insights',
    description: 'Deep dives into the React Native ecosystem.',
    viewAllHref: 'https://medium.com/@jatinbhuva',
    posts: [
      {
        category: 'VS Code',
        title: 'Creating custom snippets of react-native for VS-Code',
        description:
          'Create your own React Native snippets in VS Code to speed up repetitive UI and boilerplate work.',
        href: 'https://medium.com/@jatinbhuva/creating-custom-snippets-of-react-native-for-vs-code-35bd01de1504',
        image: {
          src: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*UtlExBvq-N9MjZEd_6TQMw.png',
          alt: 'Blog thumbnail: Creating custom snippets of react-native for VS-Code',
        },
      },
      {
        category: 'React',
        title:
          'Exploring the power of React: Calling the child component’s function from the Parent component',
        description:
          'How to call a child component function from a parent using `forwardRef` + `useImperativeHandle`.',
        href: 'https://medium.com/@jatinbhuva/exploring-the-power-of-react-calling-the-child-components-function-from-the-parent-component-5fc2fb4afd33',
        image: {
          src: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4rkmlmmAxXGsjBNlEgmQQA.png',
          alt: 'Blog thumbnail: Calling child component functions from a parent component',
        },
      },
      {
        category: 'Security',
        title:
          'Securing Android React Native Apps: Detect USB Debugging & Developer Options using TurboModules + JSI + Codegen',
        description:
          'Detect Developer Options and USB Debugging on Android with React Native New Architecture (TurboModules + JSI + Codegen).',
        href: 'https://medium.com/@jatinbhuva/securing-android-react-native-apps-detect-usb-debugging-developer-options-using-turbomodules-1d0a2cb3cd45',
        image: {
          src: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*pTsqnVJlWGlwTkdCSk8dyg.png',
          alt: 'Blog thumbnail: Securing Android React Native apps using TurboModules',
        },
      },
    ],
  },
  contact: {
    title: 'Ready to build something amazing?',
    description:
      "I'm currently available for freelance projects and high-impact full-time roles in mobile engineering.",
    email: 'bhuvajatin252@gmail.com',
    emailjs: {
      serviceId: 'jatin_mobile',
      templateId: 'template_okjka8k',
      publicKey: 'snKY5dHm9cA6QNvep',
    },
    links: [
      { label: 'GitHub', href: 'https://github.com/JatinBhuva', icon: 'code' },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/jatin-bhuva',
        icon: 'person',
      },
      { label: 'Medium', href: 'https://medium.com/@jatinbhuva', icon: 'article' },
    ],
  },
  footer: {
    tagline: 'ARCHITECTURAL CURATOR',
    links: [
      { label: 'GitHub', href: 'https://github.com/JatinBhuva' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/jatin-bhuva' },
      { label: 'Medium', href: 'https://medium.com/@jatinbhuva' },
      { label: 'Email', href: 'mailto:bhuvajatin252@gmail.com' },
    ],
    copyright: `© ${new Date().getFullYear()} JATIN BHUVA. ALL RIGHTS RESERVED.`,
  },
}
