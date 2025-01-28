"use client";
import ThemeSwitch from "../Components/ThemeSwitch";
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
  const leftSide = useRef(null);
  const rightSide = useRef(null);

  const handleScroll = () => {
    if (leftSide.current && rightSide.current) {
      rightSide.current.scrollTop = leftSide.current.scrollTop;
    }
  };
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
    <div className="h-screen overflow-y-auto">
      <div className="container h-full mx-auto max-w-6xl px-6 sm:px-10 md:px-14  xl:px-0">
        <div className="lg:grid lg:grid-cols-5 h-full lg:gap-20 xl:gap-40">
          <div ref={leftSide} className="col-span-2 mt-10 lg:mt-20 overflow-auto"
          onScroll={handleScroll}>
            <NameBio />
            <Nav /> 
            <Socials />
            <div ref={auraRef} className="mouse-aura hidden sm:block" />
          </div>
          <div
          ref={rightSide}
            className="
              right-side
              lg:col-span-3  
              overflow-auto
              no-scrollbar
              scroll-smooth
          "
          >
            <section id="about" className="pt-16 lg:pt-20 lg:max-w-2xl">
              <h3 className="font-semibold text-lg text-white mb-6 lg:hidden">About</h3>
              <About />
            </section>
            
            <section id="experience" className="pt-20">
                <h3 className="font-semibold text-lg text-white mb-6 lg:hidden">Experience </h3>
                <ExperienceList />
                <ViewResume />
            </section>
            <section id="projects" className="pt-20">
                <h3 className="font-semibold text-lg text-white mb-6 lg:hidden">Projects</h3>
                <ProjectsList />
                
            </section>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}


