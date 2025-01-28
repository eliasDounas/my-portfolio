import { useEffect, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const rightSideContainer = document.querySelector(".right-side");
    if (!rightSideContainer) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: rightSideContainer,
        threshold: 0.5,
      }
    );

    rightSideContainer.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  
  return (
    
    <nav className="hidden lg:block sticky top-0 py-4 space-y-6 text-white">
      <a
        href="#about"
        className="group flex items-center space-x-2"
      >
        <span
          className={`h-[1.5px] mr-3 transition-all duration-300 ease-in-out ${
            activeSection === "about" ? "bg-white w-16" : "bg-gray-500 w-8"
          } group-hover:bg-white group-hover:w-16`}
        ></span>
        <span
          className={`text-xs font-medium transition-all duration-300 ease-in-out group-hover:text-white ${
            activeSection === "about"
              ? "text-white"
              : "text-gray-500"
          }`}
        >
          ABOUT
        </span>
      </a>
      <a
        href="#experience"
        className="group flex items-center space-x-2"
      >
        <span
          className={`h-[1.5px] mr-3 transition-all duration-300 ease-in-out ${
            activeSection === "experience" ? "bg-white w-16" : "bg-gray-500 w-8"
          } group-hover:bg-white group-hover:w-16`}
        ></span>
        <span
          className={`text-xs font-medium transition-all duration-300 ease-in-out group-hover:text-white ${
            activeSection === "experience"
              ? "text-white"
              : "text-gray-500"
          }`}
        >
          EXPERIENCE
        </span>
      </a>
      <a
        href="#projects"
        className="group flex items-center space-x-2"
      >
        <span
          className={`h-[1.5px] mr-3 transition-all duration-300 ease-in-out ${
            activeSection === "projects" ? "bg-white w-16" : "bg-gray-500 w-8"
          } group-hover:bg-white group-hover:w-16`}
        ></span>
        <span
          className={`text-xs font-medium transition-all duration-300 ease-in-out group-hover:text-white ${
            activeSection === "projects"
              ? "text-white"
              : "text-gray-500"
          }`}
        >
          PROJECTS
        </span>
      </a>
    </nav>

  );
};

export default Nav;
