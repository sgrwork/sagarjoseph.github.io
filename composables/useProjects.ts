const projects = [
  {
    slug: "hippo",
    id: "002",
    title: "Hippo Books",
    cardTitle: "Hippo",
    cardDescription: "Accounting Software",
    bgColor: "bg-[#7CC3F3A6]",
    client: "Debito.qa",
    years: "2022 - 2024",
    intro: [
      "I was tasked with designing and developing a companion retail accounting app to complement Debito's existing business suite. The result was a multi-user Progressive Web App (PWA) with offline-first capabilities, built using Vue.js to ensure a seamless and reliable user experience.",
    ],
    team: ["1 x Project Manager", "1 x Accountant", "1 x Developer | My Role"],
    tenure: "Q4 2023 - Q1 2025",
    screenshots: [
      "/img/projects/hippo/debito-hippo-1.jpg",
      "/img/projects/hippo/debito-hippo-2.jpg",
      "/img/projects/hippo/debito-hippo-3.jpg",
      "/img/projects/hippo/debito-hippo-4.jpg",
    ],
    goals: [
      "1. Automate the entry of sales and inventory data to reduce manual workload for retail clients.",
      "2. Design an intuitive UI that simplifies complex financial data into clear, actionable reports for both accountants and store managers.",
      "3. Enable real-time, multi-user collaboration to provide a centralized view of business health, specifically for retail chains with multiple locations.",
    ],
    stack: {
      tech: [
        { name: "Quasar", icon: "material-icon-theme:quasar", color: "text-[#00B4FF]" },
        { name: "Vue JS", icon: "material-icon-theme:vue", color: "text-[#41B883]" },
        { name: "Node JS", icon: "material-icon-theme:nodejs", color: "text-[#8CC84B]" },
        { name: "Dexie JS", icon: "material-icon-theme:database", color: "" },
      ],
      description: [
        "We leveraged the Quasar Framework (Vue.js) to accelerate development, building on a tech stack our team had successfully deployed in the past.",
        "To enable the app's core requirement of real-time multi-user collaboration, I integrated Dexie.js cloud sync, which proved to be a robust and efficient solution.",
        "The backend was built on a scalable Node.js and Express architecture with a multi-tenant MongoDB database, ensuring seamless integration with Debito's existing POS and inventory applications to create a unified data ecosystem.",
      ],
    },
    summary: [
      "We began with an agile approach, developing an MVP to gather early client feedback and allow for rapid iteration. This process was crucial as the project's scope evolved significantly based on user needs and technical discoveries.",
      "A key strategic decision was pivoting from a complex multi-application model to a single, unified solution. While we initially planned to offer tailored apps for different client sizes, we recognized that a single, streamlined model would reduce complexity and shorten training times for our primary user base of mid-to-large supermarkets.",
      "The most significant technical challenge was shifting the application from an offline-first model to a fully collaborative, multi-user PWA. To achieve this, I integrated Dexie.js cloud sync, which fit seamlessly into our stack. This required a complex data migration due to schema changes for primary keys, which I successfully navigated despite the interconnected nature of accounting records.",
      "The project was a major success. We onboarded all customers on schedule, and the platform's reliability and feature set were key factors in growing Debito's client base from 200 retail chains in 2023 to over 500 by the end of 2024.",
    ],
    nextProjectSlug: "spark",
  },
  {
    slug: "spark",
    id: "001",
    title: "Spark POS",
    cardTitle: "Spark",
    cardDescription: "Retail Point of Sale",
    bgColor: "bg-[#847CF3A6]",
    client: "Debito.qa",
    years: "2021 - 2024",
    intro: [
      "As my first project with the Debito team, I was tasked with rebuilding their legacy Point of Sale system from the ground up, introducing modern technologies and critical new features to serve a growing client base.",
    ],
    team: ["1 x Project Manager", "1 x Systems & Integration Engineer", "1 x Lead Developer | My Role"],
    tenure: "Q4 2021 - Q4 2024",
    screenshots: [
      "/img/projects/spark/debito-spark-1.jpg",
      "/img/projects/spark/debito-spark-2.jpg",
      "/img/projects/spark/debito-spark-3.jpg",
      "/img/projects/spark/debito-spark-4.jpg",
    ],
    goals: [
      "1. Rebuild a legacy Point of Sale system with a modern tech stack to improve performance and enable new integrations.",
      "2. Deliver a highly intuitive, offline-first UI to minimize staff training time and ensure uninterrupted operation in any retail environment.",
      "3. Achieve 100% client migration from the legacy software to the new platform, ensuring a seamless transition with no data loss.",
    ],
    stack: {
      tech: [
        { name: "Quasar", icon: "material-icon-theme:quasar", color: "text-[#00B4FF]" },
        { name: "Vue JS", icon: "material-icon-theme:vue", color: "text-[#41B883]" },
        { name: "Node JS", icon: "material-icon-theme:nodejs", color: "text-[#8CC84B]" },
        { name: "Dexie JS", icon: "material-icon-theme:database", color: "" },
      ],
      description: [
        "The frontend was built with Vue.js and the Quasar Framework, chosen for its robust component library and our team's familiarity, which enabled rapid development.",
        "For the core offline-first requirement, I implemented Dexie.js to manage all client-side storage and data synchronization, ensuring the app remained fully functional without a network connection.",
        "The backend runs on a Node.js and Express stack with a multi-tenant MongoDB database, a flexible architecture I chose to support customization for diverse retail industries.",
      ],
    },
    summary: [
      "The project began by carefully re-engineering the legacy POS system's core features onto a modern platform. After delivering a solid MVP, we rolled it out to select clients, using their early feedback to drive rapid and targeted improvements.",
      "As the lead developer, I was responsible for the core application architecture and feature development. To solve the critical need for data reliability, I developed custom middleware for Dexie.js that created a robust event-tracking and restoration system within IndexedDB. To address the challenge of remote customer support, I built a separate registry application that allowed our support staff to manage device configurations remotely, significantly improving response times.",
      "The UI/UX was designed for extreme simplicity to accommodate high staff turnover in retail, ensuring new employees could be trained quickly. The multi-tenant database architecture I implemented provided the flexibility to serve a wide range of industries, from laundries to wholesale traders.",
      "The app launched successfully in early 2022, and we smoothly migrated over 80 clients from the legacy system. By the end of 2024, the platform's stability and scalability had enabled the client base to grow to over 500 retail chains, processing more than 10 million transactions.",
    ],
    nextProjectSlug: "hippo",
  },
];

export const useProjects = () => {
  return { projects };
};