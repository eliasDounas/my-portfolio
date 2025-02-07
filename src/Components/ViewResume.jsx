import { FiArrowUpRight } from "react-icons/fi";

export const ViewResume = () => {
  const resumeLink = "/CV-Elias-Dounas.pdf";

  return (
    <a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-base font-medium lg:px-6 text-white hover:text-teal-400 flex items-center gap-2 mt-7 lg:mt-5"
    >
      View Full Résumé
      <FiArrowUpRight className="transition-transform duration-300 transform -ml-1 -mb-1 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
};
