import { useState, useEffect } from 'react';

const Nav = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const rightSideContainer = document.querySelector(".right-side");
    if (!rightSideContainer) {
      return; // Exit early if right-side container is not found
    }

    // Initialize the IntersectionObserver to detect section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set the active section if the section is in view (intersection ratio above 50%)
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, 
        threshold: 0.3,
      }
    );

    rightSideContainer.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // NavLink component for each section link
  const NavLink = ({ id, label }) => (
    <a
      href={`#${id}`}
      className="group flex items-center space-x-2"
    >
      <span
        className={`h-[1.5px] mr-3 transition-all duration-300 ease-in-out ${
          activeSection === id ? "bg-white w-16" : "bg-gray-500 w-8"
        } group-hover:bg-white group-hover:w-16`}
      />
      <span
        className={`text-xs font-medium transition-all duration-300 ease-in-out group-hover:text-white ${
          activeSection === id ? "text-white" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </a>
  );

  return (
    <nav className="hidden lg:block sticky top-0 py-4 space-y-6 text-white max-w-40">
      <NavLink id="about" label="ABOUT" />
      <NavLink id="experience" label="EXPERIENCE" />
      <NavLink id="projects" label="PROJECTS" />
    </nav>
  );
};

export default Nav;
