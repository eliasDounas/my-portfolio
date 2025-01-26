import ProjectsCard from "./ProjectsCard";

const projects = [
  {
    imageSrc: "/dbadm.jpg", // Replace with your image URL
    title: "brittanychiang.com (v4)",
    link: "https://brittanychiang.com",
    description: "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks",
    tags: ["Gatsby", "Styled Components", "Netlify"],
  },
  {
    imageSrc: "https://via.placeholder.com/150",
    title: "Another Project",
    link: "https://example.com",
    description: "A cool project description goes here.",
    tags: ["React", "Tailwind", "Vercel"],
  },
  // Add more projects here
];

export default function ProjectsList() {
  return (
    <div className="grid gap-6 group/outer">
      {projects.map((project, index) => (
        <ProjectsCard key={index} {...project} />
      ))}
    </div>
  );
}
