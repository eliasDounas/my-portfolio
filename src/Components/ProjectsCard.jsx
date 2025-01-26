import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectsCard({
  imageSrc,
  title,
  link,
  description,
  tags,
}) {
  return (
    <div className="group/inner max-w-xl p-6 hover:bg-gray-900 hover:!opacity-100 group-hover/outer:opacity-50 transition-opacity text-white rounded shadow-lg hover:shadow-xl cursor-pointer">
      {/* Card Header */}
      <div className="flex items-start gap-4">
        {/* Image */}
        <div
          className="bg-gray-800 rounded-lg h-20 w-32 flex-shrink-0"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md font-semibold text-white group-hover/inner:text-teal-400 flex items-center gap-2"
          >
            {title}
            <FiArrowUpRight className="transition-transform duration-300 transform -ml-1 -mb-1 group-hover/inner:translate-x-1 group-hover/inner:translate-y-[-3px]" />
          </a>

          <p className="text-gray-400 text-sm mt-1">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800 text-teal-400 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
