import ProjectsCard from "./ProjectsCard";

const projects = [
  {
    imageSrc: "/twitter.jpg",
    title: "Twitter Clone Project",
    link: "https://github.com/eliasDounas/Social-Media-App",
    description: "Built a fully responsive Twitter clone with modern features, including authentication, secure profile management system, dark/light mode, and interactive functionalities like notifications, likes, comments, saves, reposts, and follows.",
    tags: ["TypeScript", "Next.js", "Next Auth", "Tailwind", "Prisma", "MongoDB"],
  },
  {
    imageSrc: "/pitstop.jpg",
    title: "Automated the deployment and monitoring of the Pitstop microservices application",
    link: "https://gitlab.com/devopsgrp31",
    description: "Tools: CI/CD pipeline (GitLab CI), GitOps (ArgoCD), Kubernetes, Security (Vault), Monitoring and Logging (Prometheus, EFK stack: Elasticsearch, Fluentd, Kibana).",
  },
  {
    imageSrc: "/e-ESJ.webp",
    title: "e-ESJ",
    link: "https://github.com/dahhou-ilyas/module1",
    description: "Contributed to designing and implementing a secure user authentication system, creating Figma mockups for the interface, and developing key frontend features to enhance the user experience of the e-Espace Santé Jeune digital platform.",
    tags: ["Figma", "Next.js", "React", "Tailwind", "Spring Boot"],
  },
  {
    imageSrc: "/containers.webp",
    title: "Development and Deployment of a 3-Tier Web Application",
    link: "https://github.com/eliasDounas/mini-projet-conteneurisation",
    description: "In the context of learning application containerization, developed a 3-tier web application for managing students and their grades, featuring functionalities like adding students, displaying grade lists, and visualizing averages with highlights.\nTools: Docker, Docker Swarm, Kubernetes, Helm, Skaffold, Traefik.",
    tags: ["React", "Spring Boot", "PostgreSQL"]
  },
  {
    imageSrc: "/hotel.webp",
    title: "Hotel Reservation Website",
    link: "https://github.com/eliasDounas/hotelReservation-website",
    description: "Developed a hotel reservation website with features like room booking, date selection, promo code integration, and user authentication. Designed a responsive layout for seamless user experience and implemented secure booking management to streamline the reservation process.",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
  }
];

export default function ProjectsList() {
  return (
    <div className="grid gap-12 lg:gap-6 group/outer">
      {projects.map((project, index) => (
        <ProjectsCard key={index} {...project} />
      ))}
    </div>
  );
}
