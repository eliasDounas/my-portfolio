import ExperienceCard from "./ExpCard";

const experience = [
  {
    date: "JUNE — SEP 2024",
    title: "e-ESJ · Ministère de la Santé et de la Protection Sociale",
    role: "Software Engineer Intern",
    link: "https://santejeunes.ma/",
    description: `
      Collaborated with a cross-functional team to develop the e-ESJ health platform, focusing on patient data management and healthcare services. 
      Engineered a secure user registration and authentication system, designed Figma mockups, and implemented key frontend features. 
      Conducted rigorous code reviews and managed pull requests to ensure the delivery of high-quality UI components.
    `,
    tags: ["Figma", "Next.js", "Tailwind", "Spring Boot"],
  },
];

export default function ExpList() {
  return (
    <div className="grid gap-6 group/outer">
      {experience.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  );
}
