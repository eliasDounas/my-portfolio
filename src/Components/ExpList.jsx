import ExperienceCard from "./ExpCard";

const experience = [
  {
    date: "2016 — 2017", 
    title: "brittanychiang.com (v4)",
    link: "https://brittanychiang.com",
    description: "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks",
    tags: ["Gatsby", "Styled Components", "Netlify"],
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
