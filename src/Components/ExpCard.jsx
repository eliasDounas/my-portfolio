import { FiArrowUpRight } from "react-icons/fi";

export default function ExperienceCard({
  date,
  title,
  link,
  description,
  tags,
}) {
    return (
      <div className="group/inner max-w-xl p-6 hover:bg-gray-900/50 hover:!opacity-100 group-hover/outer:opacity-50 transition-opacity text-white rounded shadow-lg hover:shadow-xl cursor-pointer">
        {/* Responsive Layout for Date + Title */}
        <div className="flex flex-col sm:flex-row sm:justify-start gap-4 mb-2">
          {/* Date */}
          <div className="text-gray-500 text-xs min-w-32">{date}</div>
  
          {/* Title and Content */}
          <div>
            {/* Title */}
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-white group-hover/inner:text-teal-400 flex items-center gap-2 -mt-1"
          >
            {title}
            <FiArrowUpRight className="transition-transform duration-300 transform -ml-1 -mb-1 group-hover/inner:translate-x-1 group-hover/inner:translate-y-[-3px]" />
          </a>
  
            {/* Description */}
            <div>
              <p className="text-sm text-gray-400 mt-2">
              {description}
              </p>
            </div>
  
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
  