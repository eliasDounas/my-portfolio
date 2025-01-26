import { useEffect, useState } from 'react';

const Nav = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    // Get the .right-side container
    const rightSideContainer = document.querySelector(".right-side");
    if (!rightSideContainer) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Active section: ${entry.target.id}`);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: rightSideContainer, 
        threshold: 0.7,
      }
    );

    // Observe each section in the right-side container
    rightSideContainer.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex">
      <div className="left-side w-1/4">
        <nav className="sticky top-0 py-4">
          <a
            href="#about"
            className={`block py-2 px-4 ${
              activeSection === "about" ? "bg-red-200" : ""
            }`}
          >
            About
          </a>
          <a
            href="#experience"
            className={`block py-2 px-4 ${
              activeSection === "experience" ? "bg-red-200" : ""
            }`}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={`block py-2 px-4 ${
              activeSection === "projects" ? "bg-red-200" : ""
            }`}
          >
            Projects
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
