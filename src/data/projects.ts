export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portifólio Pessoal",
    description:
      "Site de portifólio desenvolvido com Next.js, TypeScript e Tailwind CSS, hospedado na Vercel.",
    image: "/images/project-portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://otavio-emanoel-dev.vercel.app/",
    repoUrl: "https://github.com/Otavio-Emanoel/portifolio-pw3",
  },
  {
    id: 2,
    title: "API REST Node.js",
    description:
      "API RESTful construída com Node.js, Express e PostgreSQL com autenticação JWT.",
    image: "/images/project-api.png",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    demoUrl: "#",
    repoUrl: "https://github.com/Otavio-Emanoel",
  },
  {
    id: 3,
    title: "E-commerce Java",
    description:
      "Aplicação de e-commerce desenvolvida com Spring Boot, Hibernate e MySQL.",
    image: "/images/project-ecommerce.png",
    tags: ["Java", "Spring Boot", "MySQL", "Hibernate"],
    demoUrl: "#",
    repoUrl: "https://github.com/Otavio-Emanoel",
  },
  {
    id: 4,
    title: "Dashboard React",
    description:
      "Dashboard administrativo com gráficos, tabelas e filtros dinâmicos usando React e Recharts.",
    image: "/images/project-dashboard.png",
    tags: ["React", "Recharts", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "https://github.com/Otavio-Emanoel",
  },
  {
    id: 5,
    title: "App Mobile React Native",
    description:
      "Aplicativo mobile de gerenciamento de tarefas com autenticação e notificações push.",
    image: "/images/project-mobile.png",
    tags: ["React Native", "Expo", "Firebase"],
    demoUrl: "#",
    repoUrl: "https://github.com/Otavio-Emanoel",
  },
  {
    id: 6,
    title: "Microserviços Docker",
    description:
      "Arquitetura de microserviços com Docker Compose, API Gateway e serviços independentes.",
    image: "/images/project-microservices.png",
    tags: ["Docker", "Node.js", "Redis", "RabbitMQ"],
    demoUrl: "#",
    repoUrl: "https://github.com/Otavio-Emanoel",
  },
];
