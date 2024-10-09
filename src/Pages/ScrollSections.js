import React, { useEffect, useRef } from "react";
import About from "./About";
import Content1 from "./addingcontent/Content1";
import Content2 from "./addingcontent/Content2";
import Content3 from "./addingcontent/Content3";
import Contant4 from "./addingcontent/Contant4";
import VissionMission from "./addingcontent/VissionMission";
import Bridging from "./Bridging";
import Contant5 from "./addingcontent/Content5";
import Leadership from "./Leadership";
import Contant6 from "./addingcontent/Contant6";
import Roadmap from "./Roadmap";
import Contact from "./Contact";

const ScrollSections = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentIndex = sectionRefs.current.indexOf(entry.target);
          sectionRefs.current[currentIndex].scrollIntoView({
            behavior: "smooth",
            block: "start", // Align the section at the start of the viewport
          });
        }
      });
    }, options);

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div>
      <section ref={(el) => (sectionRefs.current[0] = el)}>
        <About />
      </section>
      <section ref={(el) => (sectionRefs.current[1] = el)}>
        <Content1 />
      </section>
      <section ref={(el) => (sectionRefs.current[2] = el)}>
        <Content2 />
      </section>
      <section ref={(el) => (sectionRefs.current[3] = el)}>
      <Content3 />
      </section>
      <section ref={(el) => (sectionRefs.current[4] = el)}>
      <Contant4 />
      </section>

      <section ref={(el) => (sectionRefs.current[5] = el)}>
      <VissionMission />
      </section>
      <section ref={(el) => (sectionRefs.current[6] = el)}>
      <Bridging />
      </section>
      <section ref={(el) => (sectionRefs.current[7] = el)}>
      <Contant5/>
      </section>
      <section ref={(el) => (sectionRefs.current[8] = el)}>
      <Leadership />
      </section>
      <section ref={(el) => (sectionRefs.current[9] = el)}>
      <Contant6/>
      </section>
      <section ref={(el) => (sectionRefs.current[10] = el)}>
      <Roadmap/>
      </section>
      <section ref={(el) => (sectionRefs.current[11] = el)}>
      <Contact/> 
      </section>

    </div>
  );
};

export default ScrollSections;
