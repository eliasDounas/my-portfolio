export default function ExperienceCard() {
    return (
      <div className="group max-w-xl p-6 hover:bg-gray-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition duration-100">
        {/* Responsive Layout for Date + Title */}
        <div className="flex flex-col sm:flex-row sm:justify-start gap-4 mb-2">
          {/* Date */}
          <div className="text-gray-500 text-sm min-w-32">2016 — 2017</div>
  
          {/* Title and Content */}
          <div>
            {/* Title */}
            <a
              href="https://scoutstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium group-hover:text-teal-400 hover:underline"
            >
              Developer · Scout Studio
            </a>
  
            {/* Description */}
            <div>
              <p className="text-gray-400 mt-2">
                Collaborated with other student designers and engineers on pro-bono
                projects to create new brands, design systems, and websites for
                organizations in the community.
              </p>
            </div>
  
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-800 text-teal-400 text-xs px-3 py-1 rounded-full">
                Jekyll
              </span>
              <span className="bg-gray-800 text-teal-400 text-xs px-3 py-1 rounded-full">
                SCSS
              </span>
              <span className="bg-gray-800 text-teal-400 text-xs px-3 py-1 rounded-full">
                JavaScript
              </span>
              <span className="bg-gray-800 text-teal-400 text-xs px-3 py-1 rounded-full">
                WordPress
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  