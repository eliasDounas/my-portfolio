"use client";

import BlobAnimation from "../Components/BlobAnimation";
import { useEffect, useRef } from "react";
import NameBio from "../Components/NameBio";
import Nav from "@/Components/Nav";
import { About } from "@/Components/About";
import ProjectsList from "@/Components/ProjectsList";
import ExperienceList from "@/Components/ExpList";
import { ViewResume } from "@/Components/ViewResume";
import { Footer } from "@/Components/Footer";
import Socials from "@/Components/Socials";

export default function Home() {
  const auraRef = useRef(null);

  useEffect(() => {
    const updateAuraPosition = (e) => {
      if (auraRef.current) {
        auraRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        auraRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("pointermove", updateAuraPosition);

    return () => {
      window.removeEventListener("pointermove", updateAuraPosition);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col lg:flex-row scroll-smooth">
        {/* Left Sticky Sidebar */}
        <div className="block lg:sticky lg:top-0 lg:left-0 lg:max-w-md xl:max-w-xl p-6 sm:p-10 lg:py-20 lg:pl-12 xl:px-20 h-auto lg:h-screen ">
          <NameBio />
          <Nav />
          <Socials />
          <div ref={auraRef} className="mouse-aura hidden sm:block" />
        </div>

        {/* Right Scrollable Content */}
        <div className="right-side flex-1 px-6 sm:px-10 w-full">
          {/* About Section */}
          <section id="about" className="pt-16 lg:pt-20 lg:max-w-2xl ">
            <h3 className="font-semibold text-lg text-white mb-6 lg:hidden">
              About
            </h3>
            <About />
          </section>

          {/* Experience Section */}
          <section id="experience" className="pt-28">
            <h3 className="font-semibold text-lg text-white mb-6 lg:hidden">
              Experience
            </h3>
            <ExperienceList />
            <ViewResume />
          </section>

          {/* Projects Section */}
          <section id="projects" className="pt-20">
            <h3 className="font-semibold text-lg text-white mb-6 lg:hidden">
              Projects
            </h3>
            <ProjectsList />
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
