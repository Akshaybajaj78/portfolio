import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    id: "01",
    name: "ReconX Scanner",
    category: "Cybersecurity",
    tools:
      "Python, Flask, Nmap, Subdomain Enumeration, Directory Brute Force, XSS Detection",
    image: "/images/reco.png",
  },
  {
    id: "02",
    name: "AI Smart Interview System",
    category: "AI & Full Stack",
    tools:
      "React.js, Node.js, Express.js, MongoDB, JWT Authentication, AI Interview",
    image: "/images/ai-intern.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");

      if (!boxes.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = (boxes[0] as HTMLElement).getBoundingClientRect();

      const parentWidth = (
        boxes[0].parentElement as HTMLElement
      ).getBoundingClientRect().width;

      const padding =
        parseInt(window.getComputedStyle(boxes[0] as HTMLElement).padding) / 2;

      translateX =
        rect.width * boxes.length - (rectLeft + parentWidth) + padding;

      if (translateX < 0) translateX = 0;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    window.addEventListener("resize", setTranslateX);

    return () => {
      window.removeEventListener("resize", setTranslateX);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools & Technologies</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;