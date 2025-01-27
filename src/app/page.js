"use client";
import ThemeSwitch from "../Components/ThemeSwitch";
import BlobAnimation from "../Components/BlobAnimation";
import { useEffect, useRef } from "react";
import NameBio from "../Components/NameBio";
import Nav from "@/Components/Nav";
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
    <div className="h-screen overflow-y-auto">
      <div className="container h-full mx-auto max-w-6xl px-10">
        <div className="lg:grid lg:grid-cols-5 h-full lg:gap-20 xl:gap-40">
          <div className="col-span-2 mt-14 lg:mt-20">
            <NameBio />
            <Nav /> 
            <Socials />
            <div ref={auraRef} className="mouse-aura hidden sm:block" />
          </div>
          <div
            className="
              right-side
              lg:col-span-3  
              overflow-y-auto
              no-scrollbar
              scroll-smooth
          "
          >
            <section id="about" className="pt-16 lg:pt-20 lg:max-w-xl">
              <h3 className="font-semibold text-lg text-white mb-6 lg:hidden">About</h3>
              <p className="text-gray-400 lg:px-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe enim suscipit officia fuga velit nesciunt fugit voluptas ipsum? Culpa asperiores maxime doloribus enim facere repellendus alias iure dolorem ex pariatur! 
                Epellendus reprehenderit enim?...LoremLorem ipsum dolor, sit amet
                consectetur adipisicing elit. Totam qui et in voluptas voluptatibus iusto atque hic quidem assumenda
                eaque reiciendis, expedita beatae distinctio sapiente modi
                mollitia illo, earum sint?Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Totam qui et in voluptas
                voluptatibus iusto atque hic quidem assumenda eaque reiciendis,
                expedita beatae distinctio sapiente modi mollitia illo, earum
                sint?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Totam qui et in voluptas voluptatibus iusto atque hic quidem
                assumenda eaque reiciendis, expedita beatae distinctio sapiente
                modi mollitia illo, earum sint?Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Totam qui et in voluptas
                voluptatibus iusto atque hic quidem assumenda eaque reiciendis,
                expedita beatae distinctio sapiente modi mollitia illo, earum
                sint?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
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


