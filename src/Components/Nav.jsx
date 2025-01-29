import { useState, useEffect, useRef } from 'react';

const Nav = () => {
  const [activeSection, setActiveSection] = useState("about");
  const lastScrollY = useRef(0);
  const scrollingDown = useRef(true);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      scrollingDown.current = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Special handling for last section (Projects)
          const projectsSection = visibleEntries.find(entry => entry.target.id === 'projects');
          if (projectsSection && projectsSection.intersectionRatio > 0.3) {
            setActiveSection('projects');
            return;
          }

          // For other sections
          const targetEntry = scrollingDown.current
            ? visibleEntries[visibleEntries.length - 1]
            : visibleEntries[0];

          if (targetEntry && targetEntry.intersectionRatio > 0.5) {
            setActiveSection(targetEntry.target.id);
          }
        }
      },
      {
        root: null,
        rootMargin: '-5% 0px -5% 0px', // Reduced margins
        threshold: 0.7 // Added lower threshold for better detection
      }
    );

    // Add small delay to ensure DOM is ready
    setTimeout(() => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach(section => {
        observer.observe(section);
      });
    }, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

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