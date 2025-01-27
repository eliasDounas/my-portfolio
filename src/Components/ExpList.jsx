import ExperienceCard from "./ExpCard";

const experience = [
  {
    date: "JUNE — SEP 2024", 
    title: "Stage e-ESJ",
    link: "https://www.sante.gov.ma/Pages/ADM_Centrale/DP.aspx",
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
