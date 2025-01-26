"use client";
import ThemeSwitch from "../Components/ThemeSwitch";
import BlobAnimation from "../Components/BlobAnimation";
import { useEffect, useRef } from "react";
import NameBio from "../Components/NameBio";
import Nav from "@/Components/Nav";
import ProjectsList from "@/Components/ProjectsList";
import ExperienceCard from "@/Components/ExpCard";

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
    <div className="h-screen overflow-y-hidden">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-5 h-full gap-40">
          <div className="col-span-2 mt-20">
            <NameBio />
            <Nav /> 
            <div ref={auraRef} className="mouse-aura" />
          </div>
          <div
            className="
              right-side
              col-span-2 
              lg:col-span-3  
              overflow-y-auto
              no-scrollbar
          "
          >
            <section id="about" className="mt-20">
              <p className="text-gray-400">
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
            
            <section id="experience" className="mt-20">
                <ExperienceCard />
            </section>
            <section id="projects" className="mt-20">
                <h3 className="font-semibold text-lg text-white mb-6 lg:hidden">Projects</h3>
                <ProjectsList />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
