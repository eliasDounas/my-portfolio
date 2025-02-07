import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectsCard({
  imageSrc,
  title,
  link,
  description,
  tags,
}) {
  return (
    <div className="group/inner lg:max-w-2xl lg:p-6 lg:hover:bg-gray-900/50 lg:hover:!opacity-100 lg:group-hover/outer:opacity-50 transition-opacity text-white rounded shadow-lg hover:shadow-xl">
      {/* Card Header */}
      <div className="flex items-start gap-4">
        {/* Image */}
        <div
          className="bg-gray-800 rounded h-[70px] w-32 flex-shrink-0 peer-hover:ring-1 ring-slate-500"
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
            className="text-base font-medium cursor-pointer text-white group-hover/inner:text-teal-400 flex items-center gap-2 -mt-1"
          >
            {title}
            <FiArrowUpRight className="transition-transform duration-300 transform -ml-1 -mb-1 group-hover/inner:translate-x-1 group-hover/inner:translate-y-[-3px]" />
          </a>

          <p
            className="text-gray-400 text-sm mt-1"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\n/g, "<br />"),
            }}
          ></p>

          {/* Tags */}
          {tags && (
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
          )}
        </div>
      </div>
    </div>
  );
}
